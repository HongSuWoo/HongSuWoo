<script setup>
    import { ref } from "vue";
    import cat2 from './cat2.vue'
    const catName = ref("a");
</script>

<template>
    <div>
         <input v-model="catName"/>
         <cat2>
            <template #[catName]>
                <img src="./7.jpg" height="300px" width="300px">
            </template>
    </cat2>
</div>
</template>

<style scoped>
    /* img{
        position: static;
    } */
</style>