<script setup lang="ts">
import ScheduleDayCell from './ScheduleDayCell.vue'
import SchedulePopover from './SchedulePopover.vue'

interface Props {

  calendarAttributes: any[]

  initialPage: {

    month: number

    year: number

  }

  formatDate: (date: string) => string

}

defineProps<Props>()
</script>

<template>

<VCalendar
    expanded
    borderless
    transparent
    :attributes="calendarAttributes"
    :initial-page="initialPage"
>

    <template #day-content="{ day, attributes }">

        <UPopover
            v-if="attributes.length"
            mode="hover"
        >

            <!-- Day -->

            

            <ScheduleDayCell
  :day="day.day"
  :data="attributes[0].customData"
/>

            <!-- Popover -->

            <template #content>

                <SchedulePopover
    :schedule="attributes[0].customData"
    :format-date="formatDate"
  />


            </template>

        </UPopover>

        <div
            v-else
            class="flex h-full w-full items-center justify-center"
        >

            <span class="font-semibold">

                {{ day.day }}

            </span>

        </div>

    </template>

</VCalendar>

</template>