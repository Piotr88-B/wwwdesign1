<template>
<section-card>
  <form>
    <label>Name</label>
    <input type="text" v-model="name" name="name" placeholder="Your Name">
    <label>Email</label>
    <input type="email" v-model="email" name="email" placeholder="Your Email">
    <label>Message</label>
    <textarea name="message" v-model="message" cols="30" rows="5" placeholder="Message">
          </textarea>
    <input type="submit" value="Send">
  </form>
  <section-card><the-map></the-map></section-card>

</section-card>
</template>
<script>
import TheMap from '@/components/TheMap.vue'
import emailjs from 'emailjs-com';
import SectionCard from '@/ui/SectionCard.vue';

export default {
  components: { TheMap, SectionCard },
 
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

      } catch(error) {
          console.log({error})
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
form {
  display: flex;
  flex-direction: column;
  width: 60%;
  font-size: 12px;
  margin-left: auto;
  margin-right: auto;
}

input[type=text],
[type=email],
textarea {
  width: 100%;
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
