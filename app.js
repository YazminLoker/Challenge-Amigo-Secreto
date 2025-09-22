// Array que almacena los nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del input (ajustado al id de tu HTML)
  const inputNombre = document.getElementById("amigo");
  const nombre = inputNombre.value.trim();

  // Validar entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Limpiar el input
  inputNombre.value = "";

  // Actualizar la lista visible
  actualizarLista();
}

// Función para mostrar la lista de amigos
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el UL
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}
