<template>
  <div class="app">
    <div id="map">
      <GmapMap :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 300px;"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />
        </GmapMap>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        center: {lat: 10, lng: 10},
        zoom: 14,
        marker_items: [
          {position: {lat: 10, lng: 10}, title: 'marker_1'}
        ]
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
