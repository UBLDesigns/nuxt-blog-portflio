<template>
    <div>
        Blog Post ID {{ id }}
    </div>
</template>

<script setup>
const route = useRoute();

const {id} = route.params;
</script>