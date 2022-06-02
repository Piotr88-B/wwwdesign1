
<template>
  <section-card mode="gallery__img">
   
    <vue-picture-swipe  :items="items"> </vue-picture-swipe >
    
  </section-card>
</template>
<script >

export default {

  inject: ['items'],
} 


</script>
<style scoped>

</style>
