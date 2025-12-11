<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { createUser } from '@/api/userService'
import { useRouter } from 'vue-router'
import { countMemberByLoginId } from '@/api/userService'

// 라우터
const router = useRouter()

// 회원가입 데이터
const userForm = ref({
  loginId: '',
  password: '',
  passwordConfirm: '',
  name: '',
  gender: '',
  email: '',
})

// 비밀번호 보이기/숨기기 상태
const showPassword = ref(false)
const showPasswordConfirm = ref(false)

// 토글 함수
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
const togglePasswordConfirm = () => {
  showPasswordConfirm.value = !showPasswordConfirm.value
}

// 회원가입 제출
const onSaveUser = async () => {
  try {
    await createUser(userForm.value)
    console.log('회원가입 성공')
    router.push('/login')
  } catch (error) {
    console.error('회원가입 실패:', error)
  }
}

const idCheckMessage = ref('')
const idCheckValid = ref(false)

// ID 중복체크
const checkLoginId = async () => {
  if (!userForm.value.loginId) {
    idCheckMessage.value = '아이디를 입력해주세요.'
    idCheckValid.value = false
    return
  }

  try {
    const res = await countMemberByLoginId(userForm.value.loginId)

    if (res.data > 0) {
      idCheckMessage.value = '이미 사용중인 아이디입니다.'
      idCheckValid.value = false
    } else {
      idCheckMessage.value = '사용 가능한 아이디입니다!'
      idCheckValid.value = true
    }
  } catch (error) {
    console.error('중복확인 실패:', error)
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
      <div class="flex gap-2 items-center">
        <InputText
          v-model="userForm.loginId"
          placeholder="아이디를 입력하세요"
          class="border border-gray-300 rounded px-4 py-3 w-full"
        />
        <Button
          label="중복확인"
          class="bg-gray-700 text-white px-4 py-2 rounded"
          @click="checkLoginId"
        />
      </div>

      <!-- 중복 체크 결과 메시지 -->
      <p :class="idCheckValid ? 'text-green-600' : 'text-red-600'" class="text-sm">
        {{ idCheckMessage }}
      </p>
    </div>

    <!-- 비밀번호 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">비밀번호</label>
      <div class="relative">
        <InputText
          :type="showPassword ? 'text' : 'password'"
          v-model="userForm.password"
          placeholder="비밀번호를 입력하세요"
          class="border border-gray-300 rounded px-4 py-3 w-full pr-12"
        />
        <span
          class="absolute right-4 top-3 cursor-pointer text-gray-500 z-20"
          @click="togglePassword"
        >
          {{ showPassword ? '👁️' : '👁️‍🗨️' }}
        </span>
      </div>
    </div>

    <!-- 비밀번호 재입력 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">비밀번호 재입력</label>
      <div class="relative">
        <InputText
          :type="showPasswordConfirm ? 'text' : 'password'"
          v-model="userForm.passwordConfirm"
          placeholder="비밀번호를 재입력하세요"
          class="border border-gray-300 rounded px-4 py-3 w-full pr-12"
        />
        <span
          class="absolute right-4 top-3 cursor-pointer text-gray-500 z-20"
          @click="togglePasswordConfirm"
        >
          {{ showPasswordConfirm ? '👁️' : '👁️‍🗨️' }}
        </span>
      </div>
    </div>

    <!-- 이름 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">이름</label>
      <InputText
        v-model="userForm.name"
        placeholder="이름을 입력하세요"
        class="border border-gray-300 rounded px-4 py-3"
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
      <InputText
        v-model="userForm.email"
        placeholder="이메일을 입력하세요"
        class="border border-gray-300 rounded px-4 py-3"
      />
    </div>

    <!-- 제출 버튼 -->
    <Button
      type="submit"
      label="회원가입"
      class="bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600 transition mt-6"
    />
  </form>
</template>
