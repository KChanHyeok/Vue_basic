<template>
    <div>
        <Todo
        v-for="todo in todos" 
        :key="todo.id"
        :todo="todo"
        @toggle-checkbox="toggleCheckbox"
        @click-delete="deleteTodo"
        />
    </div>
</template>
<script>
import Todo from '@/components/Todo.vue'
export default {
    components:{
        Todo
    },
    computed:{
        todos(){
            return this.$store.state.todo.todos;
        }
    },
   methods:{
       toggleCheckbox(value){
           this.$emit("todo/toggle-checkbox",value)
       },
       deleteTodo(todoId){
            this.$emit("todo/click-delete", todoId);
       }
    }
}
</script>
