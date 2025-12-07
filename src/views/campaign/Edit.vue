<script setup lang="ts">
import { ref, reactive } from 'vue'
import InputText from 'primevue/inputtext'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'
import { useRouter, useRoute } from 'vue-router'
import { createCampaign } from '@/api/campaign.Service'
import { Form } from '@primevue/forms'

const router = useRouter()
const route = useRoute()

const form = reactive({
  storeName: '',
  phoneMiddle: '',
  phoneLast: '',
  storeaddress: '',
  content: '',
  imageurl: '',
  categoryId: '',
})

// 추가 상태
const address = ref('')
const category = ref(null)

const categoryOptions = [
  { label: '맛집', value: '1' },
  { label: '식품', value: '2' },
  { label: '뷰티', value: '3' },
  { label: '기타', value: '4' },
]

// const errors = reactive<{
//   storeName?: string
//   file?: string
//   phone?: string
//   address?: string
//   category?: string
//   mission?: string
// }>({})

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

// function handleFileUpload(event: any) {
//   const file = event.files?.[0]
//   if (!file) return
//   errors.file = ''
//   if (!file.type.startsWith('image/')) errors.file = '이미지 파일만 업로드 가능'
// }

// function validate() {
//   errors.storeName = ''
//   errors.phone = ''
//   errors.address = ''
//   errors.category = ''
//   errors.mission = ''

//   if (!storeName.value.trim()) errors.storeName = '상호명을 입력해주세요'
//   if (!/^[0-9]{3,4}$/.test(phoneMiddle.value) || !/^[0-9]{4}$/.test(phoneLast.value)) {
//     errors.phone = '올바른 연락처 입력'
//   }
//   if (!address.value.trim()) errors.address = '주소를 입력해주세요'
//   if (!category.value) errors.category = '카테고리를 선택해주세요'
//   if (!mission.value.trim()) errors.mission = '체험단 미션을 입력해주세요'

//   return !(errors.storeName || errors.phone || errors.address || errors.category || errors.mission)
// }

const uploadFile = (event) => {
  form.imageurl = event.files[0]
}

// 저장 클릭
const saveCampaign = async () => {
  try {
    // FormData 생성
    const payload = new FormData()
    payload.append('storeName', form.storeName)
    payload.append('phone', `010-${form.phoneMiddle}-${form.phoneLast}`)
    payload.append('storeAddress', address.value)
    payload.append('categoryId', form.categoryId)
    payload.append('content', form.content)
    if (form.imageurl) payload.append('imageUrl', form.imageurl)
    console.log('form.imageurl', form.imageurl)
    await createCampaign(payload)
    router.push('/campaign/list')
  } catch (error) {
    console.error('게시글 저장 실패:', error)
  }
}

// const payload = {
//   storeName: form.storeName,
//   phone: `010-${form.phoneMiddle}-${form.phoneLast}`,
//   address: address.value,
//   category: category.value,
//   content: form.content,
// }
// console.log('submit payload', payload)
// alert('저장되었습니다.')
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 py-10">
    <div class="p-card p-6 w-full max-w-2xl space-y-8">
      <h1 class="text-2xl font-bold mb-4">기본정보</h1>

      <form class="space-y-8">
        <!-- 상호명 -->
        <div class="space-y-2">
          <label class="text-lg font-bold">상호명</label>
          <InputText
            v-model="form.storeName"
            placeholder="상호명을 작성해 주세요."
            class="w-full"
          />
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
            @select="uploadFile"
          />
          <small class="text-sm block text-gray-600">
            검수 불가 예시: 간판/로고/화면캡처/텍스트가 큰 이미지
          </small>
        </div>

        <!-- 담당자 연락처 -->
        <div class="space-y-2">
          <label class="text-lg font-bold">담당자 연락처</label>
          <div class="flex items-center gap-3">
            <span class="font-bold">010</span>
            <span>-</span>
            <InputText
              v-model="form.phoneMiddle"
              maxlength="4"
              placeholder="숫자 입력"
              style="width: 110px"
            />
            <span>-</span>
            <InputText
              v-model="form.phoneLast"
              maxlength="4"
              placeholder="숫자 입력"
              style="width: 110px"
            />
          </div>
          <!-- <small v-if="errors.phone" class="p-error">{{ errors.phone }}</small> -->
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
          <!-- <small v-if="errors.address" class="p-error">{{ errors.address }}</small> -->
        </div>

        <!-- 카테고리 선택 -->
        <div class="space-y-2">
          <label class="text-lg font-bold">카테고리</label>
          <Dropdown
            v-model="form.categoryId"
            :options="categoryOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="카테고리를 선택하세요"
            class="w-full"
          />
          <!-- <small v-if="errors.category" class="p-error">{{ errors.category }}</small> -->
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
            v-model="form.content"
            class="p-inputtext p-inputtext-lg w-full border rounded-lg p-3"
            rows="6"
            placeholder="체험단 미션을 작성해주세요"
          ></textarea>

          <!-- <small v-if="errors.mission" class="p-error">{{ errors.mission }}</small> -->
        </div>

        <!-- 저장 버튼 -->
        <div class="flex justify-end pt-2">
          <Button label="저장" @click="saveCampaign" class="p-button-primary px-6" />
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
