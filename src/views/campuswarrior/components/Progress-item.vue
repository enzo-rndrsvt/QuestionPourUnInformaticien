<template>
  <div class="flex flex-col items-start pr-10">
    <div class="mb-3">
      <p>Question {{ value + 1 }}</p>
    </div>
    <progress :value="value" :max="max" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
progress {
  width: 100%;
  height: 10px;
  border: none;
  border-radius: 10px;
  background-color: #e0e0e0; /* Couleur de fond de la barre */
  overflow: hidden; /* Pour arrondir les bords de l'élément */
}

::-webkit-progress-bar {
  background-color: #e0e0e0; /* Couleur de fond de la barre */
  border-radius: 10px; /* Pour arrondir les bords */
}

::-webkit-progress-value {
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  border-radius: 10px; /* Pour arrondir la valeur de progression */
  transition: width 0.3s; /* Animation pour un effet fluide */
}
</style>
