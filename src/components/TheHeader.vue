<template>
<header>
  <div>
    <h1> {{ title }} </h1>
    <form>
      <label type="tel">tel: <a href="phone"> {{phone}}</a> </label>
      <label type="email"><e-mail>{{ email }}</e-mail></label>
    </form>
  </div>
</header>
</template>

<script>
export default {
  props: [
    'title',
    'phone',
    'email'
  ]
}
</script>

<style scoped>
header {
  width: 100%;
  background-color: white;
  height: 7rem;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  margin-bottom: 20px;
  color: black;
}

p {

  color: black;
}
</style>>
