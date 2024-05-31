<script setup>
    import Mycomponent from './components/01_component/Mycomponent.vue';
    import Parents from './components/02_slotintro/SlotParent.vue';
    import NamedParents from './components/03_slotNamed/NamedParents.vue';
    import DynamicParent from './components/04_dynamicslot/DynamicParent.vue';
</script>

<template>
    <div>
        <h1>component Container</h1>
        <Mycomponent/>
    </div>
    <main>
        <Parents/>
        <div class="test">
            <NamedParents/>
        </div>
        <DynamicParent/>

    </main>
</template>

<style scoped>


</style>