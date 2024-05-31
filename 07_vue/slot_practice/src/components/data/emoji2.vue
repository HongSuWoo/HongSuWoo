<template>
    <div class="conta">
        <div class="con"> 
            <slot name="a" ></slot>
        </div>
        <div class="con"> 
            <slot name="b"></slot>
        </div>
        <div class="con">  
            <slot name="c"></slot>
        </div>
        <div class="con"> 
            <slot name="d"></slot>
        </div>
    </div>
</template>

<style scoped>
    .con{
        width: 300px;
        height: 300px;
        border: 5px solid;
        border-color: red;
    }
    .conta{
        display: flex;
    }
</style>

