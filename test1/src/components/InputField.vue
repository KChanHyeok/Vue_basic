<template>
    <div>
    <label for="">Name</label>
    <input 
    type="text" 
    :value="value"
    style="padding: 20px; border: 2px solid green;"
    v-on:input="updateName">    
    </div>
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            required:true
        }
    },
     methods:{
         updateName(e){
            console.log(e.target.value);
            this.$emit('update-name',e.target.value)
         }
    }
}
</script>