<script setup>
import { ref } from 'vue'

// 예시 데이터
const posts = ref([
  {
    id: 1,
    category: '일상',
    title: 'ㅇㅁㅇㅂㄹㄱ 일 처리 못하네용[2]N',
    author: '홀리Holy',
    date: '2025-12-03',
    views: 57,
    likes: 0,
    pinned: false,
  },
  {
    id: 2,
    category: '일상',
    title: '요즘 일 줄어들었죠?[2]N',
    author: '뷰리',
    date: '2025-12-03',
    views: 108,
    likes: 0,
    pinned: false,
  },
  {
    id: 3,
    category: '질문하기',
    title: '필요이상 질문하면?',
    author: '동키🫏',
    date: '2025-12-03',
    views: 47,
    likes: 0,
    pinned: false,
  },
  {
    id: 4,
    category: '공지',
    title: '블로그 위젯 공지[359]',
    author: '-',
    date: '',
    views: '-',
    likes: '-',
    pinned: true,
  },
  {
    id: 5,
    category: '공지',
    title: '🚨 커뮤니티 규칙 개정[6]',
    author: '-',
    date: '',
    views: '-',
    likes: '-',
    pinned: true,
  },
  // ... 나머지 글들
])
</script>

<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-4">커뮤니티 글 목록</h1>
    <div class="overflow-x-auto bg-white shadow rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">카테고리</th>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">제목</th>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">작성자</th>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">작성일</th>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">조회</th>
            <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">좋아요</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            v-for="post in posts"
            :key="post.id"
            :class="post.pinned ? 'bg-yellow-50 font-semibold' : ''"
          >
            <td class="px-4 py-2">{{ post.category }}</td>
            <td class="px-4 py-2">{{ post.title }}</td>
            <td class="px-4 py-2">{{ post.author }}</td>
            <td class="px-4 py-2">{{ post.date }}</td>
            <td class="px-4 py-2">{{ post.views }}</td>
            <td class="px-4 py-2">{{ post.likes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
