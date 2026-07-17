<script setup lang="ts">
interface NewsItem {
  id: string | number
  title: string
  image: string
  category: string
  time: string
}


defineProps<{
    news: NewsItem[]
}>()
</script>

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

          <NuxtImg
            :src="item.image"
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

              {{ item.time }}

            </p>

          </div>

        </article>

      </div>

    </div>

  </UCard>

</template>