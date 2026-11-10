const estudiantes =[
    {id: 1, nombre: 'Ana', edad: 20},
    {id: 2, nombre: 'Juan', edad: 22 },
    {id: 3, nombre: 'María', edad: 21},
];
function buscarestudiantes(id) {
    return new promise((resolve, reject) =>
    setTimeout(() => {
        estudiantes.find((e)=> e.id === id)
            if (estudiante) resolve (estudiante)
            else reject(new error("este estudiante no existe"))
    }, 1000);
    )
}