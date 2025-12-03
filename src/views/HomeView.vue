<script setup lang="ts">
import { ref } from 'vue'

interface Campaign {
  image: string
  title: string
  description: string
  applied: number
  capacity: number
}

const trendingCampaigns = ref<Campaign[]>([
  { image: '/images/camp1.jpg', title: '캠페인1', description: '시선집중 캠페인 1', applied: 2, capacity: 10 },
  { image: '/images/camp2.jpg', title: '캠페인2', description: '시선집중 캠페인 2', applied: 5, capacity: 15 },
])

const premiumCampaigns = ref<Campaign[]>([
  { image: '/images/camp3.jpg', title: '캠페인3', description: '프리미엄 캠페인 1', applied: 3, capacity: 8 },
  { image: '/images/camp4.jpg', title: '캠페인4', description: '프리미엄 캠페인 2', applied: 1, capacity: 5 },
])

const recommendedCampaigns = ref<Campaign[]>([
  { image: '/images/camp5.jpg', title: '캠페인5', description: '추천 캠페인 1', applied: 0, capacity: 10 },
  { image: '/images/camp6.jpg', title: '캠페인6', description: '추천 캠페인 2', applied: 2, capacity: 12 },
])

const closingSoonCampaigns = ref<Campaign[]>([
  { image: '/images/camp7.jpg', title: '캠페인7', description: '마감임박 캠페인 1', applied: 9, capacity: 10 },
  { image: '/images/camp8.jpg', title: '캠페인8', description: '마감임박 캠페인 2', applied: 4, capacity: 5 },
])
</script>

<template>
  <main class="p-6 space-y-12 bg-gray-100 min-h-screen">

    <!-- 시선집중 캠페인 -->
    <section>
      <h2 class="text-2xl font-bold mb-4">시선집중 캠페인</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(camp, idx) in trendingCampaigns" :key="idx" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="camp.image" class="w-full h-40 object-cover"/>
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ camp.title }}</h3>
            <p class="text-gray-600 text-sm">{{ camp.description }}</p>
            <p class="text-gray-700 font-medium">신청인원: {{ camp.applied }} / 모집인원: {{ camp.capacity }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 프리미엄 캠페인 -->
    <section>
      <h2 class="text-2xl font-bold mb-4">프리미엄 캠페인</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(camp, idx) in premiumCampaigns" :key="idx" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="camp.image" class="w-full h-40 object-cover"/>
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ camp.title }}</h3>
            <p class="text-gray-600 text-sm">{{ camp.description }}</p>
            <p class="text-gray-700 font-medium">신청인원: {{ camp.applied }} / 모집인원: {{ camp.capacity }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 추천 캠페인 -->
    <section>
      <h2 class="text-2xl font-bold mb-4">추천 캠페인</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(camp, idx) in recommendedCampaigns" :key="idx" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="camp.image" class="w-full h-40 object-cover"/>
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ camp.title }}</h3>
            <p class="text-gray-600 text-sm">{{ camp.description }}</p>
            <p class="text-gray-700 font-medium">신청인원: {{ camp.applied }} / 모집인원: {{ camp.capacity }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 마감임박 캠페인 -->
    <section>
      <h2 class="text-2xl font-bold mb-4">마감임박 캠페인</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(camp, idx) in closingSoonCampaigns" :key="idx" class="bg-white rounded-lg shadow-md overflow-hidden">
          <img :src="camp.image" class="w-full h-40 object-cover"/>
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ camp.title }}</h3>
            <p class="text-gray-600 text-sm">{{ camp.description }}</p>
            <p class="text-gray-700 font-medium">신청인원: {{ camp.applied }} / 모집인원: {{ camp.capacity }}</p>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
main {
  background-color: #f3f4f6; /* 연한 회색 배경 */
}
</style>
