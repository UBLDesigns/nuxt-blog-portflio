<template>
    <div class="relative container max-w-5xl mx-auto dark:text-white">
        <Header />
        <main class="py-8 mt-36 px-8 md:px-0">
            <slot />
        </main>
        <Footer />
    </div>
    <ClientOnly>
        <ColourChanger />
    </ClientOnly>
</template>

<script setup>
useHead({
    titleTemplate: '%s - Robert Gouveia',
    meta: [
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'author', name: 'author', content: 'Robert Gouveia' },
      { hid: 'copyright', name: 'copyright', content: '© 2024 Robert Gouveia' },
    ],
    link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: ''
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
        }
    ]
});
</script>

<style>
body{
    font-family: "Inter", sans-serif;
    @apply bg-gray-50 dark:bg-gray-900
}

h1,h2,h3,h4,h5,h6,a,button{
    font-family: "Montserrat", sans-serif;
}
</style>