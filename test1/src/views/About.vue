<template>
  <div class="about">
    <h1>This is an about page</h1>
    <kossieCoder name=강찬혁> 
    <template #header="props">
      <p>안녕하세요 {{props.kk}} </p>
    </template>
     <template v-slot:meme>
      <h1>안녕하세요</h1>
      </template>  
    </kossieCoder>
  </div>
</template>

<script>
import kossieCoder from '@/components/KossieCoder.vue'


export default {
  components:{
    kossieCoder
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>