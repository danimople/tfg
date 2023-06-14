function generarContenedores() {
  const numContenedores = document.getElementById("numero").value;
  const contenedor = document.getElementById("contenedor");
  const imagenFija = document.getElementById("imagenFija");
  const nombreClase = document.getElementById("clase");

  contenedor.innerHTML = "";

  for (let i = 0; i < numContenedores; i++) {
    if (i % 12 === 0) {
      const fila = document.createElement("div");
      fila.classList.add("row");
      contenedor.appendChild(fila);
    }

    const col = document.createElement("div");
    col.classList.add("col-md-2");

    const formGroupFoto = document.createElement("div");
    formGroupFoto.classList.add("form-group");

    const labelFoto = document.createElement("label");

    const inputFoto = document.createElement("input");
    inputFoto.type = "file";
    inputFoto.accept = "image/*";
    inputFoto.classList.add("form-control-file");
    inputFoto.onchange = function(event) {
      mostrarImagen(event, imagen);
    };

    const imagen = document.createElement("img");
    imagen.id = "imagen" + i;
    imagen.style.maxWidth = "100%";
    imagen.style.marginTop = "20px";
    imagen.style.display = "none";

    formGroupFoto.appendChild(labelFoto);
    formGroupFoto.appendChild(inputFoto);
    formGroupFoto.appendChild(imagen);

    const formGroupNombre = document.createElement("div");
    formGroupNombre.classList.add("form-group");

    const labelNombre = document.createElement("label");

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.classList.add("form-control");

    formGroupNombre.appendChild(labelNombre);
    formGroupNombre.appendChild(inputNombre);

    col.appendChild(formGroupFoto);
    col.appendChild(formGroupNombre);

    const filaActual = contenedor.lastChild;
    if (!filaActual || filaActual.children.length === 12) {
      const filaNueva = document.createElement("div");
      filaNueva.classList.add("row");
      contenedor.appendChild(filaNueva);
    }
    contenedor.lastChild.appendChild(col);
  }

  contenedor.insertBefore(imagenFija.cloneNode(true), contenedor.firstChild);
  contenedor.insertBefore(nombreClase.cloneNode(true), contenedor.firstChild);

}

function mostrarImagen(event, imagen) {
  const archivo = event.target.files[0];
  imagen.src = URL.createObjectURL(archivo);
  imagen.style.display = "flex";
}
