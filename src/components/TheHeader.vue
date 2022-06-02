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
  background-color: #666666;
  height: 7rem;
  width: 100%;
}

h1 {
  max-width: 600px;
  margin-bottom: 20px;
  color: white;
  margin-left: auto;
 margin-right: auto;
  

}

</style>>
