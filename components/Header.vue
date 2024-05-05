<template>
    <header class="bg-gray-800 p-8 rounded-2xl flex justify-between items-center gap-6 shadow-2xl lg:fixed lg:top-8 container w-full max-w-5xl mt-4 lg:mt-0 lg:mx-auto">
        <div>
            <NuxtLink to="/" class="text-2xl text-lime-500 font-bold uppercase">Nuxt Blog</NuxtLink>
        </div>
        <nav>
            <ul class="flex gap-4 text-lg text-white">
                <li><NuxtLink to="/" activeClass="link-active" class="link">Home</NuxtLink></li>
                <li><NuxtLink to="/about" activeClass="link-active" class="link">About</NuxtLink></li>
                <li><NuxtLink to="/posts" activeClass="link-active" class="link">Blog</NuxtLink></li>
                <li><NuxtLink to="/projects" activeClass="link-active" class="link">Projects</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.link{
    @apply text-lg text-white hover:text-lime-500;
}

.link-active{
    @apply text-lg text-lime-500 hover:text-lime-800;
}
</style>