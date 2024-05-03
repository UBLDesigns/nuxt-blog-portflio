<template>
    <div class="container max-w-5xl mx-auto mt-8">
        <Header />
        <main class="py-8 px-8 md:px-0">
            <slot />
        </main>
        <footer></footer>
    </div>
</template>

<script setup>
useHead({
    titleTemplate: '%s - Robert Gouveia',
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
}

h1,h2,h3,h4,h5,h6,a,button{
    font-family: "Montserrat", sans-serif;
}
</style>