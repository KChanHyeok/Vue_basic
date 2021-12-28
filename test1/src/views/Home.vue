<template>
  <div>
    <h1>This is Home page</h1> 
    <!-- <form > -->
    <inputField v-model="name" />    
      <br><button @click="updateName">Submit</button>
    <!-- </form> -->
    {{name}}
    </div>
</template>

<script>
import inputField from '@/components/InputField.vue'

export default {
components:{
  inputField
},
  data(){
    return{
      name : 'Kossie Coder'
    }
  },

  beforeCreate(){
    console.log('beforeCreate',this.name)
  },
  created(){
    console.log('Created',this.name)
  },

  beforeMount(){
    alert("beforMount")
  },
  mounted(){
    alert("mounted")
  },
  beforeUpdate(){
    alert("beforUpdate")
  },
  updated(){
    alert("updated")
  },
  beforeDestroy(){
    alert("beforeDestroy")
  },
  destroyed(){
    alert("destroyed")
  },
  methods:{
    updateName(){
      this.name = 'hello';
    }
  }
}
</script>
<style scoped>
h1{
  color: red;
}

</style>