export default defineEventHandler(async (event) => {
    const calificaciones = [
        {
            id: 1,
            nombre: 'Matemáticas',
            calificacion: 85,
            descripcion: 'Calificación obtenida en el examen final de Matemáticas.'
        },
        {
            id: 2,
            nombre: 'Ciencias',
            calificacion: 90,
            descripcion: 'Calificación obtenida en el proyecto de Ciencias.'
        },
        {
            id: 3,
            nombre: 'Historia',
            calificacion: 78,
            descripcion: 'Calificación obtenida en el examen de Historia.'
        },
        {
            id: 4,
            nombre: 'Lenguaje',
            calificacion: 88,
            descripcion: 'Calificación obtenida en el ensayo de Lenguaje.'
        }
    ];

    return calificaciones;
});
