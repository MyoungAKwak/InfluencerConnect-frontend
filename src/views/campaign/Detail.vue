<script setup lang="ts">
import { ref } from 'vue'

const campaign = ref({
  campaignId: 1,
  storeName: '데판유우',
  storeAddress: '대전 서구 대덕대로185번길 53 1층',
  applied: 13,
  capacity: 5,
  reward: '5만원 식사권',
  content: '※ 업체 홍보를 위한 체험입니다. 업체 대표메뉴 및 추천메뉴 위주로 체험 진행해주세요!',
  imageUrl: 'https://picsum.photos/800/400?random=1',
  keywords: ['둔산동고기집', '둔산동맛집', '둔산동대창맛집', '둔산동소고기', '둔산동회식'],
  mission: [
    '홍보 목적으로 진행되는 체험, 긍정적인 내용으로 리뷰 작성 필수',
    '차량 이용 시 주차장 이용 가능',
    '방문 후 4일 이내 리뷰 등록',
    '스폰서 배너 필수 등록',
    '사진 15장 이상 등록, 움짤/동영상 첨부',
  ],
  additionalInfo: [
    '체험메뉴 외 추가 주문/비용 본인 부담',
    '디지털카메라로 촬영한 사진 사용 권장',
    '기간 내 체험 미진행 시 페널티, 리뷰 미등록 시 비용 청구',
  ],
  reviews: [
    '둔산동 맛집 추천 회식장소로 딱인 데판유우',
    '[대전 둔산동] 눈앞에서 펼쳐지는 화끈한 불쇼 한바탕',
    '대전 둔산동맛집 철판요리 전문 요리주점',
    '분위기 좋은 술집, 철판요리 전문점 "데판유우"',
  ],
})
</script>

<template>
  <main class="bg-gray-50 min-h-screen p-6 flex justify-center">
    <div class="w-full max-w-4xl space-y-8">
      <!-- 수정된 헤더 (이미지 왼쪽 / 정보 오른쪽) -->
      <section class="bg-white rounded-xl shadow-lg overflow-hidden flex">
        <!-- LEFT: 이미지 -->
        <div class="w-1/2 h-64">
          <img :src="campaign.imageUrl" class="w-full h-full object-cover" />
        </div>

        <!-- RIGHT: 정보 -->
        <div class="w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 class="text-3xl font-bold">{{ campaign.storeName }}</h1>
            <p class="text-gray-600 mt-1">{{ campaign.storeAddress }}</p>

            <p class="mt-3 text-xl font-semibold">체험 상품: {{ campaign.reward }}</p>

            <p class="mt-2 text-gray-700">
              신청 {{ campaign.applied }}명 / 모집 {{ campaign.capacity }}명
            </p>
          </div>

          <div class="mt-6">
            <button
              class="w-full py-3 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-600 transition"
            >
              신청하기
            </button>
          </div>
        </div>
      </section>

      <!-- 상세정보 -->
      <section class="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2 mb-2">상세정보</h2>
        <p class="text-gray-700">{{ campaign.content }}</p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span
            v-for="(kw, idx) in campaign.keywords"
            :key="idx"
            class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            #{{ kw }}
          </span>
        </div>
      </section>

      <!-- 캠페인 미션 -->
      <section class="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2 mb-2">캠페인 미션</h2>
        <ul class="list-decimal list-inside space-y-1 text-gray-700">
          <li v-for="(item, idx) in campaign.mission" :key="idx">{{ item }}</li>
        </ul>
      </section>

      <!-- 추가정보 -->
      <section class="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2 mb-2">추가정보</h2>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li v-for="(info, idx) in campaign.additionalInfo" :key="idx">{{ info }}</li>
        </ul>
      </section>

      <!-- 참고 후기 -->
      <section class="bg-white rounded-xl shadow-md p-6 space-y-4">
        <h2 class="text-2xl font-bold border-b pb-2 mb-2">참고 후기</h2>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li v-for="(review, idx) in campaign.reviews" :key="idx">{{ review }}</li>
        </ul>
      </section>
    </div>
  </main>
</template>
