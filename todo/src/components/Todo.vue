<template>
    <div class="mb-2 d-flex">
        <div>
            <input 
            type="checkbox" 
            :checked="todo.checked" 
            @change="togglecheckbox">
        </div>
    <span 
        class="ml-3 flex-grow-1"
        :class="todo.checked ? 'text-muted' : '' "
        :style="todo.checked ? 'text-decoration:line-through' : '' "
    >
          {{todo.text}} 
    </span>
    <button 
    class="btn btn-danger btn-sm"
    @click="clickDelete"
    >
        Delete
    </button>
    </div>  
</template>

<script>

export default {
    props:{
        todo:{
            type: Object,
            required: true
        }
    },
    computed:{
        number0fcompletedTodo(){
            return this.$store.getters['todo/number0fcompletedTodo'];
        }
    },

    methods:{
        togglecheckbox(e){
            // this.$emit("toggle-checkbox",{
            //     id: this.todo.id,
            //     checked: e.target.checked
            // })
            // this.$store.commit('TOGGLE_TODO',{
            //     id: this.todo.id,
            //     checked: e.target.checked
            // });
            this.$store.dispatch('todo/toggleTodo',{
                id: this.todo.id,
                checked: e.target.checked
            })
            },
        clickDelete(){
            this.$store.dispatch('todo/deleteTodo',this.todo.id);
            // this.$store.commit('DELETE_TODO',this.todo.id)
            // this.$emit("click-delete", this.todo.id);
        }
    }

}
</script>
<style>

</style>