<template>
    <section>
        <ul>
            <li v-for="(post, key) in posts" :key="key">
                <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
                <p>{{ post.description }}</p>
            </li>
        </ul>
    </section>
</template>

<script setup>
const { data: posts } = await useAsyncData(
    'blog-list', 
    () => queryContent('/posts').only(['title', 'description', '_path']).find()
)
</script>