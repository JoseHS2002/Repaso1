const mostrarCuriosidadesButton = document.getElementById("mostrarCuriosidades");
const cerrarDialogoButton = document.getElementById("cerrarDialogo");
const dialogoCuriosidades = document.getElementById("dialogoCuriosidades");

mostrarCuriosidadesButton.addEventListener("click", () => {
    dialogoCuriosidades.showModal(); // Mostrar el diálogo
});

cerrarDialogoButton.addEventListener("click", () => {
    dialogoCuriosidades.close(); // Cerrar el diálogo
});