<template>
    <v-card class="mb-4 pa-4">
      <v-card-title class="text-h6">
        Pregunta {{ questionNumber }}
      </v-card-title>
      <v-card-text>
        <div class="question-text mb-4">{{ question.text }}</div>
        <v-radio-group v-model="selectedAnswer" @change="handleAnswer">
          <v-radio
            v-for="(option, index) in question.options"
            :key="index"
            :label="option"
            :value="index"
            color="primary"
          ></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    question: {
      type: Object,
      required: true
    },
    questionNumber: {
      type: Number,
      required: true
    }
  })
  
  const emit = defineEmits(['answer'])
  
  const selectedAnswer = ref(null)
  
  const handleAnswer = () => {
    emit('answer', {
      questionId: props.question.id,
      selectedAnswer: selectedAnswer.value
    })
  }
  </script>