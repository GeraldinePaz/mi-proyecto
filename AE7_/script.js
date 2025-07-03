document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;
  const descripcion = document.getElementById("descripcion").value;
  const fecha = document.getElementById("fecha").value;

  if (nombre && tipo && descripcion && fecha) {
    alert("¡Solicitud enviada con éxito!\nGracias por confiar en AutoFix.");
    this.reset();
  } else {
    alert("Por favor completa todos los campos obligatorios.");
  }
});