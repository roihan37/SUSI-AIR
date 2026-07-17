import { defineStore } from 'pinia'
import mockData from '~/assets/mock/mock-flight-hours.json'
import schedules from "~/assets/mock/mock-schedules.json"


export const useFlightHoursStore = defineStore('flightHours', () => {
  const pilot = ref(mockData.pilot)
  const totalFlight = ref(mockData.pilot.totalFlightHours)
  const limits = ref(mockData.limits)
  const chartBounds = ref(mockData.chartBounds)
  const flightHours = ref(mockData.flightHours)
  const dateNow = schedules.schedules
  const todayFull = dateNow.find(
    (el) => el.duty_date === '2026-05-31'
  )
  
  const today = ref('2026-05-31')
  const selectedRange = ref<'1w' | '1m' | '3m' | '6m' | '1y'>('1w')
  function changeRange(range: typeof selectedRange.value) {
    selectedRange.value = range
  }

  return {
    pilot,
    limits,
    chartBounds,
    flightHours,
    today,
    todayFull,
    selectedRange,
    changeRange,
    totalFlight
  }
})