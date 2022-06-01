<template>
<the-header :title="title" :phone="numberPhone"></the-header>
<the-menu-pages></the-menu-pages>
<the-footer></the-footer>

</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMenuPages from './pages/TheMenuPages.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheMenuPages,
    TheFooter

  },
  data() {
    return {
      title: 'Visual Merchandising. . .',
      numberPhone: 567567567,
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: 'Koulen', cursive;
  box-sizing: border-box;
}
</style>
