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
      },
      {
        path: "/establish",
        name: "establish",
        component: () => import("../views/Home/establish.vue")
      },
      {
        path: "/detailed",
        name: "detailed",
        component: () => import("../views/News/detailed.vue")
      },
      {
        path: "/packet",
        name: "packet",
        component: () => import("../views/MY/packet.vue")
      },
      {
        path: "/problem",
        name: "problem",
        component: () => import("../views/MY/problem.vue")
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import("../views/MY/setting.vue")
      },
      {
        path: "/chat",
        name: "chat",
        component: () => import("../views/News/chat.vue")
      },
      {
        path: "/special",
        name: "special",
        component: () => import("../views/MY/special.vue")
      },
      {
        path: "/newspecial",
        name: "newspecial",
        component: () => import("../views/MY/newspecial.vue")
      },
      {
        path: "/classification",
        name: "classification",
        component: () => import("../views/Home/classification.vue")
      },
      {
        path: "/novel",
        name: "novel",
        component: () => import("../views/Home/novel.vue")
      },
      {
        path: "/book",
        name: "book",
        component: () => import("../views/Home/book.vue")
      },
      {
        path: "/help",
        name: "help",
        component: () => import("../views/MY/help.vue")
      },
      {
        path: "/history",
        name: "history",
        component: () => import("../views/MY/history.vue")
      },
      {
        path: "/official",
        name: "official",
        component: () => import("../views/Home/official.vue")
      },
      {
        path: "/income",
        name: "income",
        component: () => import("../views/MY/income.vue")
      },
      {
        path: "/content",
        name: "content",
        component: () => import("../views/Home/content.vue")
      },
      {
        path: "/choice",
        name: "choice",
        component: () => import("../views/Follow/choice.vue")
      },
      {
        path: "/list",
        name: "list",
        component: () => import("../views/Member/list.vue")
      },
      {
        path: "/realization",
        name: "realization",
        component: () => import("../views/Member/realization.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
