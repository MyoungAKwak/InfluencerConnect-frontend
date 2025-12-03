<script setup>
import { ref } from 'vue'

const campaigns = ref([
  {
    image: '/images/campaign1.jpg',
    title: '배송 캠페인 1',
    description: '신선한 과일 배송 캠페인',
    applied: 3,
    capacity: 10
  },
  {
    image: '/images/campaign2.jpg',
    title: '배송 캠페인 2',
    description: '건강 간식 배송 캠페인',
    applied: 5,
    capacity: 20
  },
  // 추가 캠페인...
])
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-6">배송 캠페인</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- 캠페인 카드 반복 -->
      <div 
        v-for="(campaign, index) in campaigns" 
        :key="index"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img :src="campaign.image" alt="campaign image" class="w-full h-40 object-cover"/>
        
        <div class="p-4 flex flex-col gap-2">
          <h2 class="text-lg font-semibold">{{ campaign.title }}</h2>
          <p class="text-gray-600 text-sm">{{ campaign.description }}</p>
          <p class="text-gray-700 font-medium">
            신청인원: {{ campaign.applied }} / 모집인원: {{ campaign.capacity }}
          </p>
          <button class="mt-2 bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition">
            신청하기
          </button>
        </div>
      </div>

    </div>
  </div>
</template>