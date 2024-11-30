<template> 
    <h1>Principal</h1>
    <Calificaciones />    
</template>

<script setup>
  // Instanciar el store
  const calificacionStore = useCalificacionStore()
  
  await useAsyncData('calificaciones', async () => {
    await calificacionStore.fetchCalificaciones()    
  })
</script>
