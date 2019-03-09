<template>
  <div id="app">
    <h1>ミステリーラリー(仮)</h1>
    <select name="rally" v-model="selectedRally">
      <option v-for="rally in rallies" :key='rally.id' :id="rally.id" v-bind:value="rally">
        {{ rally.title }}
      </option>
    </select>

    <h3>{{ nowRally.title }}</h3>
    <div>{{ nowRally.description }}</div>

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

import axios from 'axios'

export default {
  name: 'app',
  data: () => {
    return {
      center: {lat: 35.654954, lng: 139.694856},
      zoom: 8,
      markers: [],
      rallies: [],
      selectedRally: null,
      nowRally: { title: "abc", description: "desc"}
    };
  },
  watch: {
    selectedRally: function() {
      if (!this.selectedRally)
        return;

      axios
        .get("http://localhost:3000/events/" + this.selectedRally.id)
        .then(response => {
          this.nowRally = response.data;
        })
    }
  },
  components: {
  },
  
  mounted() {
    axios
    .get("http://localhost:3000/events")
    .then(response => {
      console.log(response);
      this.rallies = response.data;
    })
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
