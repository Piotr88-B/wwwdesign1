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
  margin: 5px;
}

h1 {
  max-width: 1000px;
  margin-bottom: 20px;
  color: #C5A783;
  margin-left: auto;
 margin-right: auto;
  

}

</style>>
