<template>
     <input 
    v-model="todoText"
    type="text" 
    class="w-100 p-2" 
    placeholder="Type todo"
    @keyup.enter="addTodo"
    >
</template>

<script>
export default {
    data(){
        return{
            todoText:''
        }
    },
    methods:{
        addTodo(e){
            // this.$store.commit('ADD_TODO',e.target.value);
            this.$store.dispatch('todo/addTodo',e.target.value)
            this.todoText='';
            // this.$emit('add-todo', e.target.value)
        }
    }
}
</script>

<style scoped>

</style>