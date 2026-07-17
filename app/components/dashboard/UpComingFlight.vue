<script setup lang="ts">
import PlaneBoldIcon from '@iconify-vue/glyphs/plane-bold';
interface Flight {

  departureTime: string

  departure: {

    code: string
    airport: string
    icao: string

  }

  arrival: {

    code: string
    airport: string
    icao: string

  }

  aircraft: string

  flightNo: string

  duration: string

}

defineProps<{

  flight: Flight | null

  formattedDate: string

}>()
</script>

<template>

<UCard class="rounded-xl bg-white p-4 shadow-md">

    <!-- Header -->

    <div class="flex items-center justify-between">

        <h1 class="text-md font-bold sm:text-2xl">

            Upcoming Flight

        </h1>

        <UButton

            variant="ghost"

            color="error"

            size="sm"

        >

            View all

        </UButton>

    </div>

    <!-- Content -->

    <div
        v-if="flight"
        class="mt-3 grid gap-2"
    >

        <!-- Date -->

        <div
            class="flex flex-col gap-1 rounded-xl bg-zinc-50 p-3"
        >

            <div class="flex items-center gap-2">

                <UIcon name="i-lucide-calendar-days" class="size-5" />

                <p class="font-bold">

                    {{ formattedDate }}

                </p>

            </div>

            <div class="flex items-center gap-2">

                <UIcon name="i-material-symbols-timer-outline" class="size-5" />

                <p class="font-bold">

                    {{ flight.departureTime }}

                </p>

            </div>

        </div>

        <!-- Route -->

        <div
            class="grid grid-cols-3 items-center p-2"
        >

            <!-- Departure -->

            <div>

                <h2 class="font-bold">

                    {{ flight.departure.code }}

                </h2>

                <p class="text-xs">

                    {{ flight.departure.airport }}

                </p>

                <p class="text-xs">

                    {{ flight.departure.icao }}

                </p>

            </div>

            <!-- Plane -->

            <div
                class="relative flex items-center justify-center"
            >

                <div
                    class="absolute left-0 right-0 h-[2px] bg-slate-300"
                />

                <div
                    class="absolute right-0 text-slate-300"
                >

                    →

                </div>

                <div
                    class="relative z-10 rounded-full bg-white p-2"
                >

                    <PlaneBoldIcon height="2em"/>

                </div>

            </div>

            <!-- Arrival -->

            <div class="text-right">

                <h2 class="font-bold">

                    {{ flight.arrival.code }}

                </h2>

                <p class="text-xs">

                    {{ flight.arrival.airport }}

                </p>

                <p class="text-xs">

                    {{ flight.arrival.icao }}

                </p>

            </div>

        </div>

        <!-- Detail -->

        <div
            class="flex flex-col gap-2 rounded-xl bg-zinc-50 p-3"
        >

            <div
                class="flex justify-between"
            >

                <span>

                    Aircraft

                </span>

                <span class="font-bold">

                    {{ flight.aircraft }}

                </span>

            </div>

            <USeparator/>

            <div
                class="flex justify-between"
            >

                <span>

                    Flight No.

                </span>

                <span class="font-bold">

                    {{ flight.flightNo }}

                </span>

            </div>

            <USeparator/>

            <div
                class="flex justify-between"
            >

                <span>

                    Duration

                </span>

                <span class="font-bold">

                    {{ flight.duration }}

                </span>

            </div>

        </div>

    </div>

    <!-- Empty -->

    <div
        v-else
        class="py-16 text-center text-gray-500"
    >

        No upcoming flight.

    </div>

</UCard>

</template>