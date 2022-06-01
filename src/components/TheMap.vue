<template>
  <GMapMap
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 49.823919486723064, lng: 19.035887348},
      markers: [
        {
          position: {
            lat: 49.823919486723064, lng: 19.035887348
          },
        }
        , // Along list of clusters
      ]
    }
  }
}
</script>
