<script setup lang="ts">
interface NewsItem {
  id: string | number
  title: string
  image: string
  category: string
//   time: string
}


defineProps<{
    newNews: NewsItem[]
}>()
</script>

<template>

  

</template>