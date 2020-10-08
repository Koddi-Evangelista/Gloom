import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/services",
    name: "Services",
    component: () =>
      import(/* webpackChunkName: "Services" */ "@/views/Services.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import(/* webpackChunkName: "Blog" */ "@/views/Blog.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "@/views/Contact.vue")
  },
  {
    path: "/behavior",
    name: "Behavior",
    component: () =>
      import(/* webpackChunkName: "Behavior" */ "@/views/Behavior.vue")
  },
  {
    path: "/social-anxiety",
    name: "SocialAnxiety",
    component: () =>
      import(
        /* webpackChunkName: "SocialAnxiety" */ "@/views/SocialAnxiety.vue"
      )
  },
  {
    path: "/depression",
    name: "Depression",
    component: () =>
      import(/* webpackChunkName: "Depression" */ "@/views/Depression.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { to: 0, from: 0 };
    }
  }
});

export default router;
