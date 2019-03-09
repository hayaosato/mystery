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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data: () => {
    return {
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
