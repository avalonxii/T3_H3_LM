<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="js/consumir.js"></script>
    <script src="js/filtro.js"></script>
    <title>Document</title>
</head>
<body onload="loadAlumnos()">
    
    <div class="contenedor">

        <div class="sub1">
            <h1>Petición JSON Alumnos</h1>
            <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Filtrar por NIF, Nombre, Curso">
        </div>

        <div class="sub2">
            <table id="tabla"></table>
        </div>

    </div>

</body>
</html>