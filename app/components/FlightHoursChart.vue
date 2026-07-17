<script setup lang="ts">
import { computed } from "vue"
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { LineChart } from "echarts/charts"

import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  MarkLineComponent,
  LegendComponent
} from "echarts/components"

import VChart from "vue-echarts"
import { useFlightHoursStore } from "~/stores/flightStore"

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  MarkLineComponent,
  LegendComponent
])

const store = useFlightHoursStore()

const ranges = ["1w", "1m", "3m", "6m", "1y"] as const

const currentConfig = computed(() => {
  return store.chartBounds[store.selectedRange]
})

const chartData = computed(() => {
  const config = currentConfig.value
  const today = new Date(store.today)

  return Array.from({ length: 15 }, (_, i) => {
    const current = new Date(today)

    current.setDate(today.getDate() - 7 + i)

    const start = new Date(current)

    start.setDate(current.getDate() - config.windowDays + 1)

    const total = store.flightHours
      .filter((item) => {
        const d = new Date(item.date)

        return d >= start && d <= current
      })
      .reduce((sum, item) => sum + item.hours, 0)

    return Number(total.toFixed(1))
  })
})

const xAxisData = computed(() => {
  const today = new Date(store.today)

  return Array.from({ length: 15 }, (_, i) => {
    const date = new Date(today)

    date.setDate(today.getDate() - 7 + i)

    return {
      value: date,
      label: date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short"
      }),
      isToday: i === 7
    }
  })
})

const option = computed(() => ({
  grid: {
    top: 70,
    left: 50,
    right: 20,
    bottom: 70
  },

  tooltip: {
    trigger: "axis"
  },

  xAxis: {
  type: "category",

  data: xAxisData.value.map(item => item.label),

  axisLabel: {
    hideOverlap: true,

    formatter(value: string) {

  const d = new Date(value)

  const day = d.getDate()

  const month = d.toLocaleDateString("en", {
    month: "short"
  })

  const isToday =
    d.toDateString() === new Date(store.today).toDateString()

  if (isToday) {
    return `{today|${day}}\n{today|${month}}\n{small|Today}`
  }

  return `${day}\n${month}`
},

    rich: {

      today: {
        color: "#E63757",
        fontWeight: "bold",
        fontSize: 16
      },

      small: {
        color: "#64748B",
        fontSize: 12
      }

    }
  }
},

  yAxis: {
    type: "value",

    max: currentConfig.value.max
  },

  series: [
    {
      type: "line",

      smooth: true,

      data: chartData.value,

      symbol: "circle",

      symbolSize: 10,

      lineStyle: {
        color: "#22C5E8",
        width: 4
      },

      itemStyle: {
        color: "#22C5E8"
      },

      markLine: {
  symbol: "none",

  lineStyle: {
    color: "#2563EB"
  },

  data: [
    {
      xAxis: 7
    },
    {
      yAxis: currentConfig.value.limit
    }
  ]
}
    }
  ]
}))
</script>
<template>
  <UCard>

    <div class="mb-6 flex items-center justify-between">

      <div>

        <h2 class="text-xl font-bold">
          Flight Hours Trend
        </h2>

        <p class="text-sm text-gray-500">
          Rolling sum of flight hours
        </p>

      </div>

      <div class="flex rounded-xl border overflow-hidden">

        <button
          v-for="item in ranges"
          :key="item"
          @click="store.changeRange(item)"
          class="px-5 py-2 text-sm font-semibold transition"
          :class="[
            store.selectedRange === item
              ? 'bg-[#071C44] text-white'
              : 'bg-white hover:bg-gray-100'
          ]"
        >
          {{ item }}
        </button>

      </div>

    </div>

    <VChart
      :option="option"
      autoresize
      style="height:420px"
    />

  </UCard>
</template>