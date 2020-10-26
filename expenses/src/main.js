import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify';

import VueGeolocation from 'vue-browser-geolocation';

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.use(VueGeolocation);
Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyDQtfP3hdGPz588Tsx9ZgLluNkV2MrfjXU'
  },
  installComponents: false
});


new Vue({
  router,
  VueGeolocation,
  vuetify,
  render: h => h(App)
}).$mount('#app')

