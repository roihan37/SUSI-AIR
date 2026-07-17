<template>
  <div class="space-y-6">

    <!-- Flight Summary -->
    <div class="rounded-3xl p-4">

      <div class="flex items-center justify-between">

        <div class="space-y-3">

          <USkeleton class="h-4 w-36" />

          <USkeleton class="h-10 w-24" />

        </div>

        <div class="flex items-center gap-5">

          <USkeleton class="h-12 w-px" />

          <div class="space-y-2">

            <USkeleton class="h-3 w-12" />

            <USkeleton class="h-5 w-20" />

          </div>

          <USkeleton class="h-14 w-14 rounded-full" />

        </div>

      </div>

    </div>

    <!-- Upcoming + Documents -->

    <div class="grid gap-6 lg:grid-cols-3">

      <!-- Upcoming Flight -->

      <div class="rounded-3xl lg:col-span-2 p-5">

        <div class="mb-5 flex justify-between">

          <USkeleton class="h-7 w-44" />

          <USkeleton class="h-6 w-16" />

        </div>

        <USkeleton class="h-16 rounded-xl" />

        <USkeleton class="mt-4 h-24 rounded-xl" />

        <USkeleton class="mt-4 h-32 rounded-xl" />

      </div>

      <!-- My Documents -->

      <div class="rounded-3xl p-5">

        <div class="mb-5 flex justify-between">

          <USkeleton class="h-7 w-40" />

          <USkeleton class="h-6 w-16" />

        </div>

        <div
          v-for="i in 5"
          :key="i"
          class="mb-4 flex items-center justify-between"
        >

          <div class="flex items-center gap-4">

            <USkeleton class="h-12 w-12 rounded-xl" />

            <div>

              <USkeleton class="h-5 w-40" />

              <USkeleton class="mt-2 h-4 w-24" />

            </div>

          </div>

          <USkeleton class="h-8 w-20 rounded-full" />

        </div>

      </div>

    </div>

    <!-- Hours to Limit -->

    <div class="rounded-3xl p-6">

      <div class="mb-6 flex justify-between">

        <USkeleton class="h-7 w-48" />

        <USkeleton class="h-6 w-24" />

      </div>

      <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <div
          v-for="i in 4"
          :key="i"
          class="rounded-3xl"
        >

          <div class="flex gap-4">

            <USkeleton class="h-10 w-10 rounded-full" />

            <div>

              <USkeleton class="h-5 w-20" />

              <USkeleton class="mt-2 h-4 w-16" />

            </div>

          </div>

          <USkeleton class="mt-8 h-10 w-28" />

          <USkeleton class="mt-6 h-3 rounded-full" />

          <USkeleton class="mx-auto mt-6 h-5 w-24" />

        </div>

      </div>

    </div>

    <!-- Latest News -->

    <div class="rounded-3xl p-5">

      <div class="mb-6 flex justify-between">

        <USkeleton class="h-7 w-40" />

        <USkeleton class="h-6 w-20" />

      </div>

      <div class="flex gap-5 overflow-hidden">

        <div
          v-for="i in 3"
          :key="i"
          class="w-[270px]"
        >

          <USkeleton class="h-44 rounded-2xl" />

          <USkeleton class="mt-4 h-5 w-20 rounded-full" />

          <USkeleton class="mt-4 h-5 w-full" />

          <USkeleton class="mt-2 h-4 w-2/3" />

        </div>

      </div>

    </div>

  </div>
</template>