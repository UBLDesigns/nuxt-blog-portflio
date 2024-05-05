<template>
    <article class="prose prose-pre:border prose-pre:border-black/10 prose-pre:bg-white prose-pre:text-gray-700 dark:prose-invert dark:prose-pre:bg-gray-950 dark:prose-pre:text-gray-200 max-w-none">
        <ContentDoc v-slot="{ doc }">
            <div class="grid grid-cols-6 gap-16 w-full">
                <div :class="{'col-span-6 order-last lg:order-first lg:col-span-4' : doc.enableNav, 'col-span-6' : !doc.enableNav }">
                    <ContentRenderer :value="doc" />
                </div>
                <div v-if="doc.enableNav" class="col-span-6 order-first lg:col-span-2 border-none lg:border-s border-gray-200 dark:border-gray-700 px-0 lg:px-6 lg:order-last">
                    <aside class="sticky top-8 lg:top-40">
                        <div class="font-semibold text-lg mb-2">Table Of Contents</div>
                        <nav class="text-md lg:text-sm">
                            <TOCLinks :links="doc.body.toc.links" :active-id="activeId" />
                        </nav>
                    </aside>
                </div>
            </div>
        </ContentDoc>
    </article>
</template>

<script setup>
const activeId = ref(null);

onMounted(() => {
    const callback = entries => {
        for(const entry of entries) {
            if(entry.isIntersecting){
                activeId.value = entry.target.id;
                break;
            }
        }
    }

    const observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 0.5
    })

    const elements = document.querySelectorAll('h2, h3, h4, h5, h6')

    for(const element of elements){
        observer.observe(element);
    }

    onBeforeUnmount(() => {
        for(const element of elements){
            observer.unobserve(element);
        }
    });
})
</script>