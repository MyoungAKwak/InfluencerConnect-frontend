<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCampaigns } from '@/api/campaign.Service'

const campaigns = ref([])
//캠페인 목록 조회

const fetchCampaigns = async () => {
  try {
    const response = await getCampaigns()
    campaigns.value = response.data // ← 여기서 데이터 할당
    console.log('캠페인조회', campaigns.value)
  } catch (error) {
    console.error('캠페인 조회 실패:', error)
  }
}

onMounted(() => {
  fetchCampaigns()
})
</script>

<template>
  <main class="p-6 space-y-12 bg-gray-100 min-h-screen">
    <!-- 시선집중 캠페인 -->
    <section>
      <div class="mt-4 flex justify-end">
        <RouterLink to="/campaign/edit">
          <Button label="캠페인 등록하기" icon="pi pi-plus" class="p-button-success" />
        </RouterLink>
      </div>
      <h2 class="text-2xl font-bold mb-4">맛집 캠페인</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="camp in campaigns"
          :key="camp.campaignId"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div class="w-full" style="aspect-ratio: 16/9">
            <img :src="camp.imageUrl" class="w-full h-full object-cover" />
          </div>
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ camp.storeName }}</h3>
            <p class="text-gray-600 text-sm">{{ camp.content }}</p>
            <p class="text-gray-700 font-medium">
              신청인원: {{ camp.applied }} / 모집인원: {{ camp.capacity }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 프리미엄 캠페인 -->
    <section>
      <h2 class="text-2xl font-bold mb-4">식품 캠페인</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(camp, idx) in premiumCampaigns"
          :key="idx"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="camp.image" class="w-full h-40 object-cover" />
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ camp.title }}</h3>
            <p class="text-gray-600 text-sm">{{ camp.description }}</p>
            <p class="text-gray-700 font-medium">
              신청인원: {{ camp.applied }} / 모집인원: {{ camp.capacity }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 추천 캠페인 -->
    <section>
      <h2 class="text-2xl font-bold mb-4">뷰티 캠페인</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(camp, idx) in recommendedCampaigns"
          :key="idx"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="camp.image" class="w-full h-40 object-cover" />
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ camp.title }}</h3>
            <p class="text-gray-600 text-sm">{{ camp.description }}</p>
            <p class="text-gray-700 font-medium">
              신청인원: {{ camp.applied }} / 모집인원: {{ camp.capacity }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 마감임박 캠페인 -->
    <section>
      <h2 class="text-2xl font-bold mb-4">기타 캠페인</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(camp, idx) in closingSoonCampaigns"
          :key="idx"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="camp.image" class="w-full h-40 object-cover" />
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ camp.title }}</h3>
            <p class="text-gray-600 text-sm">{{ camp.description }}</p>
            <p class="text-gray-700 font-medium">
              신청인원: {{ camp.applied }} / 모집인원: {{ camp.capacity }}
            </p>
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
