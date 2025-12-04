<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { createUser } from '@/api/userService'

// 회원가입 데이터
const userForm = ref({
  loginId: '',
  password: '',
  passwordConfirm: '',
  name: '',
  gender: '',
  email: '',
})

// 회원가입 버튼 클릭
const onSaveUser = async () => {
  try {
    await createUser(userForm.value)
    console.log('회원가입 성공')
  } catch (error) {
    console.error('회원가입 실패:', error)
  }
}
</script>

<template>
  <form
    @submit.prevent="onSaveUser"
    class="max-w-md mx-auto mt-12 p-8 bg-white shadow-lg rounded-lg flex flex-col gap-12"
  >
    <!-- ID -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">ID</label>
      <InputText
        v-model="userForm.loginId"
        placeholder="아이디를 입력하세요"
        class="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <!-- 비밀번호 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">비밀번호</label>
      <InputText
        v-model="userForm.password"
        placeholder="비밀번호를 입력하세요"
        class="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <!-- 비밀번호 재입력 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">비밀번호 재입력</label>
      <InputText
        v-model="userForm.passwordConfirm"
        placeholder="비밀번호를 재입력하세요"
        class="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <!-- 이름 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">이름</label>
      <InputText
        v-model="userForm.name"
        placeholder="이름을 입력하세요"
        class="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <!-- 성별 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">성별</label>
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <input type="radio" id="male" value="M" v-model="userForm.gender" />
          <label for="male">남자</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="radio" id="female" value="F" v-model="userForm.gender" />
          <label for="female">여자</label>
        </div>
      </div>
    </div>

    <!-- 이메일 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">이메일</label>
      <InputText v-model="userForm.email" placeholder="이메일을 입력하세요" />
    </div>

    <!-- 제출 버튼 -->
    <Button
      type="submit"
      label="회원가입"
      class="bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600 transition mt-6"
    />
  </form>
</template>
