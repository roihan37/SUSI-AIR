import { defineStore } from "pinia"
import newsData from "~/assets/mock/mock-news.json"

export const useNewsStore = defineStore("news", () => {

  const news = ref(newsData)

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  }

  const latestNews = computed(() => {
    return [...news.value]
      .sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      )
      .map(item => ({
        ...item,
        time: formatDate(item.date)
      }))
  })

  return {
    news,
    latestNews
  }

})