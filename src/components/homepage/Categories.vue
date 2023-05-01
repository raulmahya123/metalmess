<script setup>
import categoriesCard from '../categoriesCard.vue';
import {ref} from 'vue';
const categories = ref([
    {id : 1,title: "Mobile UI", count:"731", Image:"categories-1.png"},
    {id : 2,title: "Fonts", count:"657", Image:"categories-2.png"},
    {id : 3,title: "Icon Set" ,count:"83559", Image:"categories-3.png"},
    {id : 4,title: "Website UI Kit", count:"4500", Image:"categories-4.png"} 
])
</script>

<template>
      <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <categoriesCard v-for="categories in categories" 
        :key="categories.id" 
        :title="categories.title" 
        :count="categories.count"
         :Image="categories.Image" />
    </div>
</div>
</template>