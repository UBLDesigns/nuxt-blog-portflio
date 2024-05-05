<template>
    <article class="prose dark:prose-invert">
        <ContentDoc path="/about" />
    </article>
</template>

<script setup>
useHead({
    title: 'About',
    meta: [
      { hid: 'description', name: 'description', content: 'About Robert Gouveia Description Goes Here' },
      { hid: 'keywords', name: 'keywords', content: 'robert gouveia, full stack developer, developer' }
    ],
});
</script>