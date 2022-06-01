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
  width: 100px;
  font-size: 12px;
  font-weight: bold;
  background-color: white;
}


.flat {
  color: white;
  background-color: #1B1B35;
}

.flat:active,
.flat:hover {
    color: white;
  background-color: #1B1B35;
}
</style>>
