<template>
  <div>
    <table>
      <tr>
        <td>글쓴이</td>
        <td>제목</td>
        <td>내용</td>
      </tr>
      <tr v-for="(value,index) in data" 
        :key="index"
        @click="detail(index)"  
        style="cursor:pointer;"
      >
        <td>{{ value.writer }}</td>
        <td>{{ value.title }}</td>
        <td>{{ value.content }}</td>
      </tr>
    </table>
    <button @click="write">글쓰기</button>
  </div>
</template>

<script>
import data from '@/data';
import { useRouter } from 'vue-router';

export default {
  setup () {
    const router = useRouter();
    const write = () => {
      router.push('/create');
    }
    const detail = (index) => {
      router.push({
        name:'Detail',
        params:{contentId:index}
      })
    }

    return {
      data,
      write,
      detail
    }
  }
}
</script>

<style scoped>

</style>