<template>
    <teleport to='body'>
        <div class="fixed top-8 right-0 w-10 h-10 bg-indigo-500 rounded-l-lg flex items-center justify-center shadow-lg">
            <button v-if="colorMode.preference == 'dark'" @click="colorMode.preference = 'light'" class="bg-white rounded-full w-5 h-5 hover:bg-gray-900"></button>
            <button v-else @click="colorMode.preference = 'dark'" class="bg-gray-900 rounded-full w-5 h-5 hover:bg-white"></button>
        </div>
    </teleport>
</template>

<script setup>
const colorMode = useColorMode()

</script>