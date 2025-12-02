<script setup>
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import { getBoards, deleteBoards } from '@/api/boardService'

const boards = ref([])
const router = useRouter()
const selectedBoards = ref([])


//게시글 목록 조회
const fetchBoards = async () => {
  try {
    const response = await getBoards()
    boards.value = response.data.map(board => ({
      id: board.boardId,
      userId: board.userId,
      title: board.title,
      content: board.content,
      createdDate: board.createdAt
    }))
  } catch (error) {
    console.error('게시글 조회 실패:', error)
  }
}


//게시글 선택 삭제
const fetchDelBoard = async () => {
  try {
    const ids = selectedBoards.value.map(board => board.id)  // 원소에서 id만 뽑기
    await deleteBoards(ids)  // id 리스트로 보냄
    //삭제 후 목록 재조회
    await fetchBoards()
    selectedBoards.value = []
  } catch (error) {
    console.error('게시글 삭제 실패:', error)
  }
}

// 더블클릭 시 상세 페이지 이동
const goDetail = (rowData) => {
  router.push(`/board/detail/${rowData.data.id}`) 
  console.log('rowdata', rowData.data.id)
}

onMounted(() => {
  fetchBoards()
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">게시판 목록</h1>
    <div class="mt-4 flex justify-end">
      <RouterLink to="/board/edit">
        <Button label="글 등록하기" icon="pi pi-plus" class="p-button-success"/>
      </RouterLink>
      <Button label="선택 삭제"  icon="pi pi-trash" 
        class="p-button-danger"
        @click="fetchDelBoard"
       />

    </div>
    <DataTable
      :value="boards"
      tableStyle="min-width: 50rem"
      @row-click="goDetail"
      dataKey="id"
      v-model:selection="selectedBoards"

    >
      <!-- <Column field="id" header="ID" style="width: 5rem"/> -->
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="userId" header="작성자 ID" style="width: 10rem"/>
      <Column field="title" header="제목"/>
      <Column field="content" header="내용"/>
      <Column field="createdDate" header="작성일" style="width: 15rem"/>
    </DataTable>
  </div>
</template>