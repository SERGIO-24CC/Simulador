<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="mb-4">
            <v-card-title class="text-h5 bg-primary text-white pa-4">
              Simulador de Examen de Matemáticas
              <v-spacer></v-spacer>
              <v-chip class="ml-2">
                Tiempo: {{ formatTime(timeRemaining) }}
              </v-chip>
            </v-card-title>
            <v-card-text>
              <v-progress-linear
                :model-value="progress"
                color="primary"
                height="10"
                class="mb-4"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
  
          <div v-if="!examFinished">
            <QuestionCard
              v-for="(question, index) in questions"
              :key="question.id"
              :question="question"
              :question-number="index + 1"
              @answer="handleAnswer"
            />
            
            <v-btn
              color="primary"
              block
              size="large"
              @click="finishExam"
              :disabled="!allQuestionsAnswered"
            >
              Finalizar Examen
            </v-btn>
          </div>
  
          <v-card v-else class="results-card pa-4">
            <v-card-title class="text-h5 text-center">
              Resultados del Examen
            </v-card-title>
            <v-card-text>
              <div class="text-h3 text-center mb-4">
                Puntuación: {{ score }}/{{ questions.length }}
              </div>
              <v-list>
                <v-list-item
                  v-for="(question, index) in questions"
                  :key="question.id"
                  :class="{'bg-success-lighten-4': isCorrect(index)}"
                >
                  <template v-slot:prepend>
                    <v-icon :color="isCorrect(index) ? 'success' : 'error'">
                      {{ isCorrect(index) ? 'mdi-check-circle' : 'mdi-close-circle' }}
                    </v-icon>
                  </template>
                  <v-list-item-title>
                    Pregunta {{ index + 1 }}: {{ question.text }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="restartExam">
                Intentar Nuevo Examen
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  
  // Banco de preguntas de ejemplo
  const questionBank = [
    {
      id: 1,
      text: '¿Cuánto es 7 × 8?',
      options: ['54', '56', '64', '72'],
      correctAnswer: 1
    },
    {
      id: 2,
      text: 'Si x + 5 = 12, ¿cuál es el valor de x?',
      options: ['5', '7', '8', '17'],
      correctAnswer: 1
    },
    {
      id: 3,
      text: '¿Cuál es el área de un rectángulo de 6m × 4m?',
      options: ['10m²', '18m²', '24m²', '28m²'],
      correctAnswer: 2
    }
  ]
  
  const questions = ref(questionBank)
  const answers = ref({})
  const examFinished = ref(false)
  const timeRemaining = ref(30 * 60) // 30 minutos en segundos
  const timer = ref(null)
  
  const progress = computed(() => {
    return (Object.keys(answers.value).length / questions.value.length) * 100
  })
  
  const allQuestionsAnswered = computed(() => {
    return Object.keys(answers.value).length === questions.value.length
  })
  
  const score = computed(() => {
    return questions.value.reduce((acc, question, index) => {
      return acc + (isCorrect(index) ? 1 : 0)
    }, 0)
  })
  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }
  
  const handleAnswer = ({ questionId, selectedAnswer }) => {
    answers.value[questionId] = selectedAnswer
  }
  
  const isCorrect = (index) => {
    const question = questions.value[index]
    return answers.value[question.id] === question.correctAnswer
  }
  
  const finishExam = () => {
    examFinished.value = true
    if (timer.value) {
      clearInterval(timer.value)
    }
  }
  
  const restartExam = () => {
    answers.value = {}
    examFinished.value = false
    timeRemaining.value = 30 * 60
    startTimer()
  }
  
  const startTimer = () => {
    timer.value = setInterval(() => {
      if (timeRemaining.value > 0) {
        timeRemaining.value--
      } else {
        finishExam()
      }
    }, 1000)
  }
  
  onMounted(() => {
    startTimer()
  })
  
  onUnmounted(() => {
    if (timer.value) {
      clearInterval(timer.value)
    }
  })
  </script>
  
  <style scoped>
  .question-text {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  .results-card {
    animation: fadeIn 0.5s ease-in;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>