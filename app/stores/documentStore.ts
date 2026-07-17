import { defineStore } from "pinia"
import mockDocuments from "~/assets/mock/mock-documents.json"

type DocumentColor = "success" | "warning" | "error"

interface DocumentStatus {
  color: DocumentColor
  status: string
  icon: string
}

const MS_PER_DAY = 1000 * 60 * 60 * 24

export const useDocumentStore = defineStore("documents", () => {

  /* ===========================
   * State
   * =========================== */

  const today = ref(mockDocuments.today)

  const warningDays = ref(
    mockDocuments.thresholds.warningDays
  )

  const documents = ref(
    mockDocuments.documents
  )

  /* ===========================
   * Actions
   * =========================== */

  function formatDate(date: string) {

    return new Date(date).toLocaleDateString("en-GB", {

      day: "numeric",

      month: "short",

      year: "numeric"

    })

  }

  function getRemainingDays(expiryDate: string) {

    const start = new Date(today.value)

    const end = new Date(expiryDate)

    return Math.ceil(

      (end.getTime() - start.getTime()) /

      MS_PER_DAY

    )

  }

  function getDocumentStatus(daysRemaining: number): DocumentStatus {

    if (daysRemaining <= 0) {

      return {

        color: "error",

        status: "Expired",

        icon: "i-lucide-circle-x"

      }

    }

    if (daysRemaining <= warningDays.value) {

      return {

        color: "warning",

        status: "Expiring Soon",

        icon: "i-lucide-triangle-alert"

      }

    }

    return {

      color: "success",

      status: "Valid",

      icon: "i-lucide-badge-check"

    }

  }

  /* ===========================
   * Getters
   * =========================== */

  const documentList = computed(() => {

    return documents.value.map(document => {

      const daysRemaining = getRemainingDays(

        document.expiryDate

      )

      return {

        id: document.id,

        title: document.label,

        expiryDate: document.expiryDate,

        expired: formatDate(

          document.expiryDate

        ),

        daysRemaining,

        ...getDocumentStatus(daysRemaining)

      }

    })

  })

  /* ===========================
   * Expose
   * =========================== */

  return {

    // State

    today,

    warningDays,

    documents,

    // Getters

    documentList,

    // Actions

    formatDate,

    getRemainingDays,

    getDocumentStatus

  }

})