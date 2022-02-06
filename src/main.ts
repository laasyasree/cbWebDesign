import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap-vue';
/* eslint no-trailing-spaces: ["error", { "skipBlankLines": true }] */

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
