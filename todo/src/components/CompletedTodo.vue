<template>
        <div>
            completed Todo: {{number0fcompletedTodo}}
        </div>
</template>

<script>
export default {
    computed: {
        // todos(){
        //     return this.$store.state.todos;
        // },
        number0fcompletedTodo(){
            return this.$store.getters['todo/number0fcompletedTodo']
        }
    }
}
</script>

<style scoped>

</style>