<script setup>
defineProps({
  id:Number,
    title:String,
    Image:String,
    description: String
})
import { RouterLink } from 'vue-router';
</script>
<template>
      <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
          <RouterLink :to="'/product/' + id">
            <div class="m-4 overflow-hidden rounded-xl">
              <img 
              :alt="title" 
              class="block w-full h-auto" 
              :src="'/img/'+ Image" />
            </div>
          </RouterLink>

          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              <RouterLink 
              class="font-semibold text-black no-underline hover:underline"
                :to="'/product/' + id">
                {{title}}
              </RouterLink>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
              {{ description }}items
            </span>
          </header>
        </div>
      </div>


</template>