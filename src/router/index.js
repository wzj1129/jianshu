import Vue from "vue";
import VueRouter from "vue-router";
import nav from "../views/Home/nav.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/nav",
    name: "nav",
    component: () => import("../views/Home/nav.vue")
  },
  {
    path: "/",
    name: "Layout",
    meta: { title: "底部导航栏" },
    component: nav,
    redirect: "home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/Home/home.vue")
      },

      {
        path: "/search",
        name: "search",
        component: () => import("../views/Search/search.vue")
      },
      {
        path: "/follow",
        name: "follow",
        component: () => import("../views/Follow/follow.vue")
      },
      {
        path: "/member",
        name: "member",
        component: () => import("../views/Member/member.vue")
      },
      {
        path: "/news",
        name: "news",
        component: () => import("../views/News/news.vue")
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/MY/my.vue")
      },
      {
        path: "/interested",
        name: "interested",
        component: () => import("../views/Follow/interested.vue")
      },
      {
        path: "/more",
        name: "more",
        component: () => import("../views/Home/more.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
