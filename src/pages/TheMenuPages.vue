<template>
<nav>
  <button-card @click="setPagesTab('the-about-pages')" :mode="setAboutButtonPages"> HOME </button-card>
  <button-card @click="setPagesTab('the-offert-pages')" :mode="setOfferButtonPage"> OFERTA </button-card>
  <button-card @click="setPagesTab('the-gallery-pages')" :mode="setGalleryButtonPage">GALERIA</button-card>
  <button-card @click="setPagesTab('the-contact-pages')" :mode="setContactButtonPage"> KONTAKT </button-card>
</nav>
<component :is="setPages"></component>
</template>

<script>
import TheAboutPages from './TheAboutPages.vue';
import TheOffertPages from './TheOffertPages.vue';
import TheGalleryPages from './TheGalleryPages.vue'
import TheContactPages from './TheContactPages.vue'

export default {
  components: {
    TheAboutPages,
    TheOffertPages,
    TheGalleryPages,
    TheContactPages
  },

  data() {

    return {
      setPages: 'the-about-pages',

      textBase: [{
        textArea: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'+
        ' Exercitationem vitae veritatis alias corrupti natus laboriosam saepe'+
        ' placeat explicabo harum fugit. Iste officia soluta,'+
        ' debitis aspernatur labore eaque dolore beatae facilis',
        textImg: require('@/assent/4.jpg')
      },{
        textArea: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'+
        ' Exercitationem vitae veritatis alias corrupti natus laboriosam saepe'+
        ' placeat explicabo harum fugit. Iste officia soluta,'+
        ' debitis aspernatur labore eaque dolore beatae facilis',
        textImg: '@/assent/2.jpg'
      }
      ],
       items: [{
          src: require('@/assent/1.jpg'),
          thumbnail:  require('@/assent/1.jpg'),
          w: 0,
          h: 0,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
       }, {
          src: require('@/assent/2.jpg'),
          thumbnail:  require('@/assent/2.jpg'),
          w: 0,
          h: 0,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
       }, {
          src: require('@/assent/3.jpg'),
          thumbnail:  require('@/assent/3.jpg'),
          w: 0,
          h: 0,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
       }, {
          src: require('@/assent/4.jpg'),
          thumbnail:  require('@/assent/4.jpg'),
          w: 0,
          h: 0,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
       },  {
          src: require('@/assent/5.jpg'),
          thumbnail:  require('@/assent/5.jpg'),
          w: 0,
          h: 0,
          alt: 'some numbers on a grey background' // optional alt attribute for thumbnail image
       },  {
          src: require('@/assent/6.jpg'),
          thumbnail: require('@/assent/6.jpg'),
          w: 0,
          h: 0,
          htmlAfterThumbnail: '<span class="photos-date">01.06.2022</span>' // optional, insert your html after tag <a> if you need it
        }]
      
    }
  },
  provide() {
    return {
      gallery: this.imageGallery,
      textHub: this.textBase,
      items: this.items
    }
  },
  computed: {
    setAboutButtonPages() {
      return this.setPages === 'the-about-pages' ? null : 'flat';
    },
    setOfferButtonPage() {
      return this.setPages === 'the-offert-pages' ? null : 'flat';
    },
    setGalleryButtonPage() {
      return this.setPages === 'the-gallery-pages' ? null : 'flat';
    },
    setContactButtonPage() {
      return this.setPages === 'the-contact-pages' ? null : 'flat';
    }

  },
  methods: {
    setPagesTab(tab) {
      this.setPages = tab;
    }
  }
}
</script>

<style >


img[itemprop="thumbnail"] {
    width: 160px;
    height: 160px;
}
nav {
  display: flex;
  width: 100%;
  justify-content: center;
  top: 0;
  position: sticky;
  flex-wrap: wrap;
  gap: 1%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: #666666;
}
.my-gallery{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.vue-map-container{
    flex-basis: 250px;
    order: 2;
}
</style>
