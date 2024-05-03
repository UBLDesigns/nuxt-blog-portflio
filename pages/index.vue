<template>
    <div>
        <h1>Welcome to the home page</h1>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt Blog Website',
  description: 'Welcome to my first Nuxt Blog App',
  ogTitle: 'Nuxt Blog Website',
  ogDescription: 'Welcome to my first Nuxt Blog App',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Nuxt Blog Website',
  twitterDescription: 'Welcome to my first Nuxt Blog App',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>