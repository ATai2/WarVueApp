// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/css/app.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'
import router from './router'

// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue);
Vue.use(MintUI)
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
