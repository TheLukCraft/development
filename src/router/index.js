import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExperimentalView from "@/views/ExperimentalView.vue";
import PavingBlocksAndTerranceSlabsView from "@/views/PavingBlocksAndTerranceSlabsView.vue";
import ArticlesView from "../views/ArticlesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/o-nas",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/eksperyment",
    name: "Experimental Components",
    component: ExperimentalView,
  },
  {
    path: "/kostki-brukowe-i-plyty-tarasowe",
    name: "Paving Blocks and Terrance Slabs",
    component: PavingBlocksAndTerranceSlabsView,
  },
  {
    path: "/blog",
    name: "Articles",
    component: ArticlesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
