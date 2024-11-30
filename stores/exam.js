<script setup>
import { defineStore } from 'pinia'

export const useExamStore = defineStore('exam', {
  state: () => ({
    currentExam: null,
    examHistory: [],
    userProgress: {
      totalExams: 0,
      averageScore: 0
    }
  }),
  
  actions: {
    startNewExam() {
      this.currentExam = {
        startTime: new Date(),
        answers: {},
        completed: false
      }
    },
    
    submitAnswer(questionId, answer) {
      if (this.currentExam) {
        this.currentExam.answers[questionId] = answer
      }
    },
    
    finishExam(score) {
      if (this.currentExam) {
        this.currentExam.completed = true
        this.currentExam.endTime = new Date()
        this.currentExam.score = score
        
        this.examHistory.push({ ...this.currentExam })
        this.updateProgress()
      }
    },
    
    updateProgress() {
      this.userProgress.totalExams = this.examHistory.length
      this.userProgress.averageScore = this.examHistory.reduce((acc, exam) => 
        acc + exam.score, 0) / this.examHistory.length
    }
  }
})
</script>