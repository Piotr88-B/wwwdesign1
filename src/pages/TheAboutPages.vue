<template>
  <section-card>
  <the-article-card v-for=" txt in textHub" 
  :key="txt.id" 
  :textArea="txt.textArea"
  :textImg="txt.textImg" >
  </the-article-card>
  </section-card>
</template>
<script>
import SectionCard from '@/ui/SectionCard.vue'
import TheArticleCard from '@/components/TheArticleCard.vue'
export default {
  components: { SectionCard, TheArticleCard },
  inject:['textHub']
}


</script>
<style scoped>
 article { 
   display: flex;
   margin-top: 20px;
   width: 100%;
   height: 30vh;
 }
</style>