// Obtener los elementos del HTML
const formulario = document.getElementById("formTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");

// Función para agregar una nueva tarea
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const textoTarea = inputTarea.value.trim();

    // Validar que la tarea no esté vacía
    if (textoTarea === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    // Crear el elemento de la tarea
    const nuevaTarea = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = textoTarea;

    // Botón para completar la tarea
    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";

    botonCompletar.addEventListener("click", function() {
        nuevaTarea.classList.toggle("completada");

        if (nuevaTarea.classList.contains("completada")) {
            botonCompletar.textContent = "Pendiente";
        } else {
            botonCompletar.textContent = "Completar";
        }
    });

    // Botón para eliminar la tarea
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function() {
        nuevaTarea.remove();
    });

    // Agregar los elementos a la tarea
    nuevaTarea.appendChild(texto);
    nuevaTarea.appendChild(botonCompletar);
    nuevaTarea.appendChild(botonEliminar);

    // Agregar la tarea a la lista
    listaTareas.appendChild(nuevaTarea);

    // Limpiar el campo de texto
    inputTarea.value = "";
});