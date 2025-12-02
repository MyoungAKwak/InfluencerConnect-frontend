<script setup>
import { ref, onMounted } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { useRouter, useRoute } from 'vue-router'
import { getBoard, createBoard, updateBoard } from '@/api/boardService'

const router = useRouter()
const route = useRoute()

// 폼 데이터
const boardForm = ref({
  title: '',
  content: ''
})

const boardId = route.params.id  // URL param에서 게시글 ID

// 수정 페이지 진입 시 기존 데이터 조회
onMounted(async () => {
  if (boardId) {
    try {
      const boardData  = await getBoard(boardId)
      console.log('boardData ', boardData)
      boardForm.value = {
        title: boardData.data.title,
        content: boardData.data.content
      }
    } catch (error) {
      console.error('게시글 조회 실패:', error)
    }
  }
})

// 저장 (수정) 버튼 클릭
const saveBoard = async () => {
  try {
    if (boardId) {
      await updateBoard(boardId, boardForm.value) // 수정 API 호출
    } else {
      // boardId 없으면 새 글 등록
      await createBoard(boardForm.value)
    }
    router.push('/board/list')
  } catch (error) {
    console.error('게시글 저장 실패:', error)
  }
}

// 취소 버튼 클릭
const cancelEdit = () => {
  router.push('/board/list')
}
</script>

<template>
  <div class="p-4 max-w-3xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">{{ boardId ? '게시글 수정' : '게시글 작성' }}</h1>

    <div class="mb-4">
      <label class="block mb-2 font-semibold">제목</label>
      <InputText v-model="boardForm.title" class="w-full" placeholder="제목을 입력하세요" />
    </div>

    <div class="mb-4">
      <label class="block mb-2 font-semibold">내용</label>
      <Textarea v-model="boardForm.content" rows="10" class="w-full" placeholder="내용을 입력하세요" />
    </div>

    <div class="flex justify-end gap-2">
      <Button label="취소" class="p-button-secondary" @click="cancelEdit" />
      <Button label="저장" class="p-button-success" @click="saveBoard" />
    </div>
  </div>
</template>