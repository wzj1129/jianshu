import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home/home.vue")
  },

  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search/search.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
