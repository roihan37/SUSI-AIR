<script setup lang="ts">

const { pilot } = useFlightHoursStore()
const openSidebar = useState('sidebar-open')

function toggleSidebar() {
    openSidebar.value = !openSidebar.value
}

defineProps<{
  title: string,
  subTilte : string
}>()

</script>
<template>
  <div class="flex flex-row items-center justify-between mb-5">
            <!-- Kalimat -->

            <div class="flex flex-row gap-2 px-1 items-start">
                <div class="hidden h-(--ui-header-height) shrink-0 md:flex items-start ">
                    <UButton class="border-1" icon="i-lucide-panel-left" color="neutral" size="xl" variant="ghost"
                        aria-label="Toggle sidebar" @click=toggleSidebar />
                </div>
                <div class="flex flex-col gap-0">

                    <h1 class="text-xl font-bold">{{title}}</h1>
                    <p class="text-xs">{{subTilte}}</p>
                </div>
            </div>

            <!-- Photo -->
            <div class="flex flex-row gap-2 sm:gap-3">
                <div class="hidden sm:flex flex-col items-start">
                    <p class="text-xs  font-light">Total Flight Hours</p>
                    <h1 class="text-2xl  font-bold ">{{ pilot.totalFlightHours }}</h1>
                    <p class="text-xs  font-light">hours</p>
                </div>
                <div class=" hidden sm:flex ml-1">
                    <USeparator orientation="vertical" size="xs" />
                </div>

                <UButton
                    class="inline-flex  hover:bg-sky-400/10  items-center rounded-md bg-zinc-50  text-xs font-medium text-sky-400 hover:inset-ring hover:inset-ring-sky-400/20">
                    <UIcon name="i-lucide-bell" class="w-6 h-6 text-sky-800" />
                </UButton>


                <img src="/images/pilot.png" alt="Login" class=" w-15 h-15 rounded-full" />

            </div>
        </div>
</template>