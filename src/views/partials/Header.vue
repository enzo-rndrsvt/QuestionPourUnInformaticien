<script>
import userStore from "@/stores/userStore";

export default {
  name: "NavHeader",
  data() {
    return {
      cartSize: 2,
    };
  },
  computed: {
    isLoggedIn() {
      return userStore.state.isLoggedIn;
    },
  },
  methods: {
    switchTheme() {
      userStore.commit("toggleTheme");
    },
  },
};
</script>
<template>
  <header class="navHeader">
    <router-link to="/">Accueil</router-link>
    <router-link :to="{ name: 'Home', hash: '#events' }"
      >Evenements</router-link
    >
    <router-link :to="'/calendar'">Agenda</router-link>
    <router-link to="/shop/">Boutique</router-link>
    <router-link v-if="cartSize > 0" id="cartButton" to="/pay/">
      Panier <i>{{ cartSize }}</i>
    </router-link>
    <button id="themeSwitcher" class="headerButton" @click="switchTheme()">
      Theme sombre
    </button>
    <router-link v-if="isLoggedIn" id="loginButton" to="/account/"
      >Mon compte</router-link
    >
    <router-link v-else id="loginButton" to="/login?returnUrl=/"
      >Connexion</router-link
    >
  </header>
  <div class="mt-19"></div>
  <router-view> </router-view>
</template>
