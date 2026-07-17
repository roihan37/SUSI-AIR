import { storeToRefs } from "pinia"

export function useDashboard() {

  const flightStore = useFlightHoursStore()
  const scheduleStore = useScheduleStore()
  const upcomingStore = useUpcomingFlightStore()
  const newsStore = useNewsStore()
  const documentStore = useDocumentStore()

  return {

    ...storeToRefs(flightStore),

    ...storeToRefs(scheduleStore),

    ...storeToRefs(upcomingStore),

    ...storeToRefs(newsStore),

    ...storeToRefs(documentStore)

  }

}