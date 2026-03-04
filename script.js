function agregarTarea() {
    const input = document.getElementById("tareaInput");
    const lista = document.getElementById("listaTareas");

    if (input.value.trim() !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = input.value;
        lista.appendChild(nuevaTarea);
        input.value = "";
    }
}