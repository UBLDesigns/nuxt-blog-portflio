<template>
    <NuxtLayout>
        <section class="text-center">
            <h1 class="text-3xl lg:text-8xl font-bold">Error: {{ error.statusCode }}</h1>
            <h2 class="mt-4 mb-8 text-xl lg:text-3xl">{{ error.message }}</h2>
        </section>
    </NuxtLayout>
</template>

<script setup>
defineProps({
    error: Object
})
</script>