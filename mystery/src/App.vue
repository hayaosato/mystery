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
        var self = this;
        // navigator.geolocation.getCurrentPosition(function(position){
        navigator.geolocation.getCurrentPosition(function(position){
          console.log(position);
          var currentLatitude2 = position.coords.latitude
          var currentLongitude2 = position.coords.longitude
          // this.currentLatitude = 35.654954
          // this.currentLongitude = 139.694856
          // this.currentLatitude = 35.654954
          // this.currentLongitude = 139.694856
          var currentLatitude = 35.655747
          var currentLongitude = 139.694856
          console.log(position);
          self.markers = [
            {position: {lat: currentLatitude, lng: currentLongitude}, title: 'glass_city'},
            {position: {lat: currentLatitude2, lng: currentLongitude2}, title: 'glass_city2'}
        ];
        });
      } else {
        alert("Geolocation is NOT available")
      }
    },
    data() {
      return {
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
