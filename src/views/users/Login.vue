
<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
</script>

<template>
  <div>
 <form 
    class="max-w-sm mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg flex flex-col gap-6"
  >
    <!-- 아이디 -->
    <div class="flex flex-col gap-2">
      <label class="font-medium text-gray-700">아이디</label>
      <InputText 
        placeholder="아이디를 입력하세요" 
        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
      />
    </div>

    <!-- 비밀번호 -->
    <div class="flex flex-col gap-2">
      <label class="font-medium text-gray-700">비밀번호</label>
      <InputText 
        type="password"
        placeholder="비밀번호를 입력하세요" 
        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" 
      />
    </div>

    <!-- 로그인 버튼 -->
    <Button 
      type="submit" 
      label="로그인" 
      class="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition" 
    />
  </form>
  </div>
</template>
