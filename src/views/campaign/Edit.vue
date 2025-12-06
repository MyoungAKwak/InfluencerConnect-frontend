<script setup lang="ts">
import { ref, reactive } from 'vue'
import InputText from 'primevue/inputtext'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'

// 상태
const storeName = ref('')
const phoneMiddle = ref('')
const phoneLast = ref('')
const mission = ref('') // ★ 추가됨

// 추가 상태
const address = ref('')
const category = ref(null)

const categoryOptions = [
  { label: '맛집', value: 'food' },
  { label: '식품', value: 'grocery' },
  { label: '뷰티', value: 'beauty' },
  { label: '기타', value: 'etc' },
]

const errors = reactive<{
  storeName?: string
  file?: string
  phone?: string
  address?: string
  category?: string
  mission?: string
}>({})

//다음 주소검색 api
function openAddressSearch() {
  const daum = (window as any).daum
  new daum.Postcode({
    oncomplete: function (data: any) {
      address.value = data.address // 선택된 주소 넣기
      console.log('선택된 주소:', data)
    },
  }).open()
}

function handleFileUpload(event: any) {
  const file = event.files?.[0]
  if (!file) return
  errors.file = ''
  if (!file.type.startsWith('image/')) errors.file = '이미지 파일만 업로드 가능'
  if (file.size > 5 * 1024 * 1024) errors.file = '5MB 이하만 업로드 가능'
}

function validate() {
  errors.storeName = ''
  errors.phone = ''
  errors.address = ''
  errors.category = ''
  errors.mission = ''

  if (!storeName.value.trim()) errors.storeName = '상호명을 입력해주세요'
  if (!/^[0-9]{3,4}$/.test(phoneMiddle.value) || !/^[0-9]{4}$/.test(phoneLast.value)) {
    errors.phone = '올바른 연락처 입력'
  }
  if (!address.value.trim()) errors.address = '주소를 입력해주세요'
  if (!category.value) errors.category = '카테고리를 선택해주세요'
  if (!mission.value.trim()) errors.mission = '체험단 미션을 입력해주세요'

  return !(errors.storeName || errors.phone || errors.address || errors.category || errors.mission)
}

function submitForm() {
  if (!validate()) return

  const payload = {
    storeName: storeName.value,
    phone: `010-${phoneMiddle.value}-${phoneLast.value}`,
    address: address.value,
    category: category.value,
    mission: mission.value,
  }
  console.log('submit payload', payload)
  alert('저장되었습니다.')
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 py-10">
    <div class="p-card p-6 w-full max-w-2xl space-y-8">
      <h1 class="text-2xl font-bold mb-4">기본정보</h1>

      <form @submit.prevent="submitForm" class="space-y-8">
        <!-- 상호명 -->
        <div class="space-y-2">
          <label class="text-lg font-bold">상호명</label>
          <InputText v-model="storeName" placeholder="상호명을 작성해 주세요." class="w-full" />
          <small v-if="errors.storeName" class="p-error">{{ errors.storeName }}</small>
        </div>

        <!-- 썸네일 등록 -->
        <div class="space-y-2">
          <label class="text-lg font-bold">썸네일 등록</label>
          <FileUpload
            name="attachments"
            mode="advanced"
            multiple
            accept="image/*"
            chooseLabel="파일 선택"
            uploadLabel="업로드"
            cancelLabel="취소"
            @select="handleFileUpload"
          />
          <small class="text-sm block text-gray-600">
            검수 불가 예시: 간판/로고/화면캡처/텍스트가 큰 이미지
          </small>
          <small v-if="errors.file" class="p-error">{{ errors.file }}</small>
        </div>

        <!-- 담당자 연락처 -->
        <div class="space-y-2">
          <label class="text-lg font-bold">담당자 연락처</label>
          <div class="flex items-center gap-3">
            <span class="font-bold">010</span>
            <span>-</span>
            <InputText
              v-model="phoneMiddle"
              maxlength="4"
              placeholder="숫자 입력"
              style="width: 110px"
            />
            <span>-</span>
            <InputText
              v-model="phoneLast"
              maxlength="4"
              placeholder="숫자 입력"
              style="width: 110px"
            />
          </div>
          <small v-if="errors.phone" class="p-error">{{ errors.phone }}</small>
        </div>

        <!-- 주소 -->
        <div class="space-y-2">
          <label class="text-lg font-bold">주소</label>
          <div class="flex gap-2">
            <InputText v-model="address" placeholder="주소를 입력해주세요" class="w-full" />
            <Button
              label="주소 검색"
              class="p-button-outlined p-button-sm"
              @click.prevent="openAddressSearch"
            />
          </div>
          <small v-if="errors.address" class="p-error">{{ errors.address }}</small>
        </div>

        <!-- 카테고리 선택 -->
        <div class="space-y-2">
          <label class="text-lg font-bold">카테고리</label>
          <Dropdown
            v-model="category"
            :options="categoryOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="카테고리를 선택하세요"
            class="w-full"
          />
          <small v-if="errors.category" class="p-error">{{ errors.category }}</small>
        </div>

        <!-- 체험단 미션 -->
        <div class="space-y-3">
          <label class="text-lg font-bold">체험단 미션</label>

          <small class="text-sm text-gray-600 leading-relaxed">
            영수증 리뷰 / 네이버 예약은 불가합니다.<br />
            필수 가이드(사진 개수, 글자수 등)는 플랫폼 가이드로 진행됩니다.<br /><br />
            홍보 키워드를 명확하게 작성해주세요!
          </small>

          <textarea
            v-model="mission"
            class="p-inputtext p-inputtext-lg w-full border rounded-lg p-3"
            rows="6"
            placeholder="체험단 미션을 작성해주세요"
          ></textarea>

          <small v-if="errors.mission" class="p-error">{{ errors.mission }}</small>
        </div>

        <!-- 저장 버튼 -->
        <div class="flex justify-end pt-2">
          <Button label="저장" class="p-button-primary px-6" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.text-lg {
  font-size: 1.25rem;
}
</style>
