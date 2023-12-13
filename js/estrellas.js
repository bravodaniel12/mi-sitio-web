
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");
    const barras = document.querySelectorAll(".barra");
    const porcentajes = document.querySelectorAll(".porcentaje");
    const graficarBtn = document.getElementById("graficarBtn");

    graficarBtn.addEventListener("click", function() {
        let totalVotos = 0;

        // Obtener el total de votos
        inputs.forEach((input) => {
            const votos = parseFloat(input.value) || 0;
            totalVotos += votos;
        });

        // Simulamos el llenado gradual de las barras al hacer clic en el botón
        barras.forEach((barra, index) => {
            const puntaje = parseFloat(inputs[index].value) || 0;

            // Calcular la proporción y establecer el ancho de la barra
            const proporcion = totalVotos > 0 ? (puntaje / totalVotos) * 100 : 0;
            const anchoBarra = proporcion + "%";

            // Actualizar la barra y el porcentaje
            barra.style.width = anchoBarra;
            porcentajes[index].textContent = proporcion.toFixed(2) + "%";
        });
    });
});


