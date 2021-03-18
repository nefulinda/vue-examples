import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/Example02.vue")
  },
  {
    props:true,
    path: "/example03",
    component: () => import("@/views/example03/Example03.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
