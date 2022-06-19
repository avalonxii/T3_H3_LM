function loadAlumnos() {
	const options = {
	  method: "GET",
	};
	
	fetch("alumnos.json", options)
  		.then(response => response.text())
  		.then(data => llenarTabla(data));
}


function llenarTabla(data){
    var obj = JSON.parse(data);
    var media=0;
    var texto;

                //crear tabla
    // Obtener la referencia del elemento table
    var tabla   = document.getElementById("tabla");
    tabla.innerHTML="";


    // Crea un elemento <head>
    var tblHead = document.createElement("thead");
    var tr = document.createElement("tr");


    for(var key in obj[0]){

        if(!(key == "calificaciones")){

            var th = document.createElement("th");
            var node = document.createTextNode(key);
            
            th.appendChild(node);
            tr.appendChild(th);

        }else{

            for (var key in obj[0].calificaciones){
      
                var th = document.createElement("th");
                var node = document.createTextNode(key);
                th.appendChild(node);
                tr.appendChild(th);
          
            } 
            
            //añadir columna media
            var th = document.createElement("th");
            var node = document.createTextNode("Media");
            th.appendChild(node);
            tr.appendChild(th);

        }    
    }
    tblHead.appendChild(tr);
   

    // Crea un elemento <tbody>
    var tblBody = document.createElement("tbody");
    // Crea las celdas
      for (var i of obj){

        // Crea las columnas de la tabla
        var col = document.createElement("tr");
        for (var key in i) {

            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla

            if(!(key == "calificaciones")){
 
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(i[key]); 
                
                celda.appendChild(textoCelda);
                col.appendChild(celda);

            }else{

                for (var asig in i[key]){

                    var celda = document.createElement("td");

                    media+= i[key][asig];
                    texto = notatexto(i[key][asig]);

                    var textoCelda = document.createTextNode(i[key][asig] + texto);

                    
                    

                    celda.appendChild(textoCelda);
                    col.appendChild(celda);
                }

                media/=6;
                media=Math.trunc(media);
                texto = notatexto(media);

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(media+texto);
                celda.appendChild(textoCelda);
                col.appendChild(celda);
            }
        }

      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(col);
    }
  
    //  // appends <tblBody> into <table>
    tabla.appendChild(tblHead);
    tabla.appendChild(tblBody);
}

function notatexto(nota){

    if(nota <= 3){
        return " - Muy deficiente";

    }else if(nota > 3 && nota < 5){
        return " - Insuficiente";

    }else if(nota >= 5 && nota < 6){
        return " - Suficiente";

    }else if(nota >=6  && nota < 7){
        return " - Bien";

    }else if(nota >=7  && nota < 9){
        return " - Notable";

    }else if(nota >=9  && nota <= 10){
        return " - Sobresaliente";
    
    }  
}