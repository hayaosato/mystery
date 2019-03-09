<template>
  <div class="app">
    <div id="map">
      <GmapMap :center="{lat:35.654954, lng:139.694856}"
        :zoom="17"
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
    mounted() {
      if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(function(position){
        navigator.geolocation.getCurrentPosition(function(position){
          this.currentLatitude2 = position.latitude
          this.currentLongitude2 = position.longitde
          // this.currentLatitude = 35.654954
          // this.currentLongitude = 139.694856
        });
        // this.currentLatitude = 35.654954
        // this.currentLongitude = 139.694856
        this.currentLatitude = 35.655747
        this.currentLongitude = 139.694856
        this.markers = [
          {position: {lat: this.currentLatitude, lng: this.currentLongitude}, title: 'glass_city'},
          {position: {lat: this.currentLatitude2, lng: this.currentLongitude2}, title: 'glass_city2'}
        ]
      } else {
        alert("Geolocation is NOT available")
      }
    },
    data() {
      return {
        currentLatitude: 0,
        currentLongitude: 0,
        currentLatitude2: 0,
        currentLongitude2: 0,
        // center: {lat: currentLatitude, lng: currentLongitude},
        center: {lat: 35.654954, lng: 139.694856},
        zoom: 8,
        markers: []
      };
    }
  };
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
