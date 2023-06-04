<script setup>
import { ref } from 'vue';
const galleries = ref([
    {id:1 , image:'logo belakang belakang putih.png'},
    {id:2 , image:'logo depan.png'},
    {id:3 , image:'mockup belakang.png'},
    {id:4 , image:'mockup belakang.png'},

])
const defaultImage = ref('mockup belakang.png')

function changeImage(image){
    defaultImage.value = image
}
</script>

<template>

<section id="gallery">
            <img :src="'/img/' + defaultImage" alt="" class="w-full mt-6 rounded-2xl">
            <div class="grid grid-cols-4 gap-4 mt-4">
                <template v-for="gallery in galleries " :key="gallery.id">
                    <div @click="changeImage(gallery.image)" class="overflow-hidden cursor-pointer rounded-2xl" :class="{'ring-2 ring-indigo-500': defaultImage == gallery.image}">
                <img :src="'/img/'+ gallery.image" class="w-full" alt="">
              </div>
                </template>
            </div> 
          </section>

</template>