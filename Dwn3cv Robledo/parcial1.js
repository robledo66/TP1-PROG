

var discos = [
    {
      nombre: "The Dark Side of the Moon",
      autor: "Pink Floyd",
      codigo: "001",
      pistas: [
        { nombre: "Speak to Me", duracion: 90 },
        { nombre: "Breathe", duracion: 163 },
        { nombre: "On the Run", duracion: 216 },
        
      ]
    },
    {
      nombre: "Abbey Road",
      autor: "The Beatles",
      codigo: "002",
      pistas: [
        { nombre: "Come Together", duracion: 259 },
        { nombre: "Something", duracion: 182 },
        { nombre: "Here Comes the Sun", duracion: 185 },
        
      ]
    },
    {
      nombre: "Thriller",
      autor: "Michael Jackson",
      codigo: "003",
      pistas: [
        { nombre: "Wanna Be Startin' Somethin'", duracion: 386 },
        { nombre: "Beat It", duracion: 258 },
        { nombre: "Billie Jean", duracion: 293 },
        
      ]
    }
  ];

  var discos = [];

function cargarDatos() {
  var nombreBanda = prompt("Ingrese el nombre de la banda o artista:");
  var autor = prompt("Ingrese el nombre del autor o banda del disco:");
  var codigo = parseInt(prompt("Ingrese el código numérico único del disco (entre 1 y 999):"));

  if (!nombreBanda.trim()) {
    alert("El nombre de la banda no puede quedar vacío.");
    return;
  }

  if (!autor.trim()) {
    alert("El nombre del autor o banda del disco no puede quedar vacío.");
    return;
  }

  if (isNaN(codigo) || codigo < 1 || codigo > 999) {
    alert("El código numérico debe ser un número entre 1 y 999.");
    return;
  }

  var discoExistente = discos.find(function(disco) {
    return disco.codigo === codigo;
  });

  if (discoExistente) {
    alert("Ya existe un disco con el mismo código numérico.");
    return;
  }

  
    var pistas = [];
    var cargarMasPistas = true;
  
    while (cargarMasPistas) {
      var nombrePista = prompt("Ingrese el nombre de la pista:");
      var duracionPista = parseInt(prompt("Ingrese la duración de la pista en segundos:"));
  
      if (nombrePista.trim() === "") {
        alert("El nombre de la pista no puede quedar vacío.");
        continue;
      }
  
      if (isNaN(duracionPista) || duracionPista < 0 || duracionPista > 7200) {
        alert("La duración de la pista debe ser un número entre 0 y 7200 segundos.");
        continue;
      }
  
      pistas.push({ nombre: nombrePista, duracion: duracionPista });
  
      var confirmacion = confirm("¿Desea cargar otra pista?");
      cargarMasPistas = confirmacion;
    }
  
    discos.push({ nombre: nombreBanda, autor: autor, codigo: codigo, pistas: pistas });
  
    alert("Los datos del disco se han cargado exitosamente.");
  }
  
  function mostrarDiscos() {
    if (discos.length === 0) {
      console.log("No hay discos cargados.");
      return;
    }
  
    var contador = 0;
    var listaDiscos = document.getElementById("lista-discos");
    listaDiscos.innerHTML = "";
  
    discos.forEach(function(disco) {
      contador++;
      var duracionTotal = 0;
      var duracionMayor = 0;
      var pistaMayorDuracion = '';
  
      var item = document.createElement("li");
      var contenidoDisco = `
      <strong>${disco.nombre} - ${disco.autor}:</strong><br>
        - Cantidad de pistas: ${disco.pistas.length}<br>
        - Pistas:<br>
        <ul>
      `;
  
      disco.pistas.forEach(function(pista) {
        duracionTotal += pista.duracion;
  
        if (pista.duracion > duracionMayor) {
          duracionMayor = pista.duracion;
          pistaMayorDuracion = pista.nombre;
        }
  
        var estiloDuracion = pista.duracion > 180 ? "color: red;" : "";
        contenidoDisco += `<li style="${estiloDuracion}">${pista.nombre} (${pista.duracion} segundos)</li>`;
      });
  
      contenidoDisco += `
        </ul>
        - Duración total: ${duracionTotal} segundos<br>
        - Promedio de duración: ${duracionTotal / disco.pistas.length} segundos<br>
        - Pista con mayor duración: ${pistaMayorDuracion} (${duracionMayor} segundos)
      `;
  
      item.innerHTML = contenidoDisco;
      listaDiscos.appendChild(item);
    });
  }
  
  
  