<script setup lang="ts">
import { storeToRefs } from "pinia"
import DutyLegend from "~/components/schedule/DutyLegend.vue"
import TodayScheduleCard from "~/components/schedule/TodayScheduleCard.vue"

const scheduleStore = useScheduleStore()

const {
    calendarAttributes,
    legends,
    initialPage,
    todaySummary
} = storeToRefs(scheduleStore)

const openSidebar = useState('sidebar-open')

</script>

<template>
    <div >
        <!-- Header -->

        <Headers title="Schedule" :subTilte="`Review your monthly duty schedule`"/>

        <!-- Calendar -->
         <div class="grid grid-col-1 lg:grid-flow-col lg:grid-rows-2 gap-4">
             <UCard class="rounded-3xl row-span-2">
     
                

<ScheduleCalendar

    :calendar-attributes="calendarAttributes"

    :initial-page="initialPage"

    :format-date="scheduleStore.formatDate"

/>


     
             </UCard>
     
             <TodayScheduleCard
    :summary="todaySummary"
/>


             <DutyLegend
    :legends="legends"
/>

         </div>

        <!-- Legend -->

    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/calendar";
</style>