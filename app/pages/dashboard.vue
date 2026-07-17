<script setup lang="ts">
import FlightSummary from '~/components/dashboard/FlightSummary.vue';
import HoursToLimit from '~/components/dashboard/HoursToLimit.vue';
import MyDocuments from '~/components/dashboard/MyDocuments.vue';
import UpComingFlight from '~/components/dashboard/UpComingFlight.vue';

const openSidebar = useState('sidebar-open')
function toggleSidebar() {
    openSidebar.value = !openSidebar.value
}
const { cards } = useFlightLimit()
const { pilot } = useFlightHoursStore()
const { todaySummary } = useScheduleStore()
const { upcomingFlight } = useUpcomingFlightStore()
const newsStore = useNewsStore()
const documentStore = useDocumentStore()
const formattedDate = computed(() => {
    if (!upcomingFlight?.dutyDate) return ""

    return new Date(upcomingFlight.dutyDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    })
})



</script>

<template>
    <div class=" bg-zinc-50 grid grid-col-1 gap-5">
        <!-- HEADERS -->
       <Headers 
       :title="'Captain ' + pilot.name"
       :subTilte="`Have a save and productive flight`"
        />

        <!-- SUMMAERY -->
        <FlightSummary
        v-if="pilot"
        :name="pilot.totalFlightHours"
        :base="todaySummary?.base"
        />

        <!-- UPCOMING FLIGHT -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <UpComingFlight
                :flight="upcomingFlight"
                :formatted-date="formattedDate"
            />
            <!-- BAGIAN NEWS -->
            <UCard class="rounded-3xl p-5 shadow-md">

                <!-- Header -->
                <div class="mb-6 flex items-center justify-between">
                    <h2 class="text-2xl font-bold">
                        Latest News
                    </h2>

                    <UButton variant="ghost" color="error">
                        View all
                    </UButton>
                </div>

                <!-- Scroll -->
                <div class="overflow-x-auto overflow-y-hidden no-scrollbar">
                    <div class="flex w-max gap-5">

                        <div v-for="item in newsStore.latestNews" :key="item.id"
                            class="w-[270px] overflow-hidden rounded-2xl p-0 shadow-lg my-2 ">

                            <NuxtImg :src="item.image" :alt="item.title" class="h-44 w-full object-cover rounded-2xl"/>

                            <div class="p-4">

                                <UBadge variant="soft" color="neutral" class="rounded-full">
                                    {{ item.category }}
                                </UBadge>

                                <h3 class="mt-4 text-xl font-bold">
                                    {{ item.title }}
                                </h3>

                                <p class="mt-3 text-sm text-gray-500">
                                    {{ item.time }}
                                </p>

                            </div>

                        </div>

                    </div>
                </div>

            </UCard>
            
            
        </div>

        <!-- SECTION 5 -->

        <HoursToLimit 
        :cards="cards"
        />


        <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">

            <!-- SECTION 6 -->
            <UCard>

                <FlightHoursChart />

            </UCard>


            <MyDocuments 
            :documents="documentStore.documentList"
            />
        </div>
    </div>


</template>
