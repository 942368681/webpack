<template>
    <div id="app">
        
        <!-- <keep-alive>
            <router-view v-if="this.$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!this.$route.meta.keepAlive"></router-view> -->

        <!-- <keep-alive include="page-1">
            <router-view></router-view>
        </keep-alive> -->

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        background: #039be5;
    }
</style>
