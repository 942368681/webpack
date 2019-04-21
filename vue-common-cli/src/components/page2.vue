<template>
    <h1 @click="back">我是page2</h1>
</template>

<script>

export default {
    name: 'page-2',
    created () {
        console.log('page2 created');
    },
    mounted () {
        console.log('page2 mounted');
    },
    methods: {
        back () {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    h1 {
        color: yellow;
    }
</style>