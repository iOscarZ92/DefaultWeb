 function Producto() {
            var Parametro = document.getElementById("Producto").value;

            if (trim(Parametro) != "") {
                document.getElementById("frameSqas").src = "http://189.254.22.30/AMB_WEB/Directorio/frmConsulta.asp?idCob=" + Parametro;
            }
            else {
                alert("Favor de Seleccionar un Producto");
            }
        }
        function trim(myString) {
            return myString.replace(/^\s+/g, '').replace(/\s+$/g, '');
        }
    