import {
  createApp
} from 'vue'
import App from './App.vue'
import ButtonCard from './ui/ButtonCard.vue'
import SectionCard from './ui/SectionCard.vue'
import VuePictureSwipe from 'vue3-picture-swipe';

const app = createApp(App)
app.component('button-card', ButtonCard)
app.component('section-card', SectionCard)
app.component('vue-picture-swipe', VuePictureSwipe);
app.mount('#app')