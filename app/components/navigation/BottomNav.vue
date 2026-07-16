<script setup lang="ts">
const menus = [
    {
        label: 'Home',
        icon: 'i-lucide-house',
        to: '/dashboard'
    },
    {
        label: 'Schedule',
        icon: 'i-lucide-calendar-days',
        to: '/schedule'
    },
    {
        label: 'Logbook',
        icon: 'i-lucide-book-open',
        to: '/logbook'
    },
    {
        label: 'More',
        icon: 'i-lucide-ellipsis',
        to: '/more'
    }
]
</script>

<template>

    <div class="fixed bottom-0 left-0 right-0 bg-white  shadow-2xl rounded-t-3xl md:hidden z-50">

        <div class="grid grid-cols-4">

            <NuxtLink v-for="menu in menus" :key="menu.label" :to="menu.to"
                class="relative flex flex-col items-center py-4 text-gray-500"
                active-class="text-[#071C44] font-semibold">

                <div v-if="$route.path === menu.to" class="absolute top-0 h-1 w-12 rounded-full bg-red-500"></div>

                <UIcon :name="menu.icon" class="text-2xl" />

                <span class="mt-2 text-sm">

                    {{ menu.label }}

                </span>

            </NuxtLink>

        </div>

    </div>

</template>