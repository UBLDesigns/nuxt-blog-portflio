<template>
    <section class="not-prose font-mono w-full">
        <div class="column text-gray-400 text-sm">
            <div>Date</div>
            <div>Post</div>
        </div>
        <ul class="">
            <li v-for="(post, key) in posts" :key="key" class="column text-gray-400 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                <div class="text-gray-500">{{ post.publishedAt }}</div>
                <div>
                    <NuxtLink :to="post._path" class="hover:underline hover:underline-offset-4">{{ post.title }}</NuxtLink>
                    <p class="text-xs">{{ post.description }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup>
const { data: posts } = await useAsyncData(
    'blog-list', 
    () => queryContent('/posts').only(['title', 'description', '_path', 'publishedAt']).where({_path: { $ne: '/posts'}}).sort({publishedAt: -1}).find()
)
</script>

<style scoped>
.column{
    @apply flex items-center gap-8 p-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0;
}
</style>