import Vue from 'vue'
import App from './App.vue'
import router from './router'

//User BoBootstrapVue and icons
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
