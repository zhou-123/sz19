import Vue from 'vue'
import App from './App.vue'
//引入css
import './assets/statics/site/css/style.css';
// 引入路由模块
Vue.config.productionTip = false

new Vue({
  // 选择器
  el:"#app",
  // 挂载到vue
  
  // 渲染 App组件
  render: h => h(App)
})
