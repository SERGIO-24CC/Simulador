import { defineStore } from "pinia";

interface Calificacion {
  id: number;
  nombre: string;
  calificacion: number;
  descripcion: string;
}

export const useCalificacionStore = defineStore({
  id: "calificaciones",
  state: () => ({
    calificaciones: [] as Calificacion[],
    calificacion: {} as Calificacion,
  }),
  persist: {
    storage: persistedState.localStorage,
  },
  getters: {
    getCalificaciones: (state) => state.calificaciones,
    getCalificacion: (state) => state.calificacion,
  },
  actions: {
    async fetchCalificaciones() {
      const calificaciones = await $fetch("/api/calificaciones");
      this.calificaciones = calificaciones;
    },
  },
});