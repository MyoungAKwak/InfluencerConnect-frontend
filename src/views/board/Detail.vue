<script setup>
import { ref, onMounted } from 'vue'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { getBoard } from '@/api/boardService'
import { useRoute, useRouter } from 'vue-router'


//라우터 이동 담당
const router = useRouter()

//현재 라우터 정보만 가져오는 객체
const route = useRoute()
const board = ref([])


// URL param에서 boardId 받아서 API 호출
onMounted(async () => {
  const boardId = route.params.id
  try {
    const response = await getBoard(boardId)
    board.value = [response.data]  // 단일 객체를 배열로 감싸기
  } catch (error) {
    console.error('게시글 상세 조회 실패:', error)
  }
})


// 취소
const goCancel = () => {
  router.push('/board/list')
}

// edit로 이동 (boardId 전달)
const goEdit = () => {
  if (board.value.length > 0) {
    const idToEdit  = board.value[0].boardId
    if (idToEdit ) {
      router.push(`/board/edit/${idToEdit}`)
    } else {
      console.error('boardId가 존재하지 않습니다.')
    }
  }
}

</script>

<template>
  <div>
    <DataTable :value="board" tableStyle="min-width: 50rem">
      <Column field="id" header="ID"></Column>
      <Column field="userName" header="작성자"></Column>
      <Column field="title" header="제목"></Column>
      <Column field="content" header="내용"></Column>
      <Column field="createdDate" header="작성일"></Column>
    </DataTable>

    <div class="mt-4 flex gap-3">
      <Button 
        label="수정하기" 
        icon="pi pi-pencil" 
        class="p-button-warning"
        @click="goEdit"
      />
      <Button 
        label="취소" 
        icon="pi pi-times" 
        class="p-button-secondary"
        @click="goCancel"
      />
    </div>
  </div>
</template>