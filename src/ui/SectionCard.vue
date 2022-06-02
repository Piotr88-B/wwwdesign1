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
  min-height: 50vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
  margin-bottom: 4%;
 
}
div{
display: flex;
flex-direction: column;
max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.gallery__img{
  display: flex;
  justify-content: space-evenly;
  max-width: 600px;
  background-color: black;
}
</style>