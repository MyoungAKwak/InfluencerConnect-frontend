<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const campaign = ref(null)

onMounted(() => {
  const id = route.params.id
  // 예시 API 호출
  // fetch(`/api/campaigns/${id}`)
  //   .then(res => res.json())
  //   .then(data => campaign.value = data)

  // 임시 데이터 예시
  campaign.value = {
    title: '반석직영점 체험 캠페인',
    imageUrl: 'https://via.placeholder.com/800x400',
    providedContents: '3만원 식사권 제공\n예약 문의 필수\n체험 시 제공되는 금액 외 추가 주문은 리뷰어 부담',
    reservationGuide: '예약 시 양식 확인 후 진행 필수\n미확인 시 자동 취소 처리',
    mission: '- 매장 인테리어 및 제공 서비스 상세 소개\n- 네이버 지도 필수 첨부\n- 사진 15장 이상 업로드',
    locationInfo: '주소: 대전 반석동 000\n영업시간: 화~금 13:30-20:00\n체험 가능 시간: 11:30~13:30 불가',
    additionalInfo: '체험단 신청 시 업체 수정/삭제 요청 가능\n기간 내 체험 미진행 시 페널티 부과',
    keywords: ['반석동맛집', '유성구맛집', '반석막국수', '유성구맛집추천']
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto p-6 space-y-8">
    <h1 class="text-3xl font-bold">{{ campaign?.title }}</h1>

    <img :src="campaign?.imageUrl" class="w-full h-64 object-cover rounded-lg shadow-md"/>

    <section>
      <h2 class="text-xl font-semibold mb-2">제공 내역</h2>
      <p class="text-gray-700 whitespace-pre-line">{{ campaign?.providedContents }}</p>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-2">예약 안내</h2>
      <p class="text-gray-700 whitespace-pre-line">{{ campaign?.reservationGuide }}</p>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-2">캠페인 미션</h2>
      <p class="text-gray-700 whitespace-pre-line">{{ campaign?.mission }}</p>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-2">위치 및 영업 시간</h2>
      <p class="text-gray-700 whitespace-pre-line">{{ campaign?.locationInfo }}</p>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-2">추가 정보</h2>
      <p class="text-gray-700 whitespace-pre-line">{{ campaign?.additionalInfo }}</p>
    </section>

    <section>
      <h2 class="text-xl font-semibold mb-2">키워드</h2>
      <div class="flex flex-wrap gap-2">
        <span v-for="(kw, idx) in campaign?.keywords" :key="idx" class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
          {{ kw }}
        </span>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 필요하면 섹션 간 간격이나 폰트 조절 가능 */
</style>
