<script setup>
import ItemCard from '../ItemCard.vue';
import {ref} from 'vue';
const Items = ref([
    {id : 1,title: "Mobile UI", description:"Mobile UI", Image:"items-1.jpg"},
    {id : 2,title: "Fonts", description:"Mobile UI", Image:"items-2.jpg"},
    {id : 3,title: "Icon Set" ,description:"Mobile UI", Image:"items-3.jpg"},
    {id : 4,title: "Website UI Kit", description:"Mobile UI", Image:"items-3.jpg"} 
])
</script>

<template>
      <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Item</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <ItemCard v-for="Items in Items" 
        :key="Items.id" 
        :title="Items.title" 
        :description="Items.count"
         :Image="Items.Image" />
    </div>
</div>
</template>