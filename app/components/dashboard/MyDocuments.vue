<script setup lang="ts">
type DocumentColor =
  | "success"
  | "warning"
  | "error"

interface DocumentItem {

  id: string

  title: string

  expired: string

  status: string

  icon: string

  color: DocumentColor

}

defineProps<{

  documents: DocumentItem[]

}>()
</script>

<template>

<UCard class="rounded-3xl">

    <!-- Header -->

    <div class="mb-6 flex items-center justify-between">

        <h2 class="text-2xl font-bold">

            My Documents

        </h2>

        <UButton

            variant="ghost"

            color="error"

        >

            View all

        </UButton>

    </div>

    <!-- List -->

    <div class="space-y-3">

        <div

            v-for="item in documents"

            :key="item.id"

            class="
                flex
                items-center
                justify-between
                rounded-2xl
                px-2
                py-2
                transition
                hover:bg-gray-50
            "

        >

            <!-- Left -->

            <div class="flex items-center gap-4">

                <div

                    class="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                    "

                    :class="{

                        'bg-green-100': item.color === 'success',

                        'bg-orange-100': item.color === 'warning',

                        'bg-red-100': item.color === 'error'

                    }"

                >

                    <UIcon

                        :name="item.icon"

                        class="text-2xl"

                        :class="{

                            'text-green-600': item.color === 'success',

                            'text-orange-500': item.color === 'warning',

                            'text-red-500': item.color === 'error'

                        }"

                    />

                </div>

                <div>

                    <h3 class="text-lg font-semibold">

                        {{ item.title }}

                    </h3>

                    <p class="text-sm text-gray-500">

                        Expiry Date • {{ item.expired }}

                    </p>

                </div>

            </div>

            <!-- Right -->

            <div class="flex items-center gap-5">

                <UBadge

                    size="lg"

                    variant="soft"

                    class="rounded-full px-4 py-2"

                    :color="item.color"

                >

                    {{ item.status }}

                </UBadge>

                <UIcon

                    name="i-lucide-chevron-right"

                    class="text-xl text-gray-400"

                />

            </div>

        </div>

    </div>

</UCard>

</template>