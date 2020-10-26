import Vue from 'vue'
import VueRouter from 'vue-router';
import SearchComponent from '../components/recherchePersonne.vue'
import LoginComponent from '../components/LoginRegister.vue'
import UserComponent from '../components/User.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
          path: '/',
          redirect: {
              name: "login"
          }
      },
      {
          path: "/login",
          name: "login",
          component: LoginComponent
      },
      {
        path: "/search",
        name: "search",
        component: SearchComponent
      },
      {
        path: "/user/:idUser",
        name: "user",
        component: UserComponent
      }
    ]
});