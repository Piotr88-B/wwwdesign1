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
  background-color: #666666;
  cursor: pointer;
}


.flat {
  color: white;
  background-color: #666666;
  transition: 0.8s;
}

.flat:active,
.flat:hover {
    color: black;
   

}
</style>>
