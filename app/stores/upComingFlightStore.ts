import { defineStore } from "pinia"

import schedulesMock from "~/assets/mock/mock-schedules.json"
import documentsMock from "~/assets/mock/mock-documents.json"
import flightDetail from "~/assets/mock/flight-detail"

export const useUpcomingFlightStore = defineStore("upcomingFlight", () => {

  /* ===========================
   * Dependencies
   * =========================== */

  const flightHoursStore = useFlightHoursStore()

  /* ===========================
   * State
   * =========================== */

  const schedules = ref(schedulesMock.schedules)

  const documents = ref(documentsMock.documents)

  const detail = ref(flightDetail)

  /* ===========================
   * Actions
   * =========================== */

  function isUpcomingDuty(date: string) {

    return new Date(date) >= new Date(flightHoursStore.today)

  }

  /* ===========================
   * Getters
   * =========================== */

  const nextSchedule = computed(() => {

    return schedules.value.find(schedule =>

      schedule.status === 1 &&

      schedule.duty_type === "DTY" &&

      isUpcomingDuty(schedule.duty_date)

    )

  })

  const upcomingFlight = computed(() => {

    const schedule = nextSchedule.value

    if (!schedule) return null

    return {

      id: schedule.id,

      dutyDate: schedule.duty_date,

      dutyType: schedule.duty_type,

      base: schedule.base_name,

      countSchedules: schedule.count_schedules,

      ...detail.value

    }

  })

  /* ===========================
   * Expose
   * =========================== */

  return {

    // State

    schedules,

    documents,

    detail,

    // Getters

    nextSchedule,

    upcomingFlight,

    // Actions

    isUpcomingDuty

  }

})