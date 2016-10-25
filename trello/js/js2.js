// OLVIDARRRRRR

var inputLista = document.getElementById("input-lista");
var renglon = document.getElementById("renglon");
var columna = renglon.firstChild;


inputLista.onclick = function (){

	var btnGuardarLista = document.createElement("button");
	btnGuardarLista.setAttribute("class", "btn btn-success btn-sm");
	btnGuardarLista.appendChild(document.createTextNode("Guardar Lista"));
	var tache = document.createElement("span");
	tache.setAttribute("class","fa fa-times mg-l-20");
	this.parentElement.appendChild(btnGuardarLista);
	this.parentElement.appendChild(tache);

	btnGuardarLista.onclick = function () {
		if (inputLista.value == null || inputLista.value == 0) {
			alert("Escribee un super título :)");
			return false;
		}
		var tituloLista = document.createElement("h2");
		tituloLista.innerHTML = inputLista.value;
		var divColTitulo = document.createElement("div");
		divColTitulo.setAttribute("class", "box-lista");
		divColTitulo.appendChild(tituloLista);
		divCol = document.createElement("div");
		divCol.setAttribute("class","col-xs-12 col-sm-3");
		var divBox = document.createElement("div");
		divBox.setAttribute("class", "box-tarjeta");
		inputTarjeta = document.createElement("textarea");
		inputTarjeta.setAttribute("placeholder", "Agregar super tarjeta");
		divCol.appendChild(divColTitulo);	
		divCol.appendChild(divBox);
		divBox.appendChild(inputTarjeta);
		btnGuardarTarjeta = document.createElement("button");
		btnGuardarTarjeta.setAttribute("class", "btn btn-success btn-sm");
		btnGuardarTarjeta.appendChild(document.createTextNode("Guardar Tarjeta"));
		renglon.insertBefore(divCol, columna);

		inputTarjeta.onclick = function () {
			divBox.appendChild(btnGuardarTarjeta);
			divBox.appendChild(tache);	
		}
			inputLista.value = "";
	


		btnGuardarTarjeta.onclick = function () {
			if (inputTarjeta.value == null || inputTarjeta.value == 0) {
				alert("¡¡¡Escribe una super tarea!!!");
				return false;
			}
			var check = document.createElement("input");
			check.setAttribute("type","checkbox");
			var basura = document.createElement("span");
			basura.setAttribute("class", "fa fa-trash-o");

			var tareaBox = document.createElement("div");
			tareaBox.setAttribute("class","box-tarjeta");
			var tarea = document.createElement("p");
			textoTarea = document.createTextNode(inputTarjeta.value);
			tarea.appendChild(check);
			tarea.appendChild(textoTarea);
			tarea.appendChild(basura);
			tareaBox.appendChild(tarea);
			divCol.insertBefore(tareaBox, (divCol.lastChild));

			basura.onclick = function () {
				tareaBox.parentElement.removeChild(tareaBox);
			};
			check.onclick = function () {
				if (check.checked == true) {
					tarea.parentElement.setAttribute("class","tachado");	
				} else {
					tarea.parentElement.setAttribute("class","box-tarjeta");
				}
			};
		};

	}

	
}; //fin de función clickLista



