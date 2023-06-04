<script setup>
import categoriesCard from '../categoriesCard.vue';
import axios from 'axios';
import {ref,onMounted} from 'vue';

const categories = ref([])
async function getCategory(){
  try{
    const response = await axios.get('https://apiraulz.herokuapp.com/api/categories?show_products=1')
    categories.value = response.data.data.data
    console.log(response.data.data.data)
    }catch(error){
      console.log(error);
    }
  }


onMounted(() => {
  getCategory();
})
</script>

<template>
      <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <categoriesCard v-for="category in categories"
      :id="category.id"
        :key="category.id" 
        :title="category.name" 
        :count="category.products_count"
        :Image="category.thumbnails"/>
    </div>
</div>
</template>