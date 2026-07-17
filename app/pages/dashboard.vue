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
    news,
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
                    <UCard class="rounded-3xl p-5 shadow-md">

    <!-- Header -->
    <div class="mb-6 flex items-center justify-between">

      <h2 class="text-2xl font-bold">

        Latest News

      </h2>

      <UButton
        variant="ghost"
        color="error"
      >

        View all

      </UButton>

    </div>

    <!-- News List -->

    <div
      class="overflow-x-auto overflow-y-hidden no-scrollbar"
    >

      <div
        class="flex w-max gap-5"
      >

        <article
          v-for="item in news"
          :key="item.id"
          class="
            my-2
            w-[270px]
            overflow-hidden
            rounded-2xl
            bg-white
            shadow-lg
            transition
            hover:-translate-y-1
            hover:shadow-xl
          "
        >

          <img
           
            :alt="item.title"
            class="h-44 w-full rounded-t-2xl object-cover"
          />

          <div class="p-4">

            <UBadge
              variant="soft"
              color="neutral"
              class="rounded-full"
            >

              {{ item.category }}

            </UBadge>

            <h3
              class="mt-4 line-clamp-2 text-lg font-bold"
            >

              {{ item.title }}

            </h3>

            <p
              class="mt-3 text-sm text-gray-500"
            >

              <!-- {{ item.time }} -->

            </p>

          </div>

        </article>

      </div>

    </div>

  </UCard>

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
