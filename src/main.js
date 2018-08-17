import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes';
import store from './store/store';
import App from './App.vue'
import './filters';

Vue.use(VueResource)

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})