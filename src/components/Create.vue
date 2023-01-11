<template>
  <div>
    <input v-model="writer" type="text" placeholder="글쓴이"/>
    <input v-model="title" type="text" placeholder="제목"/>
    <textarea v-model="content" placeholder="내용"/>
    <button @click="index === '' ? write() : update()">{{ index === '' ? "작성" : "수정"}}</button>
  </div>
</template>

<script>
import data from '@/data';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup () {
    const route = useRoute();
    const router = useRouter();
    const index  = route.params.contentId;
    const writer= (index !== '') ? ref(data[index].writer) : ref('');
    const title= (index !== '') ? ref(data[index].title) : ref('');
    const content= (index !== '') ? ref(data[index].content) : ref('');

    const write = () => {
      data.push({
        writer:writer.value,
        title:title.value,
        content:content.value
      });
      //글 작성 후 main화면으로 이동
      router.push('/');
    }

    const update = () => {
      data[index].writer = writer.value;
      data[index].title = title.value;
      data[index].content = content.value;
      router.push('/');
    }

    return {
      data,
      index,
      writer,
      title,
      content,
      write,
      update
    }
  }
}
</script>

<style scoped>

</style>