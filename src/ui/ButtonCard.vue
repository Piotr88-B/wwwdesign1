<template>
<button :type="type" :class="mode">
  <slot></slot>
</button>
</template>

<script>
export default {
  props: ['type', 'mode']
}
</script>

<style scoped>



button {
  border: none;
  height: 30px;
  width: 70px;
  font-size: 12px;
  font-weight: bold;
  background-color: #0A090D;
  cursor: pointer;
  color: #C5A783;
}


.flat {
  color: white;
  background-color: #0A090D;
  transition: 0.8s;
}

.flat:active,
.flat:hover {
    color: #C5A783;
   

}
</style>>
