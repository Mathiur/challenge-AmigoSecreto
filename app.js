let amigos = [];

// Función para agregar un amigo
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value.trim();

    // Validación: campo vacío
    if (amigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validación: evitar duplicados
    if (amigos.includes(amigo)){
        alert("Ese nombre ya fue agregado.");
        limpiarCaja();
        return;
    }

    // Agregar al array
    amigos.push(amigo);

    // Mostrar lista actualizada
    mostrarLista();

    // Limpiar input
    limpiarCaja();
}

// Función para limpiar la caja de texto
function limpiarCaja(){
    document.querySelector('#amigo').value = "";
}

// Mostrar la lista de amigos en pantalla
function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia antes de volver a dibujar

    amigos.forEach(function(nombre){
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo(){
    // Validar que haya amigos
    if (amigos.length === 0){
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
