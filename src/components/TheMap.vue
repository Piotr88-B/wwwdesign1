<template>
<GMapMap :center="center" :zoom="15" map-type-id="terrain" style="
      min-width: 300px; 
      height: 200px;
    ">
  <GMapCluster>
    <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
  </GMapCluster>
</GMapMap>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: {
        lat: 49.823919486723064,
        lng: 19.035887348
      },
      markers: [{
          position: {
            lat: 49.823919486723064,
            lng: 19.035887348
          },
        }, // Along list of clusters
      ]
    }
  }
}
</script>

<style scoped>
div {
  background-color: white;
}
</style>
