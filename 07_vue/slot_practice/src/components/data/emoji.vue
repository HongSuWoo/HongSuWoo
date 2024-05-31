<script setup>
import{ ref} from "vue";
import{createApp} from "vue";
import{watch} from "vue";
import emoji2 from './emoji2.vue'

        const label = ref('1234');
        const emoji = ref('');
        const label2 = ref('d');
        let cachedData = null;

        watch(label, async (newValue) => {
            if (!cachedData) {
                const response = await fetch("https://api.github.com/emojis");
                cachedData = await response.json();
                console.log("api 에서 불러오기");
            } else {
                console.log("임의 캐시에서 가져오기.");
            }

            emoji.value = cachedData[newValue];
            // console.log("작동");
            // console.log(cachedData);
            // console.log(emojiNames[0]);
            // console.log(emoji.value);
        });

</script>

<template>
    <div>
        <input v-model="label">
        <input v-model="label2">
        <emoji2>
            <template #[label2]>
                <img :src="emoji" height="300px" width="300px">
            </template>
        </emoji2>

    </div>

</template>