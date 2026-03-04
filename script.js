function agregarTarea() {
    const input = document.getElementById("tareaInput");
    const lista = document.getElementById("listaTareas");

    if (input.value.trim() !== "") {

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.textContent = input.value;

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                span.classList.add("completada");
            } else {
                span.classList.remove("completada");
            }
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        lista.appendChild(li);

        input.value = "";
    }
}
