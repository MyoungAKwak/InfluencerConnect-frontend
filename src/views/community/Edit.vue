<script setup>
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { ref } from 'vue'

const category = ref('')
const title = ref('')
const content = ref('')

const categories = [
  { label: '자유', value: 'free' },
  { label: '공지', value: 'notice' },
  { label: '질문', value: 'question' },
]

const onSubmit = () => {
  console.log({ category: category.value, title: title.value, content: content.value })
  // 여기에 API 요청 추가 가능
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
    <form
      class="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg flex flex-col gap-6"
      @submit.prevent="onSubmit"
    >
      <h1 class="text-2xl font-bold">커뮤니티 글 작성</h1>

      <!-- 카테고리 선택 -->
      <div class="flex flex-col gap-2">
        <label class="font-medium text-gray-700">카테고리</label>
        <select
          v-model="category"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">선택</option>
          <option v-for="c in categories" :key="c.value" :value="c.value">{{ c.label }}</option>
        </select>
      </div>

      <!-- 글 제목 -->
      <div class="flex flex-col gap-2">
        <label class="font-medium text-gray-700">제목</label>
        <InputText
          v-model="title"
          placeholder="제목 입력"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        />
      </div>

      <!-- 글 내용 -->
      <div class="flex flex-col gap-2">
        <label class="font-medium text-gray-700">내용</label>
        <Textarea
          v-model="content"
          placeholder="내용 입력"
          rows="6"
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        />
      </div>

      <!-- 작성 버튼 -->
      <Button
        type="submit"
        label="작성"
        class="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition w-full"
      />
    </form>
  </div>
</template>
