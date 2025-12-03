<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

const searchText = ref('')
const search = () => console.log(searchText.value)
</script>

<template>
  <nav class="bg-gray-100 p-4 shadow-md">
    <ul class="flex justify-between items-center w-full">
      
      <!-- 왼쪽 영역: 검색창 -->
      <li class="flex items-center">
        <InputText
          v-model="searchText"
          type="text"
          placeholder="입력해주세요."
          class="p-inputtext-sm"
          size="large"
          @keyup.enter="search"
        />
        <Button
          label="검색"
          class="ml-2 p-button-sm"
          @click="search"
        />
      </li>

      <!-- 오른쪽 영역: 메뉴 -->
      <li>
        <ul class="flex space-x-6">
          <li>
            <RouterLink 
              to="/" 
              class="font-semibold text-gray-700 hover:text-green-500"
              active-class="text-green-500"
              exact
            >
              홈
            </RouterLink>
          </li>

          <li>
            <RouterLink 
              to="/local/list" 
              class="font-semibold text-gray-700 hover:text-green-500"
              active-class="text-green-500"
            >
              지역
            </RouterLink>
          </li>

          <li>
            <RouterLink 
              to="/shipping/list" 
              class="font-semibold text-gray-700 hover:text-green-500"
              active-class="text-green-500"
            >
              배송
            </RouterLink>
          </li>          
          <li>
            <RouterLink 
              to="/community/list" 
              class="font-semibold text-gray-700 hover:text-green-500"
              active-class="text-green-500"
            >
              커뮤니티
            </RouterLink>
          </li>

          <li>
            <RouterLink 
              to="/board/list" 
              class="font-semibold text-gray-700 hover:text-green-500"
              active-class="text-green-500"
            >
              게시판
            </RouterLink>
          </li>

          <li>
            <RouterLink 
              to="/users/login" 
              class="font-semibold text-gray-700 hover:text-green-500"
              active-class="text-green-500"
            >
              로그인
            </RouterLink>
          </li>

          <li>
            <RouterLink 
              to="/users/signup" 
              class="font-semibold text-gray-700 hover:text-green-500"
              active-class="text-green-500"
            >
              회원가입
            </RouterLink>
          </li>
        </ul>
      </li>

    </ul>
  </nav>
</template>
