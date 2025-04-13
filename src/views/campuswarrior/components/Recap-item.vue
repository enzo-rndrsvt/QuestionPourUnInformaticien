<template>
  <div class="text-center pt-20">
    <h1 class="text-white">Bravo vous avez fini l'épreuve !</h1>
    <h2 class="text-white pt-10">
      Score final : {{ score }}/{{ quizz.questions.length }}
    </h2>
    <div class="pt-10">
      <h2 class="text-white" v-if="score == quizz.questions.length">
        Vous avez fini l'épreuve avec un score parfait ! <br />
        Vous ne recevrez aucun malus.
      </h2>
      <h2 class="text-white" v-else>
        Malus de temps :
        {{ quizz.questions.length - score }} secondes
      </h2>
    </div>
  </div>
  <p v-show="false" class="text-white">{{ answers[1] }}</p>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    answers: {
      type: Array,
      required: true,
    },
    quizz: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const score = computed(() => {
      return props.quizz.questions.reduce((acc, question, k) => {
        if (question.correct_answer === props.answers[k]) {
          return acc + 1;
        }
        return acc;
      }, 0);
    });
    return {
      score,
    };
  },
};
</script>
