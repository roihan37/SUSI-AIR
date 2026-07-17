<script setup lang="ts">
import FlightSummary from '~/components/dashboard/FlightSummary.vue';
import UpComingFlight from '~/components/dashboard/UpComingFlight.vue';
import HoursToLimit from '~/components/dashboard/HoursToLimit.vue';
import MyDocuments from '~/components/dashboard/MyDocuments.vue';
import { useDashboard } from '~/composables/useDashboard';
import News from '~/components/dashboard/News.vue';

const { cards } = useFlightLimit()

const {
    pilot,
    todaySummary,
    upcomingFlight,
    latestNews,
    documentList
} = useDashboard()

const formattedDate = computed(() => {
    if (!upcomingFlight.value?.dutyDate) return ""

    return new Date(upcomingFlight.value.dutyDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    })
})

watch(latestNews, value => {
  console.log("latestNews", value)
}, {
  immediate: true
})


</script>

<template>
   
    
        <!-- <pre>{{ latestNews }}</pre> -->
        <Headers :title="'Captain ' + pilot.name" :subTilte="`Have a save and productive flight`" />
        <div class=" bg-zinc-50 grid grid-col-1 gap-5">
            <!-- HEADERS -->
    
            <!-- SUMMAERY -->
            <FlightSummary v-if="pilot" :name="pilot.totalFlightHours" :base="todaySummary?.base" />
    
            <!-- UPCOMING FLIGHT -->
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <UpComingFlight :flight="upcomingFlight" :formatted-date="formattedDate" />
                <!-- BAGIAN NEWS -->
    
    
                <template>
                    <News :news="latestNews" />

                </template>
            </div>
    
    
            <!-- SECTION 5 -->
    
    
            <HoursToLimit :cards="cards" />
    
    
            <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
    
                <!-- SECTION 6 -->
                <UCard>
    
                    <FlightHoursChart />
    
                </UCard>
    
    
    
                <!-- SECTION 7 -->
    
                <MyDocuments :documents="documentList" />
            </div>
        </div>
    
    
    
</template>
