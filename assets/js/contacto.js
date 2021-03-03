
    
    function validateEmail(id) 
        { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return id.match(re)
        }
    function validateNSS(id) 
        { 
        return (id.length == 11 && !isNaN(id));
        }
    function validateLada(id) 
        { 
        return (id.length == 2 && !isNaN(id)|| id.length == 3 && !isNaN(id));
        }
    function validateTel(id) 
        { 
        return (id.length == 8 && !isNaN(id));
        }
    function trim (myString)
        {
        return myString.replace(/^\s+/g,'').replace(/\s+$/g,'');
        }
    function limpiacampos()
        {
            document.getElementById("Nombre").value= "";
            document.getElementById("Apaterno").value= "";
            document.getElementById("Amaterno").value= "";
            document.getElementById("Mail").value= "@";
            document.getElementById("Ciudad").value= "";
            document.getElementById("Estado").selectedIndex = 0;
            document.getElementById("Coment").value= "";
         }