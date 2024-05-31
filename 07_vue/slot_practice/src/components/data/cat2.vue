<template>
    <div class="container">
        <div class="boxx">
            <slot name="a"></slot>
        </div>
        <div class="boxx">
            <slot name="b"></slot>
        </div>
        <div class="boxx">
            <slot name="c"></slot>
        </div>
        <div class="boxx">
            <slot name="d"></slot>
        </div>
    </div>   
</template>

<style scoped>
.container {
    display: flex; /* 자식 요소들을 가로로 나열합니다. */
}

.boxx {
    width: 300px;
    height: 300px;
    background-color: green;
    border: 1px solid;
    border-color: blue;
    margin: 10px;
}
</style>
