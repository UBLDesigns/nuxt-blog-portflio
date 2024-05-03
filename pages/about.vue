<template>
    <div>
        about
    </div>
    <div>
        <button @click="changeLayout">Change Layout</button>
    </div>
</template>

<script setup>
/* definePageMeta({
    layout: 'another',
});

const changeLayout = () => {
    setPageLayout('default');
}; */

useHead({
    title: 'About'
});
</script>