<template>
  <div>
    <header class="bg-gray-300 h-full flex items-center justify-between p-4">
      <img src="../assets/logo.png" alt="logo" width="10%" />
      <Progress :value="step" :max="quizz.questions.length - 1" />
    </header>
    <div v-if="state == 'question'" class="flex question-container">
      <div
        class="left-0 h-full w-40 fixed flex flex-col justify-center ml-2 mt-2 rounded-7"
        :style="{ backgroundColor: 'rgba(238, 238, 238, 0.2)' }"
      >
        <div class="question pb-20">
          <h1 class="text-center pb-10 text-gray-300">
            Question {{ step + 1 }}
          </h1>
          <h2 class="text-center text-gray-300">{{ question.question }}</h2>
        </div>
      </div>
      <div class="right-0 h-full fixed w-60">
        <Question
          :question="question"
          v-if="state == 'question'"
          @answer="addAnswer"
        />
      </div>
    </div>
    <Recap v-if="state == 'recap'" :answers="answers" :quizz="quizz" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Progress from "./Progress-item.vue";
import Question from "./Question-item.vue";
import Recap from "./Recap-item.vue";

export default {
  components: { Progress, Question, Recap },
  props: {
    quizz: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = ref("question");
    const step = ref(0);
    const answers = ref(props.quizz.questions.map(() => null));

    const question = computed(() => props.quizz.questions[step.value]);

    function addAnswer(answer) {
      answers.value[step.value] = answer;
      if (step.value === props.quizz.questions.length - 1) {
        state.value = "recap";
      } else {
        step.value++;
      }
    }
    return {
      state,
      step,
      question,
      answers,
      addAnswer,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lalezar&display=swap");

h1 {
  font-family: "Lalezar", system-ui;
  font-weight: 400;
  font-style: normal;
}
</style>
