<script setup>
import ItemCard from '../ItemCard.vue';
import { ref } from 'vue';
const Items = ref([
    { id: 1, title: "Mobile UI", description: "Mobile UI", Image: "items-1.png" },
    { id: 2, title: "Fonts", description: "Mobile UI", Image: "items-2.png" },
    { id: 3, title: "Icon Set", description: "Mobile UI", Image: "items-3.png" },
    { id: 4, title: "Website UI Kit", description: "Mobile UI", Image: "items-3.png" }
])
</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Item</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <item-card v-for="item in items"
             :key="item.id" 
             :title="item.title"
              :description="item.description"
                :image="item.Image" />

        </div>
    </div>
</template>