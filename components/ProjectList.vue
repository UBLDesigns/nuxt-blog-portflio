<template>
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">error...</section>
    <section v-else>
        <article v-for="repo in repos" :key="repo.id" class="border border-gray-200 dark:border-gray-600 p-4 rounded-lg my-4 font-mono flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800">
            <div class="w-10/12">
                <NuxtLink class="font-semibold font-mono text-[1.2rem]" :to="repo.html_url" target="_blank" no-rel external>{{ repo.name }}</NuxtLink>
                <p class="text-sm">{{ repo.description }}</p>
                <ul class="flex gap-2 flex-wrap">
                    <li v-for="(topic, key) in repo.topics" :key="key" class="text-xs py-1 px-1.5 rounded-md mt-2" :class="topic">{{ topic }}</li>
                </ul>
            </div>
            <div class="flex justify-end items-center gap-2 w-2/12">{{ repo.stargazers_count }} &#9733;</div>
        </article>
    </section>
</template>

<script lang="ts" setup>
const { error, pending, data } = await useFetch('https://api.github.com/users/UBLDesigns/repos')

const repos = data.value.filter(project => project.description).sort((a, b) => b.stargazers_count - a.stargazers_count);
</script>

<style scoped>
.composition{
    @apply bg-gray-200 text-gray-700;
}
.headless, .api{
    @apply bg-gray-600 text-white;
}
.pinia{
    @apply bg-[#a6aa35] text-white;
}
.vue3, .nuxt{
    @apply bg-[#41B883] text-white;
}
.vuejs{
    @apply bg-[#319669] text-white;
}
.tailwind{
    @apply bg-[#0ea5e9] text-white;
}
.react, .next{
    @apply bg-[#61DBFB] text-white;
}
.front-end{
    @apply bg-gray-400 text-white;
}
.redux, .redux-toolkit{
    @apply bg-[#764abc] text-white;
}
</style>