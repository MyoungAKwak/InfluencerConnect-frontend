<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getCampaigns } from '@/api/campaign.Service'

const campaigns = ref([])
const foodCampaigns = ref([])
const generalCampaigns = ref([])
const beautyCampaigns = ref([])
const otherCampaigns = ref([])

//캠페인 목록 조회

const fetchCampaigns = async () => {
  try {
    const response = await getCampaigns()
    campaigns.value = response.data // ← 여기서 데이터 할당

    foodCampaigns.value = campaigns.value.filter((value) => value.categoryId == '1')

    generalCampaigns.value = campaigns.value.filter((value) => value.categoryId == '2')
    beautyCampaigns.value = campaigns.value.filter((value) => value.categoryId == '3')
    otherCampaigns.value = campaigns.value.filter((value) => value.categoryId == '4')
  } catch (error) {
    console.error('캠페인 조회 실패:', error)
  }
}

//let result = animals.filter((value) => value.species == 'mammalia')
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
          v-for="campf in foodCampaigns"
          :key="campf.campaignId"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div class="w-full" style="aspect-ratio: 16/9">
            <img :src="campf.imageUrl" class="w-full h-full object-cover" />
          </div>
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ campf.storeName }}</h3>
            <p class="text-gray-600 text-sm">{{ campf.content }}</p>
            <p class="text-gray-700 font-medium">
              신청인원: {{ campf.applied }} / 모집인원: {{ campf.capacity }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 프리미엄 캠페인 -->
    <section>
      <h2 class="text-2xl font-bold mb-4">일반 캠페인</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="campG in generalCampaigns"
          :key="campG.campaignId"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="campG.imageUrl" class="w-full h-40 object-cover" />
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ campG.storeName }}</h3>
            <p class="text-gray-600 text-sm">{{ campG.content }}</p>
            <p class="text-gray-700 font-medium">
              신청인원: {{ campG.applied }} / 모집인원: {{ campG.capacity }}
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
          v-for="campB in beautyCampaigns"
          :key="campB.campaignId"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="campB.imageUrl" class="w-full h-40 object-cover" />
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ campB.storeName }}</h3>
            <p class="text-gray-600 text-sm">{{ campB.content }}</p>
            <p class="text-gray-700 font-medium">
              신청인원: {{ campB.applied }} / 모집인원: {{ campB.capacity }}
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
          v-for="campO in otherCampaigns"
          :key="campO.campaignId"
          class="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img :src="campO.imageUrl" class="w-full h-40 object-cover" />
          <div class="p-4 flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ campO.storeName }}</h3>
            <p class="text-gray-600 text-sm">{{ campO.content }}</p>
            <p class="text-gray-700 font-medium">
              신청인원: {{ campO.applied }} / 모집인원: {{ campO.capacity }}
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
