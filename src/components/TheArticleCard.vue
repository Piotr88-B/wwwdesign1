<template>
<article>
  <p>{{ textArea }}</p>
  <img src=" textImg " alt="Obrazek"/>
</article>
</template>

<script>
export default {
  props: [
    'textArea',
    'textImg'
  ]
}
</script>

<style scoped>
article{ 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 50vh;
  margin: 5px;

}
p{ color: black;}
img{ 
  width: 100%;
  height:60%;
  background-color: blanchedalmond;
}
</style>
