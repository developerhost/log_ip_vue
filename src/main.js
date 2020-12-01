import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { firestorePlugin } from "vuefire";
import firebase from "firebase";
import "firebase/firestore";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css"; // added
import "bootstrap-vue/dist/bootstrap-vue.css"; // added

Vue.use(firestorePlugin);
firebase.initializeApp({
  apiKey: "AIzaSyB4XUwYpF74U_wXzSVeeluxH0z4hmAkq2Y",
  authDomain: "loggerip.firebaseapp.com",
  databaseURL: "https://loggerip.firebaseio.com",
  projectId: "loggerip",
  storageBucket: "loggerip.appspot.com",
  messagingSenderId: "497132283565",
  appId: "1:497132283565:web:a7149cf1ff15cd9f27c824",
});
export const db = firebase.firestore();
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
