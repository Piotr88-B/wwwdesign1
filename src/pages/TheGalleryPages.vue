
<template>
  <section-card >
  
    <vue-picture-swipe  :items="items"> </vue-picture-swipe >

  </section-card>
</template>
<script >

export default {

  inject: ['items'],
} 


</script>
<style >
img[itemprop="thumbnail"] {
    width: 150px;
    height: 150px;
}
/* img[itemprop="w"] {
    width: 100%;
}
img[itemprop="h"] {
    height: 100%;
} */
</style>
