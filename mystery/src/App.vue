<template>
  <div id="app">
    <h1>ミステリーラリー(仮)</h1>
    <select name="rally" v-model="selectedRally">
      <option v-for="rally in rallies" :key='rally.id' :id="rally.id" v-bind:value="rally">
        {{ rally.title }}
      </option>
    </select>

    <h3>{{ selectedRally.title }}</h3>
    <div>{{ selectedRally.desc }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data: () => {
    return {
      rallies: [
        { id: 1, title: "神社巡り", desc: "神社を巡って運を高めよう！" },
        { id: 2, title: "高級和牛を目指せ!", desc: "ゴールに到達して割引クーポンを得よう！" }
      ],
      selectedRally: ""
    };
  },
  components: {
  },
  mounted() {
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
