<script setup lang="ts">
interface TodaySummary {
  date: string
  base: string
  dutyType: string
  dutyLabel: string
  schedules: number
  logbooks: number
  completed: boolean
}

defineProps<{
  summary: TodaySummary | null
}>()
</script>

<template>
  <UCard
    v-if="summary"
    class="row-span-1 rounded-3xl"
  >
    <!-- Header -->
    <div class="flex items-start justify-between">

      <!-- Left -->
      <div class="flex gap-4">

        <div
          class="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100"
        >
          <UIcon
            name="i-lucide-calendar-days"
            class="text-3xl text-blue-600"
          />
        </div>

        <div>

          <h2 class="text-lg font-bold">

            {{ summary.date }}

          </h2>

          <p class="font-medium text-blue-600">

            Today

          </p>

        </div>

      </div>

      <!-- Right -->
      <div class="text-right">

        <UBadge
          color="primary"
          size="lg"
          class="px-4 py-2"
        >

          {{ summary.base }}

        </UBadge>

        <p class="mt-2 text-sm font-medium">

          {{ summary.dutyLabel }}

        </p>

      </div>

    </div>

    <USeparator class="my-6" />

    <!-- Detail -->
    <div
      class="
        grid
        grid-cols-3
        gap-2
        lg:grid-cols-2
        lg:gap-8
        lg:px-4
      "
    >

      <!-- Duty -->

      <div>

        <div class="flex items-center gap-2">

          <UIcon name="i-lucide-briefcase" />

          <span
            class="text-xs text-gray-500 lg:text-sm"
          >

            DUTY TYPE

          </span>

        </div>

        <p
          class="
            mt-2
            text-base
            font-semibold
            text-green-600
            lg:text-lg
          "
        >

          {{ summary.dutyLabel }}

          ({{ summary.dutyType }})

        </p>

      </div>

      <!-- Schedule -->

      <div>

        <div class="flex items-center gap-2">

          <UIcon
            name="i-lucide-clipboard-list"
          />

          <span
            class="text-xs text-gray-500 lg:text-sm"
          >

            SCHEDULES

          </span>

        </div>

        <p
          class="mt-2 text-base font-semibold lg:text-lg"
        >

          {{ summary.schedules }}

          Flight(s)

        </p>

      </div>

      <!-- Logbook -->

      <div>

        <div class="flex items-center gap-2">

          <UIcon
            name="i-lucide-book-open"
          />

          <span
            class="text-xs text-gray-500 lg:text-sm"
          >

            LOGBOOKS

          </span>

        </div>

        <div
          class="
            mt-2
            flex
            items-center
            gap-2
          "
        >

          <span
            class="text-base font-semibold lg:text-lg"
          >

            {{ summary.logbooks }}

            Logged

          </span>

          <UIcon
            v-if="summary.completed"
            name="i-lucide-circle-check-big"
            class="text-green-500"
          />

        </div>

      </div>

    </div>

  </UCard>
</template>