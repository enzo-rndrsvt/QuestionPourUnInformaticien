import { createWebHistory, createRouter } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    
        {
          path: "/",
          name: "CampusWarrior",
          component: () => import("./views/campuswarrior/ChoixQuestionnaire.vue"),
        },
        {
          path: "/campuswarrior",
          name: "CampusWarrior-Epreuve",
          component: () => import("./views/campuswarrior/CampusWarrior.vue"),
          props: (route) => ({ candidat: route.query.candidat }),
        },
      ],
});
