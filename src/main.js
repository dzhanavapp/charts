import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.errorHandler = (err) => {
  if (process.env.NODE_ENV !== 'production') {
    // Show any error but this one
    // Проблема в компоненте Select
    if (err.message !== "Cannot read property 'badInput' of undefined") {
      console.error(err);
    }
  }
};

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
