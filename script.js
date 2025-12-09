// Limpia caracteres no deseados
function cleanInputString(str) {
    return str.replace(/[^a-zA-Z0-9 áéíóúÁÉÍÓÚ]/g, "");
}

const form = document.getElementById("form-gasto");
const tablaBody = document.querySelector("tbody");
const balanceTexto = document.getElementById("balance");

let registros = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let descripcion = cleanInputString(document.getElementById("descripcion").value);
    let monto = parseFloat(document.getElementById("monto").value);
    let categoria = document.getElementById("categoria").value;
    let urgente = document.getElementById("urgente").checked ? "Sí" : "No";

    // Validaciones
    if (descripcion === "" || isNaN(monto)) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Crear registro
    let registro = { descripcion, monto, categoria, urgente };
    registros.push(registro);

    actualizarTabla();
    calcularBalance();

    form.reset();
});

// ---------------------- ACTUALIZAR TABLA ----------------------
function actualizarTabla() {
    tablaBody.innerHTML = "";

    registros.forEach((reg, index) => {
        let fila = `
            <tr>
                <td>${reg.descripcion}</td>
                <td>$${reg.monto}</td>
                <td>${reg.categoria}</td>
                <td>${reg.urgente}</td>
                <td>
                    <button onclick="eliminar(${index})">Eliminar</button>
                </td>
            </tr>
        `;
        tablaBody.innerHTML += fila;
    });
}

// ---------------------- ELIMINAR REGISTRO ----------------------
function eliminar(index) {
    registros.splice(index, 1);
    actualizarTabla();
    calcularBalance();
}

// ---------------------- CALCULAR BALANCE ----------------------
function calcularBalance() {
    let total = 0;

    registros.forEach(r => {
        if (r.categoria === "ingreso") {
            total += r.monto;
        } else {
            total -= r.monto;
        }
    });

    balanceTexto.textContent = "Balance actual: $" + total;

    if (total >= 0) balanceTexto.style.color = "green";
    else balanceTexto.style.color = "red";
}

// ---------------------- LIMPIAR FORMULARIO ----------------------
document.getElementById("btn-limpiar").addEventListener("click", () => {
    form.reset();
});
