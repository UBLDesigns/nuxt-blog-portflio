<template>
    <ul class="not-prose">
        <li v-for="(link, key) in links" :key="key">
            <NuxtLink :to="{path: route.path, hash: `#${link.id}`}" :class="{ 'ml-4': level, 'text-lime-500' : activeId == link.id }">{{ link.text }}</NuxtLink>
            <TOCLinks :links="link.children" :level="level+1" :active-id="activeId" />
        </li>
    </ul>
</template>

<script setup>
defineProps({
    links: Array,
    level: {
        type: Number,
        default: 0
    },
    activeId: {
        type: String,
        default: null
    
    }
});

const route = useRoute()
</script>