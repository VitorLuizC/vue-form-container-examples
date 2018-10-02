import Vue from 'vue'
import App from './App.vue'
import FormContainer from 'vue-form-container'

Vue.use(FormContainer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
