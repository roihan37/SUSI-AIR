<script setup lang="ts">
interface LegendItem {
  code: string
  label: string
  color: string
}

defineProps<{
  legends: LegendItem[]
}>()
</script>

<template>
  <UCard class="col-span-1 rounded-3xl">

    <h2 class="mb-5 text-xl font-bold">
      Duty Type Legend
    </h2>

    <div
      class="
        grid
        grid-cols-1
        gap-y-3
        sm:grid-cols-2
        sm:gap-x-5
      "
    >
      <div
        v-for="item in legends"
        :key="item.code"
        class="flex items-center gap-3"
      >
        <div
          class="h-3 w-3 rounded-full"
          :style="{
            backgroundColor: item.color
          }"
        />

        <span class="text-md font-semibold">
          {{ item.code }}
        </span>

        <span class="text-sm text-gray-500">
          {{ item.label }}
        </span>
      </div>
    </div>

  </UCard>
</template>