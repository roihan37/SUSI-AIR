<script setup lang="ts">
interface CalendarDayData {
  base: string
  color: string
  total: number
  completed: boolean
}

defineProps<{
  day: number
  data: CalendarDayData
}>()
</script>

<template>
  <div
    tabindex="0"
    class="
      relative
      h-[60px]
      w-full
      rounded-md
      p-1
      transition-all
      duration-200
      cursor-pointer
      hover:scale-105
      hover:shadow-lg
      md:h-[76px]
    "
    :style="{
      backgroundColor: data.color,
      color: '#fff'
    }"
  >
    <!-- Header -->
    <div class="flex items-start justify-between">

      <span class="text-xs font-bold md:text-base">
        {{ day }}
      </span>

      <div>

        <UIcon
          v-if="data.completed"
          name="i-lucide-check"
          class="check h-3.5 w-3.5"
        />

        <span
          v-else
          class="
            badge
            flex
            h-3
            w-3
            items-center
            justify-center
            rounded-full
            bg-white
            text-[10px]
            font-bold
            text-slate-800
          "
        >
          {{ data.total }}
        </span>

      </div>

    </div>

    <!-- Base -->
    <div
      class="
        absolute
        bottom-1
        left-1/2
        -translate-x-1/2
        text-[10px]
        font-bold
        tracking-wide
      "
    >
      {{ data.base }}
    </div>

  </div>
</template>