function cargaCotizador(idElemento, tipoCotizador) {

    if (tipoCotizador == "auto") {
        urlCotizador = "/cotizacion-autos";
    }

    if (tipoCotizador == "pick-up") {
        urlCotizador = "/cotizacion-autos";
    }

    if (tipoCotizador == "auto-usa") {
        urlCotizador = "/cotizacion-autos";
    }

    let elemento = document.getElementById(idElemento);

    elemento.setAttribute("href", urlCotizador);

}