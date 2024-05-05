<template>
    <footer class="flex justify-between items-center border-t border-gray-200 dark:border-gray-600 py-8 px-2 text-gray-600 dark:text-gray-300">
        <p class="text-sm">&copy;{{ year }} Robert Gouveia. All rights reserved</p>

        <nav>
            <ul class="flex gap-4 text-gray-500 dark:text-gray-300">
                <li><NuxtLink to="/" class="hover:text-lime-500" activeClass="text-lime-500">Home</NuxtLink></li>
                <li><NuxtLink to="/tos" class=" hover:text-lime-500" activeClass="text-lime-500">TOS</NuxtLink></li>
            </ul>
        </nav>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>