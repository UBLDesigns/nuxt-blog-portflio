<template>
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">error...</section>
    <section v-else>
        <article v-for="repo in data" :key="repo.id" class="border border-gray-200 p-4 rounded-lg my-4 font-mono flex justify-between items-center hover:bg-gray-50">
            <NuxtLink class="font-semibold font-mono" :to="repo.html_url" target="_blank" no-rel external>{{ repo.name }}</NuxtLink>
            <div>{{ repo.stargazers_count }} &#9733;</div>
        </article>
    </section>
</template>

<script lang="ts" setup>
const { error, pending, data } = await useFetch('https://api.github.com/users/UBLDesigns/repos')
</script>