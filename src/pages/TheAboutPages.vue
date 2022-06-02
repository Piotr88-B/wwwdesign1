<template>
  <section-card>
  <the-article-card v-for=" txt in textHub" 
  :key="txt.id" 
  :textArea="txt.textArea"
 :src="txt.textImg">
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
