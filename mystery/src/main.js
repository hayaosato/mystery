import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
