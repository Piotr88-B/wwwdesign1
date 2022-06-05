<template>
  <section>
    <div :type="type" :class="mode">
       <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
props:[ 'type', 'mode']

}

</script>


<style scoped>






section{ 
  display: flex;
  justify-content: center;
  width: 100%;
 min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
  margin-bottom: 4%;
}
div{
display: flex;
flex-direction: column;
max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.gallery__img{
  display: flex;
  justify-content: space-evenly;
  max-width: 1000px;
 
}
.contact__form{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
    max-width: 1000px;
    gap: 50px;
   
      font-family: 'Tiro Devanagari Sanskrit', serif;
  
}
</style>