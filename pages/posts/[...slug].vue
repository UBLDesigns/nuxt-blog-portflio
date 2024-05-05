<template>
    <article class="prose prose-pre:border prose-pre:border-black/10 prose-pre:bg-white prose-pre:text-gray-700 dark:prose-invert dark:prose-pre:bg-gray-950 dark:prose-pre:text-gray-200">
        <ContentDoc />
    </article>
</template>

<script setup>
const route = useRoute();

const {slug} = route.params;
</script>