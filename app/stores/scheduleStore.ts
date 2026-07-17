import { defineStore } from "pinia"
import mock from "~/assets/mock/mock-schedules.json"

export const useScheduleStore = defineStore("schedule", () => {

  /* ===========================
   * State
   * =========================== */

  const today = ref(mock.today)

  const schedules = ref(mock.schedules)

  const legends = ref(mock.legend)

  /* ===========================
   * Actions
   * =========================== */

  function formatDate(date: string) {

    return new Date(date).toLocaleDateString("en-US", {

      weekday: "short",

      day: "numeric",

      month: "short",

      year: "numeric"

    })

  }

  function getLegend(code: string) {

    return legends.value.find(

      legend => legend.code === code

    )

  }

  function getScheduleByDate(date: Date) {

    const target = date.toISOString().split("T")[0]

    return schedules.value.find(

      schedule => schedule.duty_date === target

    )

  }

  /* ===========================
   * Getters
   * =========================== */

  const todaySchedule = computed(() =>

    schedules.value.find(

      schedule => schedule.duty_date === today.value

    )

  )

  const todaySummary = computed(() => {

    const schedule = todaySchedule.value

    if (!schedule) return null

    const legend = getLegend(schedule.duty_type)

    return {

      date: formatDate(schedule.duty_date),

      base: schedule.base_name,

      dutyType: schedule.duty_type,

      dutyLabel:

        legend?.label ??

        schedule.duty_type,

      schedules:

        schedule.count_schedules,

      logbooks:

        schedule.count_logbooks,

      completed:

        schedule.count_logbooks ===

        schedule.count_schedules

    }

  })

  const calendarAttributes = computed(() => {

    return schedules.value.map(schedule => ({

      key: schedule.id,

      dates: new Date(schedule.duty_date),

      highlight: {

        fillMode: "solid",

        style: {

          backgroundColor: schedule.base_color,

          color: "#fff"

        }

      },

      popover: {

        visibility: "hover"

      },

      customData: {

        id: schedule.id,

        date: schedule.duty_date,

        status: schedule.status,

        base: schedule.base_name,

        color: schedule.base_color,

        duty: schedule.duty_type,

        total: schedule.count_schedules,

        logged: schedule.count_logbooks,

        completed:

          schedule.count_logbooks ===

          schedule.count_schedules

      }

    }))

  })

  const initialPage = computed(() => {

    const date = new Date(today.value)

    return {

      month: date.getMonth() + 1,

      year: date.getFullYear()

    }

  })

  const totalSchedules = computed(

    () => schedules.value.length

  )

  const completedSchedules = computed(() =>

    schedules.value.filter(schedule =>

      schedule.count_logbooks ===

      schedule.count_schedules

    ).length

  )

  /* ===========================
   * Expose
   * =========================== */

  return {

    // State

    today,

    schedules,

    legends,

    // Getters

    todaySchedule,

    todaySummary,

    calendarAttributes,

    initialPage,

    totalSchedules,

    completedSchedules,

    // Actions

    formatDate,

    getLegend,

    getScheduleByDate

  }

})