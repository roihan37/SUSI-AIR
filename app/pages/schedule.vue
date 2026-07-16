<script setup lang="ts">
const attrs = [
  {
    key: 'today',
    highlight: true,
    dates: new Date()
  },
  {
    key: 'yesterday',
    highlight: 'red',
    dates: new Date(2026, 6, 15),
  },
  {
    key: 'yesterday2',
    highlight: 'green',
    dates: new Date(2026, 6, 14),
    popover : {
        label : 'Take Noah to basketball practice.'
    }
  },

]
</script>

<template>
    <div class=" w-xs">
        <VCalendar expanded :attributes="attrs" />
    </div>
</template>