function agregarTareas() {
	var check = document.createElement("input");
		check.setAttribute("type","checkbox");
		check.setAttribute("value",1);
	var tarea = document.getElementById("toDoInput").value;
	if (tarea == null || tarea == "" ) {
		alert("¡¡No has escrito nada mi chavo!!")
		return false;
	};
	var texto = document.createTextNode(" " + tarea + " ");
	var nuevaTarea = document.createElement("li");
	nuevaTarea.setAttribute("class","list-group-item mg-b-1 bg-verdecito");
	nuevaTarea.appendChild(check);
	nuevaTarea.appendChild(texto);
	var basura = document.createElement("span");
	basura.setAttribute("class", "fa fa-trash-o pull-right");
	nuevaTarea.appendChild(basura);
	document.getElementById("toDoList").appendChild(nuevaTarea);
	
	document.getElementById("toDoInput").value = "";
	
	basura.onclick = function () {
	nuevaTarea.parentElement.removeChild(nuevaTarea);
	};

	check.onclick = function () {
		if (check.checked == true) {
			texto.parentElement.setAttribute("class","tachado");	
		} else {
			texto.parentElement.setAttribute("class","list-group-item mg-b-1 bg-verdecito");
		}
	};

};