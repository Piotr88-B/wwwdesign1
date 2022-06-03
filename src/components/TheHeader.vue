<template>
<header>
  <div class="header__tittle">
    <h1> {{ title }} </h1>
</div>
</header>
</template>

<script>
export default {
props:[ 'title' ]
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  
  height: 10rem;
  justify-content: center;
  width: 100%;
}

h1 {
  max-width: 600px;
  margin-bottom: 20px;
  color: black;
  margin-left: auto;
 margin-right: auto;
  

}

</style>>
