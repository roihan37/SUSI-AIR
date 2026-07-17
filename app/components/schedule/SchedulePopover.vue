<script setup lang="ts">
interface ScheduleData {
  date: string
  duty: string
  base: string
  total: number
  logged: number
  completed: boolean
}

defineProps<{
  schedule: ScheduleData
  formatDate: (date: string) => string
}>()
</script>

<template>
  <div class="w-64 max-w-[90vw] space-y-4 p-4">

    <!-- Date -->
    <div>

      <p class="text-xs text-gray-500">
        Date
      </p>

      <p class="font-medium">
        {{ formatDate(schedule.date) }}
      </p>

    </div>

    <!-- Duty -->
    <div>

      <p class="text-xs text-gray-500">
        Duty Type
      </p>

      <UBadge color="primary">
        {{ schedule.duty }}
      </UBadge>

    </div>

    <!-- Base -->
    <div>

      <p class="text-xs text-gray-500">
        Base
      </p>

      <p class="font-semibold">
        {{ schedule.base }}
      </p>

    </div>

    <!-- Schedule & Logbook -->
    <div class="grid grid-cols-2 gap-4">

      <div>

        <p class="text-xs text-gray-500">
          Scheduled
        </p>

        <p class="font-semibold">
          {{ schedule.total }}
        </p>

      </div>

      <div>

        <p class="text-xs text-gray-500">
          Logged
        </p>

        <p class="font-semibold">
          {{ schedule.logged }}
        </p>

      </div>

    </div>

    <!-- Status -->
    <div>

      <p class="text-xs text-gray-500">
        Status
      </p>

      <UBadge
        :color="schedule.completed ? 'success' : 'warning'"
      >
        {{ schedule.completed ? "Completed" : "Pending" }}
      </UBadge>

    </div>

  </div>
</template>