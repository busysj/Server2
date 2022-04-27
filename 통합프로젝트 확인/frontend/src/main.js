import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 비동기를 위한 모듈 axios 불러와서 사용
import axios from "axios";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
