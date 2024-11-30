<template>
    <v-app>
      <!-- Barra de Navegación -->
      <v-app-bar app color="primary" dark>
        <v-toolbar-title>Simulador examenes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">Inicio</v-btn>
        <v-btn text to="/about">Acerca de</v-btn>
      </v-app-bar>
  
      <!-- Contenido Principal -->
      <v-main>
        <v-container fluid>
          <slot></slot> <!-- Aquí se insertará el contenido dinámico de cada página -->
        </v-container>
      </v-main>
      <div>
    <RouterLink to="/registro">registro</RouterLink>
    <RouterLink to="/Inicio">Inicio</RouterLink>
  </div>
      <!-- Pie de Página -->
      <v-footer app color="primary" dark>
        <v-col class="text-center white--text">
          {{ new Date().getFullYear() }} — Mi Aplicación
        </v-col>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    name: "AppLayout",
  };
  </script>
  
  <style scoped>
  .v-main {
    min-height: calc(100vh - 64px); /* Asegura que el contenido principal ocupe al menos la altura total, menos la barra de navegación */
  }
  </style>
  