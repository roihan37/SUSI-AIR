<script setup lang="ts">
import ScheduleIcon from '@iconify-vue/uil/schedule';
import NotifcationsIcon from '@iconify-vue/ion/notifcations';
import ManPilotLightSkinToneIcon from '@iconify-vue/noto-v1/man-pilot-light-skin-tone';
import ScheduleOutlineIcon from '@iconify-vue/material-symbols/schedule-outline';
import PlaneBoldIcon from '@iconify-vue/glyphs/plane-bold';
const open = ref(true)

type ProgressColor =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'neutral'

interface Limit {
    title: string
    subtitle: string
    current: string
    total: string
    left: string
    progress: number
    color: ProgressColor
    icon: string
}

type Status = 'success' | 'warning' | 'error'

interface DocumentItem {
    id: number
    title: string
    expired: string
    status: string
    color: Status
    icon: string
}

const documents: DocumentItem[] = [
    {
        id: 1,
        title: 'Medical Certificate',
        expired: 'Exp. 12 Jul 2026',
        status: 'Valid (42 days)',
        color: 'success',
        icon: 'i-lucide-file-check'
    },
    {
        id: 2,
        title: 'AOC Competency',
        expired: 'Exp. 25 Jun 2026',
        status: 'Expires in 25 days',
        color: 'warning',
        icon: 'i-lucide-file-check'
    },
    {
        id: 3,
        title: 'Dangerous Goods',
        expired: 'Exp. 10 Jun 2026',
        status: 'Expires in 10 days',
        color: 'error',
        icon: 'i-lucide-badge-alert'
    },
    {
        id: 4,
        title: 'Pilot License',
        expired: 'Exp. 15 Apr 2026',
        status: 'Expired',
        color: 'error',
        icon: 'i-lucide-file-warning'
    }
]

const news = [
    {
        id: 1,
        category: 'OPERATIONS',
        title: 'New Operational Procedure Update',
        time: '2 hours ago',
        image: '/images/news/news1.png'
    },
    {
        id: 2,
        category: 'SAFETY',
        title: 'Safety Briefing May 2026',
        time: '1 day ago',
        image: '/images/news/news2.png'
    },
    {
        id: 3,
        category: 'FLEET',
        title: 'New C208B Arrival',
        time: '2 days ago',
        image: '/images/news/news3.png'
    },
    {
        id: 4,
        category: 'TRAINING',
        title: 'Pilot Training Schedule',
        time: '3 days ago',
        image: '/images/news/news4.png'
    }
]

const limits: Limit[] = [
    {
        title: 'Daily',
        subtitle: 'Limit 8h',
        current: '6:15',
        total: '8:00',
        left: '1:45 left',
        progress: 78,
        color: 'info',
        icon: 'i-lucide-sun'
    },
    {
        title: 'Weekly',
        subtitle: 'Limit 40h',
        current: '32:20',
        total: '40:00',
        left: '7:40 left',
        progress: 81,
        color: 'success',
        icon: 'i-lucide-calendar'
    },
    {
        title: 'Monthly',
        subtitle: 'Limit 100h',
        current: '78:30',
        total: '100:00',
        left: '21:30 left',
        progress: 79,
        color: 'warning',
        icon: 'i-lucide-calendar-days'
    },
    {
        title: 'Annual',
        subtitle: 'Limit 1050h',
        current: '420:10',
        total: '1050:00',
        left: '629:50 left',
        progress: 40,
        color: 'secondary',
        icon: 'i-lucide-calendar-range'
    }
]


const openSidebar = useState('sidebar-open')

function toggleSidebar() {
  openSidebar.value = !openSidebar.value
}


</script>

<template>


    <div class="p-5 bg-zinc-50 grid grid-col-1 gap-5">
        <!-- SECTION 1 -->
        <div class="flex flex-row items-center justify-between">
            <!-- Kalimat -->
            
            <div class="flex flex-row gap-2">
                <div class="hidden h-(--ui-header-height) shrink-0 md:flex items-start ">
                    <UButton icon="i-lucide-panel-left" color="neutral" variant="ghost" aria-label="Toggle sidebar"
                    @click=toggleSidebar
                    />
                </div>
                <div class="flex flex-col gap-0">
                    <p class="text-xs font-bold">Good morning,</p>
                    <h1 class="text-xl font-bold">Captain John</h1>
                    <p class="text-xs">Have a save and productive flight </p>
                </div>
            </div>

            <!-- Photo -->
            <div class="flex flex-row gap-2">
                <!-- <UAvatar src="https://github.com/benjamincanac.png" size="3xl" loading="lazy" /> -->
                <!-- icon notif -->
                <img src="/images/auth/loginImage.png" alt="Login" class=" w-15 h-15 rounded-full" />
                <NotifcationsIcon height="25px" />
            </div>
        </div>

        <!-- SECTION 2 -->
        <UCard class="bg-white p-4 shadow-md">
            <div class="flex flex-row  rounded-xl  ">
                <div>
                    <p class="text-xs font-semibold">Total Flight Hours</p>
                    <h1 class="text-2xl font-bold">1,200:45</h1>
                    <p class="text-xs font-semibold">Hours</p>
                </div>
                <div class="ml-15">
                    <USeparator orientation="vertical" size="xs" />
                </div>
                <div class="ml-5">
                    <p class="text-xs">Rank</p>
                    <div class="flex flex-row items-center gap-6">
                        <h1 class="text=xl font-bold">Captain</h1>
                        <ManPilotLightSkinToneIcon height="2em" />
                    </div>
                </div>
            </div>
        </UCard>

        <!-- SECTION 3 -->
        <UCard class="bg-white p-4 rounded-xl shadow-md">
            <!-- UPCOMING -->
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row items-center">
                    <div class="bg-black p-2 rounded-md mr-2">
                        <ScheduleIcon height="1em" class="text-white" />
                    </div>
                    <h1 class="text-md font-bold">Upcoming Flight</h1>
                </div>
                <div>
                    <h1 class="font-bold text-red-500 text-sm">View all</h1>
                </div>
            </div>


            <!-- CONTEN -->
            <div class="grid grid-cols-1 gap-2 mt-3">
                <!-- BOX 1 -->
                <div class="bg-zinc-50 rounded-xl p-3  flex flex-col justify-center gap-1">
                    <div class="flex flex-row gap-2 items-center ">
                        <ScheduleIcon height="20px" />
                        <p class="font-bold text-md">31 May 2026</p>
                    </div>
                    <div class="flex flex-row gap-2 items-center">
                        <ScheduleOutlineIcon height="20px" />
                        <p class="font-bold text-md">08 : 30 LT</p>
                    </div>
                </div>

                <!-- BOX-2 -->
                <div class="grid grid-cols-3 items-center p-2">
                    <!-- Kiri -->
                    <div>
                        <h1 class="font-bold">HLP</h1>
                        <p class="text-xs">Halim Perdana Kusuma</p>
                        <p class="text-xs">WIII</p>
                    </div>

                    <!-- Tengah -->
                    <div class="flex justify-center">
                        <div class="bg-zinc-100 p-2 rounded-full">
                            <PlaneBoldIcon height="2em" />
                        </div>
                    </div>

                    <!-- Kanan -->
                    <div class="text-right">
                        <h1 class="font-bold">CJN</h1>
                        <p class="text-xs">Cirebon</p>
                        <p class="text-xs">WAJJ</p>
                    </div>
                </div>

                <!-- BOX-3 -->
                <div class="bg-zinc-50 rounded-xl p-3 flex flex-col gap-2 ">
                    <div class="flex flex-row items-center justify-between">
                        <p>Aircraf</p>
                        <h1 class="font-bold">C208B</h1>
                    </div>
                    <USeparator orientation="horizontal" size="xs" />
                    <div class="flex flex-row items-center justify-between">
                        <p>Flight No.</p>
                        <h1 class="font-bold">SI 641</h1>
                    </div>
                    <USeparator orientation="horizontal" size="xs" />
                    <div class="flex flex-row items-center justify-between">
                        <p>Duration</p>
                        <h1 class="font-bold">01:25</h1>
                    </div>
                </div>
            </div>
        </UCard>

        <!-- SECTION 4 -->
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

                    <UCard v-for="item in news" :key="item.id"
                        class="w-[270px] overflow-hidden rounded-2xl p-0 shadow-none">

                        <img :src="item.image" :alt="item.title" class="h-44 w-full object-cover">

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

                    </UCard>

                </div>
            </div>

        </UCard>

        <!-- SECTION 5 -->
        <UCard class="rounded-3xl p-6">

            <!-- Header -->
            <div class="mb-6 flex items-center justify-between">

                <h2 class="text-2xl font-bold">
                    Hours to Limit
                </h2>

                <UButton variant="ghost" color="error">
                    View details
                </UButton>

            </div>

            <!-- Cards -->

            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

                <UCard v-for="item in limits" :key="item.title" class="rounded-2xl">

                    <div class="flex items-start gap-4">

                        <div class="flex h-14 w-14 items-center justify-center rounded-full" :class="{
                            'bg-sky-100': item.color === 'info',
                            'bg-green-100': item.color === 'success',
                            'bg-orange-100': item.color === 'warning',
                            'bg-violet-100': item.color === 'secondary'
                        }">

                            <UIcon :name="item.icon" class="text-3xl" :class="{
                                'text-sky-500': item.color === 'info',
                                'text-green-500': item.color === 'success',
                                'text-orange-500': item.color === 'warning',
                                'text-violet-500': item.color === 'secondary'
                            }" />
                        </div>

                        <div>

                            <h3 class="font-bold text-xl">
                                {{ item.title }}
                            </h3>

                            <p class="text-gray-500">
                                {{ item.subtitle }}
                            </p>

                        </div>

                    </div>

                    <div class="mt-8">

                        <div class="flex items-end gap-2">

                            <span class="text-3xl font-bold">
                                {{ item.current }}
                            </span>

                            <span class="mb-1 text-gray-400">
                                / {{ item.total }}
                            </span>

                        </div>

                        <UProgress :model-value="item.progress" :color="item.color" class="mt-6" />

                        <p class="mt-5 text-center text-lg font-medium">
                            {{ item.left }}
                        </p>

                    </div>

                </UCard>

            </div>

        </UCard>

        <!-- SECTION 6 -->
        <UCard>

            <FlightHoursChart />

        </UCard>

        <!-- SECTION 7 -->

        <UCard class="rounded-3xl">

            <!-- Header -->

            <div class="flex items-center justify-between mb-6">

                <h2 class="text-2xl font-bold">
                    My Documents
                </h2>

                <UButton variant="ghost" color="error">
                    View all
                </UButton>

            </div>

            <div class="space-y-3">

                <div v-for="item in documents" :key="item.id"
                    class="flex items-center justify-between rounded-2xl px-2 py-2 transition hover:bg-gray-50">

                    <!-- LEFT -->

                    <div class="flex items-center gap-4">

                        <div class="flex h-12 w-12 items-center justify-center rounded-xl" :class="{
                            'bg-green-100': item.color === 'success',
                            'bg-orange-100': item.color === 'warning',
                            'bg-red-100': item.color === 'error'
                        }">

                            <UIcon :name="item.icon" class="text-2xl" :class="{
                                'text-green-600': item.color === 'success',
                                'text-orange-500': item.color === 'warning',
                                'text-red-500': item.color === 'error'
                            }" />

                        </div>

                        <div>

                            <h3 class="font-semibold text-lg">
                                {{ item.title }}
                            </h3>

                            <p class="text-sm text-gray-500">
                                {{ item.expired }}
                            </p>

                        </div>

                    </div>

                    <!-- RIGHT -->

                    <div class="flex items-center gap-5">

                        <UBadge size="lg" variant="soft" class="rounded-full px-4 py-2" :color="item.color">
                            {{ item.status }}
                        </UBadge>

                        <UIcon name="i-lucide-chevron-right" class="text-xl text-gray-400" />

                    </div>

                </div>

            </div>

        </UCard>
    </div>


</template>
