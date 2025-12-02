<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

</script>
<template>
  <form @submit.prevent="onSubmit" class="max-w-md mx-auto mt-12 p-8 bg-white shadow-lg rounded-lg flex flex-col gap-12">
    
    <!-- ID -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">ID</label>
      <InputText v-model="username" placeholder="아이디를 입력하세요" 
        class="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <!-- 이름 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">이름</label>
      <InputText v-model="firstName" placeholder="이름을 입력하세요" 
        class="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <!-- 비밀번호 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">비밀번호</label>
      <InputText v-model="firstName" placeholder="비밀번호를 입력하세요" 
        class="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>    

    <!-- 이메일 -->
    <div class="flex flex-col gap-4">
      <label class="font-medium text-gray-700 text-lg">이메일</label>
      <InputText v-model="email" placeholder="이메일을 입력하세요" 
        class="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
    </div>

    <!-- 제출 버튼 -->
    <Button type="submit" label="회원가입" 
      class="bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600 transition mt-6" />
  </form>
</template>