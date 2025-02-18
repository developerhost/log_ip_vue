import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/management",
    name: "Management",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Management.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Google Analyticsのページビュー記録を追加
router.afterEach((to) => {
  if (window.gtag) {
    window.gtag("config", process.env.VUE_APP_GA_MEASUREMENT_ID, {
      page_path: to.fullPath,
    });
  }
});

export default router;
