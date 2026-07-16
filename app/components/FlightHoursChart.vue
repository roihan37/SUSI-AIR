<script setup lang="ts">
import { ref, computed } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'

import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  MarkLineComponent
} from 'echarts/components'

import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  MarkLineComponent
])

const selectedRange = ref<'1w' | '1m' | '3m' | '6m' | '1y'>('1w')

const ranges = ['1w', '1m', '3m', '6m', '1y'] as const

const chartConfig = {
  '1w': {
    labels: [
      '24 May','25 May','26 May','27 May','28 May',
      '29 May','30 May','31 May',
      '01 Jun','02 Jun','03 Jun','04 Jun','05 Jun','06 Jun','07 Jun'
    ],

    data: [0,8,12,12,13,26,35,27,17,26,25,24,17,25,34],

    max: 45,

    limit: 40,

    highlight: '31 May'
  },

  '1m': {
    labels: ['Week 1','Week 2','Week 3','Week 4'],

    data: [22,30,18,35],

    max: 40,

    limit: 35,

    highlight: 'Week 2'
  },

  '3m': {
    labels: ['Jan','Feb','Mar'],

    data: [120,150,170],

    max: 200,

    limit: 180,

    highlight: 'Feb'
  },

  '6m': {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],

    data: [120,135,150,170,180,190],

    max: 220,

    limit: 200,

    highlight: 'Apr'
  },

  '1y': {
    labels: [
      'Jan','Feb','Mar','Apr','May','Jun',
      'Jul','Aug','Sep','Oct','Nov','Dec'
    ],

    data: [120,130,145,155,170,180,190,175,185,195,205,215],

    max: 230,

    limit: 210,

    highlight: 'Jul'
  }

} as const

const current = computed(() => chartConfig[selectedRange.value])

const option = computed(() => ({
  title: [
    {
      text: `Flight Hours Trend (${selectedRange.value})`,
      left: '0%',
      top: 5,
      textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E293B'
      }
    },

    {
      text: 'Hours',
      left: '0%',
      top: 60,
      textStyle: {
        fontSize: 14,
        color: '#64748B'
      }
    },

    {
      text: `Limit ${current.value.limit}:00h`,
      right: '0%',
      top: 60,
      textStyle: {
        color: '#EF4444',
        fontSize: 18,
        fontWeight: 'bold'
      }
    }
  ],

  grid: {
    top: 100,
    left: 50,
    right: 20,
    bottom: 90
  },

  tooltip: {
    trigger: 'axis'
  },

  xAxis: {
    type: 'category',

    data: current.value.labels,

    axisTick: {
      show: false
    },

    axisLine: {
      lineStyle: {
        color: '#CBD5E1'
      }
    },

    axisLabel: {
      interval: 0,

      formatter(value: string) {

        if (value === current.value.highlight) {

          return `{red|${value}}\n{today|Today}`

        }

        return value
      },

      rich: {

        red: {
          color: '#EF4444',
          fontWeight: 'bold',
          fontSize: 16
        },

        today: {
          color: '#64748B',
          fontSize: 13
        }

      }
    }
  },

  yAxis: {

    type: 'value',

    max: current.value.max,

    splitLine: {
      show: false
    }

  },

  series: [

    {

      type: 'line',

      smooth: true,

      symbol: 'circle',

      symbolSize: 12,

      data: current.value.data.map((value, index) => {

        if (current.value.labels[index] === current.value.highlight) {

          return {

            value,

            itemStyle: {

              color: '#EF4444'

            }

          }

        }

        return value

      }),

      lineStyle: {

        width: 3,

        color: '#2196F3'

      },

      itemStyle: {

        color: '#2196F3'

      },

      markLine: {

        silent: true,

        symbol: 'none',

        label: {

          show: false

        },

        lineStyle: {

          color: '#EF4444',

          type: 'dashed',

          width: 2

        },

        data: [

          {

            yAxis: current.value.limit

          }

        ]

      }

    }

  ]

}))
</script>

<template>
  <UCard class="rounded-3xl">

    <VChart
      :option="option"
      autoresize
      style="height:420px"
    />

    <div class="mt-4 grid grid-cols-5 overflow-hidden rounded-xl border">

      <button
        v-for="item in ranges"
        :key="item"
        @click="selectedRange = item"
        class="py-4 text-lg font-semibold transition"
        :class="
          selectedRange === item
            ? 'bg-[#071C44] text-white'
            : 'bg-white hover:bg-gray-100'
        "
      >
        {{ item }}
      </button>

    </div>

  </UCard>
</template>