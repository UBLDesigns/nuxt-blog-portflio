<template>
    <header class="bg-gray-800 p-8 rounded-2xl flex justify-between items-center gap-6">
        <div>
            <NuxtLink to="/" class="text-2xl text-lime-500 font-bold uppercase">Nuxt Blog</NuxtLink>
        </div>
        <nav>
            <ul class="flex gap-4 text-lg text-white">
                <li><NuxtLink to="/" activeClass="text-lime-500" class="hover:text-lime-500">Home</NuxtLink></li>
                <li><NuxtLink to="/about" activeClass="text-lime-500" class="hover:text-lime-500">About</NuxtLink></li>
                <li><NuxtLink to="/posts" activeClass="text-lime-500" class="hover:text-lime-500">Blog</NuxtLink></li>
            </ul>
        </nav>
    </header>
</template>