

var discos = [
    {
      nombre: "The Dark Side of the Moon",
      autor: "Pink Floyd",
      codigo: 001,
      pistas: [
        { nombre: "Speak to Me", duracion: 90 },
        { nombre: "Breathe", duracion: 163 },
        { nombre: "On the Run", duracion: 216 },
        
      ]
    },
    {
      nombre: "Abbey Road",
      autor: "The Beatles",
      codigo: 002,
      pistas: [
        { nombre: "Come Together", duracion: 259 },
        { nombre: "Something", duracion: 182 },
        { nombre: "Here Comes the Sun", duracion: 185 },
        
      ]
    },
    {
      nombre: "Thriller",
      autor: "Michael Jackson",
      codigo: 003,
      pistas: [
        { nombre: "Wanna Be Startin' Somethin'", duracion: 386 },
        { nombre: "Beat It", duracion: 258 },
        { nombre: "Billie Jean", duracion: 293 },
        
      ]
    }
  ];

  var discos = [];

function cargarDatos() {
  var nombreBanda = prompt("Ingrese el nombre de la banda o autor:");
  var codigoDisco = parseInt(prompt("Ingrese el código numérico único del disco:"));
  var pistas = [];



  var cantidadPistas = parseInt(prompt("Ingrese la cantidad de pistas del disco:"));



  for (var i = 0; i < cantidadPistas; i++) {
    var nombrePista = prompt("Ingrese el nombre de la pista " + (i + 1) + ":");
    var duracionPista = parseInt(prompt("Ingrese la duración de la pista " + (i + 1) + ":"));



    if (!validarNombrePista(nombrePista) || !validarDuracionPista(duracionPista)) {
      mostrarError("Los datos ingresados no son válidos. Intente nuevamente.");
      return;
    }



    var pista = { nombre: nombrePista, duracion: duracionPista };
    pistas.push(pista);
  }



  if (!validarNombreBanda(nombreBanda) || !validarCodigoDisco(codigoDisco)) {
    mostrarError("Los datos ingresados no son válidos. Intente nuevamente.");
    return;

  }

  var disco = {
    nombre: nombreBanda,
    autor: nombreBanda,
    codigo: codigoDisco,
    pistas: pistas
  };

  discos.push(disco);

  mostrarDiscos();
}



/*var discos = [];

function cargarDatos() {
  var nombreBanda = prompt("Ingrese el nombre de la banda o autor del disco:");
  var codigoDisco = parseInt(prompt("Ingrese el código numérico único del disco (entre 1 y 999):"));


  while (isNaN(codigoDisco) || codigoDisco < 1 || codigoDisco > 999) {

    alert("El código del disco debe ser un número entre 1 y 999. Intente nuevamente.");
    codigoDisco = parseInt(prompt("Ingrese el código numérico único del disco (entre 1 y 999):"));
  }




  var pistas = [];
  var opcionPista = prompt("Desea agregar una pista al disco? (s/n)");


  while (opcionPista.toLowerCase() === "s") {
    var nombrePista = prompt("Ingrese el nombre de la pista:");
    var duracionPista = parseInt(prompt("Ingrese la duración de la pista en segundos (entre 0 y 7200):"));


    while (isNaN(duracionPista) || duracionPista < 0 || duracionPista > 7200) {
      alert("La duración de la pista debe ser un número entre 0 y 7200. Intente nuevamente.");
      duracionPista = parseInt(prompt("Ingrese la duración de la pista en segundos (entre 0 y 7200):"));
    }


    pistas.push({ nombre: nombrePista, duracion: duracionPista });

    opcionPista = prompt("Desea agregar otra pista al disco? (s/n)");
  }



  discos.push({ nombre: nombreBanda, autor: nombreBanda, codigo: codigoDisco, pistas: pistas });
  alert("Disco cargado correctamente.");
}



function mostrarDiscos() {
    var listadoDiscos = document.getElementById("listado-discos");
    listadoDiscos.innerHTML = "";
  
    discos.forEach(function(disco) {
      var li = document.createElement("li");
      var contenidoDisco = `<span style="font-weight:bold;">Nombre:</span> ${disco.nombre}<br>`;
      contenidoDisco += `<span style="font-weight:bold;">Autor:</span> ${disco.autor}<br>`;
      contenidoDisco += `<span style="font-weight:bold;">Código:</span> ${disco.codigo}<br>`;
      contenidoDisco += "<span style='font-weight:bold;'>Pistas:</span><br>";
  
      disco.pistas.forEach(function(pista) {
        var duracionPista = pista.duracion;
        if (duracionPista > 180) {
          contenidoDisco += `- <span class="duracion-destacada">${pista.nombre} (${duracionPista} segundos)</span><br>`;
        } else {
          contenidoDisco += `- ${pista.nombre} (${duracionPista} segundos)<br>`;
        }
      });
  
      li.innerHTML = contenidoDisco;
      listadoDiscos.appendChild(li);
    });
  } */
  
  var discos = [];

function cargarDatos() { 
  var nombreBanda = prompt("Ingrese el nombre de la banda o artista:");
  var autor = prompt("Ingrese el nombre del autor o banda del disco:");
  var codigo = parseInt(prompt("Ingrese el código numérico único del disco (entre 1 y 999):"));

  if (isNaN(codigo) || codigo < 1 || codigo > 999) {
    alert("El código numérico debe ser un número entre 1 y 999.");
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
  var listadoDiscos = document.getElementById("listado-discos");
  listadoDiscos.innerHTML = "";

  discos.forEach(function(disco) {
    var li = document.createElement("li");
    var contenidoDisco = `<span style="font-weight:bold;">Nombre de la banda:</span> ${disco.nombre}<br>`;
    contenidoDisco += `<span style="font-weight:bold;">Autor o banda del disco:</span> ${disco.autor}<br>`;
    contenidoDisco += `<span style="font-weight:bold;">Código numérico único:</span> ${disco.codigo}<br>`;
    contenidoDisco += "<span style='font-weight:bold;'>Pistas:</span><br>";

    disco.pistas.forEach(function(pista) {
      var duracionPista = pista.duracion;
      if (duracionPista > 180) {
        contenidoDisco += `- <span class="duracion-destacada">${pista.nombre} (${duracionPista} segundos)</span><br>`;
      } else {
        contenidoDisco += `- ${pista.nombre} (${duracionPista} segundos)<br>`;
      }
    });

    li.innerHTML = contenidoDisco;
    listadoDiscos.appendChild(li);
  });
}
