<script setup>
    import {ref} from 'vue';
    import Child from "./SlotChild.vue";
    const props = ref("hellow data");

</script>
<!-- 
    slot
    슬롯은 vue 컴포넌트에서 콘텐츠를 전달하는 메커니즘으로 부모 컴포넌트에서 자식 컴포넌트로 데이터나 구조를 전달하는데 사용된다.
    슬롯은 사용하면 부모 컴포넌트에서 자식 컴포넌트의 일부를 동적으로 결정할 수 있으며, 재사용 가능한 컴포너는트를 작성하는데 도움이 된다.
    일반적으로 컴포넌트 내의 맘크업에서 <slot>요소를 사용하여 슬롯을 정의하며 이는 자식 컴포너늩에서 해당 영역에 부모 컴포넌트로부터 
        전달된 콘텐츠를 표시하도록 지시한다.
 -->
<template>
    <div class="parentsContainer">
        <h1>
            Parents
        </h1>
        <!-- 
            태그에 앞에 대문자면 사용자 정의 컴포넌트(ㅈ그 태그)
            임포트 해줘야함.
         -->
        <Child>
            {{ props }}
        </Child>
    </div>

</template>

<style scoped>

    .parentsContainer{
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid;

    }

</style>