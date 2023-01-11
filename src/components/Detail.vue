<template>
  <div>
    <div>{{ data[index].writer }}</div>
    <div>{{ data[index].title }}</div>
    <div>{{ data[index].content }}</div>
    <button @click="updateData">수정</button>
    <button @click="deleteData">삭제</button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import data from '@/data';
import { useRouter } from 'vue-router';

export default {
  setup () {
    const route = useRoute();
    const router = useRouter();
    const index  = route.params.contentId;

    const deleteData = (index) => {
      data.splice(index,1);
      router.push({
        path : '/'
      })
    }

    const updateData = () => {
      router.push({
        name : 'Create',
        params : {
          contentId : index
        }
      });
    }

    return {
      data,
      index,
      deleteData,
      updateData
    }
  }
}
</script>

<style lang="scss" scoped>

</style>