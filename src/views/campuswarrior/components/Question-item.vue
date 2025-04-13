<template>
  <div
    class="flex flex-wrap relative items-center justify-center btn-container gap-10"
  >
    <button
      v-for="(choice, index) in question.choices"
      :key="choice"
      @click="$emit('answer', choice)"
      :id="`answer${index}`"
      name="answer"
      :value="choice"
      class="btn-question"
    >
      {{ choice }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFlipped: false,
      cardKey: 0,
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
  watch: {
    question(newQ, oldQ) {
      if (newQ !== oldQ) {
        this.isFlipped = false;
        this.cardKey += 1;
      }
    },
  },
  emits: ["answer"],
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lalezar&display=swap");

.btn-question {
  flex: 0 0 45%; /* Chaque bouton occupe environ la moitié de la largeur du conteneur moins l'espace entre les boutons */
  height: 200px;
  width: 200px; /* Limite la largeur maximale du bouton */
  font-size: 25px; /* Taille du texte dans les boutons */
  border: none;
  background-color: #eeeeee; /* Couleur de fond */
  cursor: pointer;
  border-radius: 10px; /* Coins arrondis */
  transition: background-color 0.3s; /* Transition pour l'effet au survol */
  font-family: "Lalezar", system-ui;
  font-weight: 400;
  font-style: normal;

  &:hover {
    background-color: #d3d3d3;
  }
}

.btn-container {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
