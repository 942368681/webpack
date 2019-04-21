<template>
    <h1 @click="turn">我是page1</h1>
</template>

<script>

export default {
    name: 'page-1',
    created () {
        console.log('page1 created');
    },
    mounted () {
        console.log('page1 mounted');
    },
    methods: {
        turn () {
            this.$router.push({name:"page2"});
        }
    }
}
</script>

<style scoped>
    h1 {
        color: #fff;
    }
</style>
