import Vue from 'vue'
import App from './dev/App.vue'
import VueRouter from 'vue-router'

import router from './dev/router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  render: h => h(App),
  router
}).$mount('#app')

// Prevent layout jump while waiting for styles
vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
})