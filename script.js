
const formTarea = document.getElementById("formTarea");
const inputTarea = document.getElementById("inputTarea");
const listaTareas = document.getElementById("listaTareas");

// Contadores de tareas
let totalTareas = 0;
let tareasCompletadas = 0;

// Crear una nueva tarea
formTarea.addEventListener("submit", function (event) {
    event.preventDefault();

    const texto = inputTarea.value.trim();

    if (texto === "") {
        alert("Escribe una tarea antes de agregarla.");
        return;
    }

    const tarea = document.createElement("li");
    const nombre = document.createElement("span");

    nombre.textContent = texto;

    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    // Marcar tarea como completada
    botonCompletar.addEventListener("click", function () {
        const completada = tarea.classList.toggle("completada");

        if (completada) {
            botonCompletar.textContent = "Pendiente";
            tareasCompletadas++;
        } else {
            botonCompletar.textContent = "Completar";
            tareasCompletadas--;
        }

        actualizarContadores();
    });

    // Eliminar tarea
    botonEliminar.addEventListener("click", function () {
        if (tarea.classList.contains("completada")) {
            tareasCompletadas--;
        }

        totalTareas--;
        tarea.remove();
        actualizarContadores();
    });

    tarea.appendChild(nombre);
    tarea.appendChild(botonCompletar);
    tarea.appendChild(botonEliminar);

    listaTareas.appendChild(tarea);

    totalTareas++;
    inputTarea.value = "";

    actualizarContadores();
});

// Mostrar estadísticas
function actualizarContadores() {
    const total = document.getElementById("totalTareas");
    const completadas = document.getElementById("tareasCompletadas");
    const pendientes = document.getElementById("tareasPendientes");

    if (total) total.textContent = totalTareas;
    if (completadas) completadas.textContent = tareasCompletadas;
    if (pendientes) pendientes.textContent = totalTareas - tareasCompletadas;
}
