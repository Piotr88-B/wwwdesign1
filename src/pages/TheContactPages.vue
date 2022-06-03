<template>
  <section-card mode="contact__form">
    <form class="contaction__form">
      <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Your Name">
      <label>Email</label>
      <input type="email" v-model="email" name="email" placeholder="Your Email">
      <label>Message</label>
      <textarea name="message" v-model="message" cols="30" rows="5" placeholder="Message">
          </textarea>
      <input type="submit" value="Send">
    </form>
    <div class="contact__mapa">
      <the-map></the-map>
      <the-adress></the-adress>
    </div>
  </section-card>
</template>

<script>
import TheMap from '@/components/TheMap.vue'
import emailjs from 'emailjs-com';
import SectionCard from '@/ui/SectionCard.vue';
import TheAdress from '@/components/TheAdress.vue';

export default {
  components: {
    TheMap,
    SectionCard,
    TheAdress
  },

  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
          'YOUR_USER_ID', {
            name: this.name,
            email: this.email,
            message: this.message
          })

      } catch (error) {
        console.log({
          error
        })
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>




.contaction__form {
  display: flex;
  flex-direction: column;
  flex-basis: 260px;
  font-size: 12px;
  order: 1;
}
.contact__mapa{
  display: flex;
  flex-direction: column;
  flex-basis: 250px;
  order: 2;
}

input[type=text],
[type=email],
textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: none;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
