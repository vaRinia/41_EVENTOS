function AgregarTareas (tarea,check,basura) {
	this.tarea = tarea;
	this.check = check;
	this.basura = basura;	
	this.asignarValores = function () {
		basura.setAttribute("class", "fa fa-trash-o");	
		check.type = "checkbox";
		check.value = 1;
	}
	return check + tarea + basura;
}

new AgregarTareas(document.getElementById("toDoInput").value, document.createElement("input"); document.createElement("span"))