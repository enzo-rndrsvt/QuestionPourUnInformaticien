<template>
  <div class="background">
    <div class="loading-error">
      <div v-if="state === 'error'">
        <p>Impossible de charger le questionnaire</p>
      </div>
      <div :aria-busy="state === 'loading'">
        <Quizz :quizz="quizz" v-if="quizz" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Quizz from "./components/Quizz-item.vue";

export default {
  components: { Quizz },
  props: ["candidat"],
  data() {
    return { quizz: ref(null), state: ref("loading") };
  },
  mounted() {
    fetch("/candidat-" + this.candidat + ".json")
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Impossible de récuperer le json");
      })
      .then((data) => {
        this.quizz = data;
        this.state = "idle";
      })
      .catch((e) => {
        this.state = "error";
        console.log(e);
      });
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.background {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
}
</style>
