<script setup>
import ItemCard from '../ItemCard.vue';
import {ref,onMounted} from 'vue';
import axios from 'axios';
const Items = ref([])
import { useRoute } from 'vue-router';
const route = useRoute()
const category = ref({})
async function getItemdata(){
  try{
    const response = await axios.get('https://apiraulz.herokuapp.com/api/categories?id='+ route.params.id +'show_products=1')
    Items.value = response.data.data.products
    category.value = response.data.data
    console.log(response.data.data.products)
    }catch(error){
      console.log(error);
    }
  }


onMounted(() => {
    getItemdata();
})
</script>

<template>
      <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{category.name}}</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <ItemCard v-for="Item in Items" 
        :key="Item.id" 
        :id="Item.id"
        :title="Item.name" 
        :description="Item.subtitle"
         :Image="Item.thumbnails" />
    </div>
</div>
</template>