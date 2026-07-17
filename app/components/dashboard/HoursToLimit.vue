<script setup lang="ts">

type ProgressColor =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "neutral"

interface FlightLimitCard {

  title: string

  icon: string

  color: ProgressColor

  limit: number

  currentText: string

  limitText: string

  remainingText: string

  progress: number

}

defineProps<{

  cards: FlightLimitCard[]

}>()

</script>

<template>

<UCard class="rounded-3xl p-6">

    <!-- Header -->

    <div class="mb-6 flex items-center justify-between">

        <h2 class="text-2xl font-bold">

            Hours to Limit

        </h2>

        <UButton

            variant="ghost"

            color="error"

        >

            View details

        </UButton>

    </div>

    <!-- Cards -->

    <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <UCard

            v-for="item in cards"

            :key="item.title"

            class="rounded-3xl"

        >

            <!-- Top -->

            <div class="flex gap-4">

                <div

                    class="flex h-10 w-10 items-center justify-center rounded-full"

                    :class="{

                        'bg-sky-100': item.color === 'info',

                        'bg-green-100': item.color === 'success',

                        'bg-orange-100': item.color === 'warning',

                        'bg-violet-100': item.color === 'secondary',

                        'bg-red-100': item.color === 'error',

                        'bg-gray-100': item.color === 'neutral',

                        'bg-blue-100': item.color === 'primary'

                    }"

                >

                    <UIcon

                        :name="item.icon"

                        class="text-md"

                        :class="{

                            'text-sky-500': item.color === 'info',

                            'text-green-500': item.color === 'success',

                            'text-orange-500': item.color === 'warning',

                            'text-violet-500': item.color === 'secondary',

                            'text-red-500': item.color === 'error',

                            'text-gray-500': item.color === 'neutral',

                            'text-blue-500': item.color === 'primary'

                        }"

                    />

                </div>

                <div>

                    <h3 class="text-xl font-bold lg:text-lg">

                        {{ item.title }}

                    </h3>

                    <p class="text-gray-500">

                        Limit {{ item.limit }}h

                    </p>

                </div>

            </div>

            <!-- Progress -->

            <div class="mt-10">

                <div class="flex items-end">

                    <span class="text-4xl font-bold lg:text-3xl">

                        {{ item.currentText }}

                    </span>

                    <span class="mb-1 ml-2 text-xl text-gray-400 lg:text-lg">

                        / {{ item.limitText }}

                    </span>

                </div>

                <UProgress

                    class="mt-6"

                    :model-value="item.progress"

                    :color="item.color"

                />

                <p class="mt-6 text-center text-xl font-semibold">

                    {{ item.remainingText }} left

                </p>

            </div>

        </UCard>

    </div>

</UCard>

</template>