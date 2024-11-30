<template>
    <div>
        <h1>Calificaciones</h1>
        <div v-if="getCalificaciones.length">
            <ul>
                <li v-for="calificacion in getCalificaciones" :key="calificacion.id">
                    <h2>{{ calificacion.nombre }}</h2>
                    <p>{{ calificacion.descripcion }}</p>
                    <strong>{{ calificacion.calificacion }} puntos</strong>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script setup>
    // Instanciar el store
    const calificacionStore = useCalificacionStore()
  
    // Obtener las calificaciones
    const { getCalificaciones } = calificacionStore;

</script>
