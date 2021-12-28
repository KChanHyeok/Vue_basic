<template>
<div>
    <h1>{{title}}</h1>
    <slot name="header" :kk="kossie"></slot>
    <p>{{name}}</p>
    <slot name="meme"></slot>
    <button @click="updateName">Change name</button>
</div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default: 'default title'
        },
        name:{
            type: String,
            default: 'default name'
        }
    },
    data(){
        return{
            kossie: 'coder'
            // name: 'Kossie Coder'
        }
    },
    methods:{
        updateName(){
            this.name = 'Kossie Coder updated';
        }
    }
}
</script>
<style scoped>

</style>