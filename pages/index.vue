<template>
    <section>
      <h1 class="text-4xl font-semibold mb-2 text-center">Welcome to my first Nuxt Project</h1>
      <h2 class="text-lg font-semibold mb-8 text-center text-lime-500">Developed using Nuxt, Vite &amp; Tailwind</h2>
      <p class="text-center">The focus is not the design aspect per say, even though it is using tailwind and mobile friendly.</p>
      <p class="text-center">The focus was on the basic features of Nuxt in general</p>
    </section>
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