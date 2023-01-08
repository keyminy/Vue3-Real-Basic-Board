<template>
  <div>
    <input v-model="writer" type="text" placeholder="글쓴이"/>
    <input v-model="title" type="text" placeholder="제목"/>
    <textarea v-model="content" placeholder="내용"/>
    <button @click="write">작성</button>
  </div>
</template>

<script>
import data from '@/data';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup () {
    const router = useRouter();
    const writer=ref('');
    const title=ref('');
    const content=ref('');

    const write = () => {
      data.push({
        writer:writer.value,
        title:title.value,
        content:content.value
      });
      //글 작성 후 main화면으로 이동
      router.push('/');
    }

    return {
      data,
      writer,
      title,
      content,
      write
    }
  }
}
</script>

<style scoped>

</style>