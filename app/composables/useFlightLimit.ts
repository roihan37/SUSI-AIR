export function useFlightLimit() {
  const store = useFlightHoursStore()

  function sumHours(days: number) {
    const today = new Date(store.today)

    const start = new Date(today)

    start.setDate(today.getDate() - days + 1)

    return store.flightHours
      .filter(item => {
        const date = new Date(item.date)

        return date >= start && date <= today
      })
      .reduce((sum, item) => sum + item.hours, 0)
  }

  function formatHours(value: number) {
    const h = Math.floor(value)
    const m = Math.round((value - h) * 60)

    return `${h}:${String(m).padStart(2, "0")}`
  }

  const cardConfig = [
    {
      title: "Daily",
      icon: "i-lucide-sun",
      color: "info",

      limit: 8,

      current: sumHours(1)
    },

    {
      title: "Weekly",
      icon: "i-lucide-calendar",
      color: "success",

      limit: store.chartBounds["1w"].limit,

      current: sumHours(7)
    },

    {
      title: "Monthly",
      icon: "i-lucide-calendar-range",
      color: "warning",

      limit: store.chartBounds["1m"].limit,

      current: sumHours(30)
    },

    {
      title: "Annual",
      icon: "i-lucide-calendar-days",
      color: "secondary",

      limit: store.chartBounds["1y"].limit,

      current: sumHours(365)
    }

  ] as const

  const cards = computed(() => cardConfig.map(card => {

    const remaining = Math.max(card.limit - card.current, 0)

    return {

      ...card,

      progress: (card.current / card.limit) * 100,

      currentText: formatHours(card.current),

      limitText: formatHours(card.limit),

      remainingText: formatHours(remaining)

    }

  }))

  return {
    cards
  }
}