<template>
        <div>
            completed Todo: {{number0fcompletedTodo}}
        </div>
</template>

<script>
export default {
    props:{
        todos:{
            type:Array,
            required:true
        }
    },
    computed: {
        number0fcompletedTodo(){
            return this.todos.filter(todo => todo.checked).length;
        }
    }
}
</script>

<style scoped>

</style>