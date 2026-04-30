function abrirCarta() {
    document.getElementById("carta").classList.toggle("abierta");
}

function responder(e, opcion) {
    e.stopPropagation();

    let texto = document.getElementById("respuesta");

    if (opcion === "si") {
        texto.innerHTML = "💖 Gracias por quedarte conmigo… prometo hacerte feliz";
    } else {
        texto.innerHTML = "😢 dame otra oportunidad...";
    }
}

// botón NO se escapa 😈
const botonNo = document.querySelector(".no");

botonNo.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    botonNo.style.transform = `translate(${x}px, ${y}px)`;
});