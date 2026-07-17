<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

const open = useState('sidebar-open', () => true)
const {pilot} = useFlightHoursStore()
const teams = ref([
  {
    label: 'Nuxt',
    avatar: {
      src: 'https://github.com/nuxt.png',
      alt: 'Nuxt'
    }
  },
  {
    label: 'Vue',
    avatar: {
      src: 'https://github.com/vuejs.png',
      alt: 'Vue'
    }
  },
  {
    label: 'UnJS',
    avatar: {
      src: 'https://github.com/unjs.png',
      alt: 'UnJS'
    }
  }
])
const selectedTeam = ref(teams.value[0])

const teamsItems = computed<DropdownMenuItem[][]>(() => {
  return [
    teams.value.map((team, index) => ({
      ...team,
      kbds: ['meta', String(index + 1)],
      onSelect() {
        selectedTeam.value = team
      }
    })),
    [
      {
        label: 'Create team',
        icon: 'i-lucide-circle-plus'
      }
    ]
  ]
})

function getItems(state: 'collapsed' | 'expanded') {
  return [
    {
      label: 'Dashboard',
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
    
  ] satisfies NavigationMenuItem[]
}

const user = ref({
  name: `Captain${pilot.name}`,
  avatar: {
    src: 'https://github.com/benjamincanac.png',
    alt: 'Benjamin Canac'
  }
})

const userItems = computed<DropdownMenuItem[][]>(() => [
  [
    
    {
      label: 'Log out',
      icon: 'i-lucide-log-out',
      to : '/'
    }
  ]
])

defineShortcuts(extractShortcuts(teamsItems.value))
</script>

<template>
  <div class="hidden md:flex h-screen">
    <USidebar
      v-model:open="open"
      collapsible="icon"
      rail
      :ui="{
        container: 'h-full',
        inner: 'bg-elevated/25 divide-transparent',
        body: 'py-0'
      }"
    >
     

      <template #default="{ state }">
        <UNavigationMenu
          class="mt-8"
          :key="state"
          :items="getItems(state)"
          orientation="vertical"
          :ui="{
            list: 'space-y-3',
            link: ' text-10  shrink-0'
 }"
        />
      </template>

      <template #footer>
        <UDropdownMenu
          :items="userItems"
          :content="{ align: 'center', collisionPadding: 12 }"
          :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-48' }"
        >
          <UButton
            v-bind="user"
            :label="user?.name"
            trailing-icon="i-lucide-chevrons-up-down"
            color="neutral"
            variant="ghost"
            square
            class="w-full data-[state=open]:bg-elevated overflow-hidden "
            :ui="{
              trailingIcon: 'text-dimmed ms-auto'
            }"
          />
        </UDropdownMenu>
      </template>
    </USidebar>

    
  </div>
</template>
