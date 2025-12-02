<template>
  <nav class="bg-gray-100 p-4 shadow-md">
    <ul class="flex space-x-6">
      <li>
        <RouterLink 
          to="/" 
          class="font-semibold text-gray-700 hover:text-green-500"
          active-class="text-green-500"
          exact
        >
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink 
          to="/about" 
          class="font-semibold text-gray-700 hover:text-green-500"
          active-class="text-green-500"
        >
          About
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
  </nav>
</template>