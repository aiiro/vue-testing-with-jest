import Vue from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

Vue.component('hello-item', Hello);

new Vue({
  el: '#app',
  render: h => h(App)
})
