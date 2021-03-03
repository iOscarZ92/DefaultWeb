function cerrarMenu() {
    removeSubMenu();
    removeSeleccionMenu();
}

function ChangeMenu(elemento) {
    removeSubMenu();
    removeSeleccionMenu();

    if ($('input#idMenu').val() == elemento.id) {
        $('input#idMenu').val("");
    }
    else {
        $('input#idMenu').val(elemento.id);

        var idItem = '#' + elemento.id;
        $(idItem).addClass('active tieneMenu');

        switch(elemento.id) {
            case 'opcAuto':
                $('#SubmenuAuto').css({'display': 'block'});
                break;
            case 'opcDanios':
                $('#SubmenuDanios').css({'display': 'block'});
                break;
            case 'opcVida':
                $('#SubmenuVida').css({'display': 'block'});
                break;
            case 'opcGM':
                $('#SubmenuGM').css({'display': 'block'});
                break;
            case 'opcPyme':
                $('#SubmenuPyme').css({'display': 'block'});
                break;
            case 'opcSector':
                $('#SubmenuSector').css({'display': 'block'});
                break;
            default:
                break;
        }
    }
}

function removeSubMenu()
{
    // Oculta todos los menus
    $('#SubmenuAuto').css({'display': 'none'});
    $('#SubmenuDanios').css({'display': 'none'});
    $('#SubmenuVida').css({'display': 'none'});
    $('#SubmenuGM').css({'display': 'none'});
    $('#SubmenuPyme').css({'display': 'none'});
    $('#SubmenuSector').css({'display': 'none'});
}

function removeSeleccionMenu()
{
    // Remueve la seleccion y flecha
    $('#opcAuto').removeClass('active tieneMenu');
    $('#opcDanios').removeClass('active tieneMenu');
    $('#opcVida').removeClass('active tieneMenu');
    $('#opcGM').removeClass('active tieneMenu');
    $('#opcPyme').removeClass('active tieneMenu');
    $('#opcSector').removeClass('active tieneMenu');
}

function imgActivar(elemento) {
    removeElementSeleccionado(elemento);

    var idItem = '#' + elemento.id + ' div.title';
    $(idItem).removeClass('texto-descripcion');
    $(idItem).addClass('seleccionado');

    switch(elemento.id) {
        case 'imgAuto':
            $('#imgAuto img').attr("src","/assets/images/menu/ABF0F230-83A3-4032-A9C4-28888731BCCF.svg");
            MostrarMenuN3(elemento.id);
            break;
        case 'imgTP':
            $('#imgTP img').attr("src","/assets/images/menu/42D01A30-0F88-4ED0-9BAB-E8C1835094F3.svg");
            MostrarMenuN3(elemento.id);
            break;
        case 'imgTC':
            $('#imgTC img').attr("src","/assets/images/menu/0D959D15-4F1B-40CE-8158-D918DF9DB690.svg");
            MostrarMenuN3(elemento.id);
            break;
        case 'imgHogar':
            $('#imgHogar img').attr("src","/assets/images/menu/ico-vida-estandarizado-select.svg");
            break;
        case 'imgVidaInd':
            $('#imgVidaInd img').attr("src","/assets/images/menu/ico-vida-individual-select.svg");
            break;
        case 'imgVidaEsen':
            $('#imgVidaEsen img').attr("src","/assets/images/menu/ico-vida-esencial-select.svg");
            break;
        case 'imgVidaPlus':
            $('#imgVidaPlus img').attr("src","/assets/images/menu/ico-vida-plus-select.svg");
            break;
        case 'imgFuneraria':
            $('#imgFuneraria img').attr("src","/assets/images/menu/ico-vida-funeraria-select.svg");
            break;
        case 'imgMsjVida':
            $('#imgMsjVida img').attr("src","/assets/images/menu/ico-vida-mensajes-select.svg");
            break;
        case 'imgBasicoStd':
            $('#imgBasicoStd img').attr("src","/assets/images/menu/ico-vida-estandarizado-select.svg");
            break;
        case 'imgTransfoma':
            $('#imgTransfoma img').attr("src","/assets/images/menu/ico-seguro-transforma-select.svg");
            break;
        case 'imgPlanEsen':
            $('#imgPlanEsen img').attr("src","/assets/images/menu/ico-plan-esencial-select.svg");
            break;
        case 'imgPlanTotal':
            $('#imgPlanTotal img').attr("src","/assets/images/menu/ico-plan-total-select.svg");
            break;
        case 'imgPlanColect':
            $('#imgPlanColect img').attr("src","/assets/images/menu/ico-plan-medico-colectivo-select.svg");
            break;
        case 'imgApEscolar':
            $('#imgApEscolar img').attr("src","/assets/images/menu/ico-ap-escolar-select.svg");
            break;
        case 'imgApStd':
            $('#imgApStd img').attr("src","/assets/images/menu/ico-ap-estadarizado-select.svg");
            break;
        case 'imgPlanHospital':
            $('#imgPlanHospital img').attr("src","/assets/images/menu/ico-plan-hospitalario-suma-select.svg");
            break;
        case 'imgGmmStd':
            $('#imgGmmStd img').attr("src","/assets/images/menu/ico-GMM-estandarizado-select.svg");
            break;
        case 'imgValidaCuentas':
            $('#imgValidaCuentas img').attr("src","/assets/images/menu/ico-validador-cuentas-select.svg");
            break;
        case 'imgFlotilla':
            $('#imgFlotilla img').attr("src","/assets/images/menu/ico-autos-flotistas-select.svg");
            break;
        case 'imgComercial':
            $('#imgComercial img').attr("src","/assets/images/menu/ico-comercial-e-industrial-select.svg");
            break;
        case 'imgProteccionInt':
            $('#imgProteccionInt img').attr("src","/assets/images/menu/ico-proteccion-integral-select.svg");
            break;
        case 'imgVidaGrupo':
            $('#imgVidaGrupo img').attr("src","/assets/images/menu/ico-vida-grupo-select.svg");
            break;
        case 'imgVida':
            $('#imgVida img').attr("src","/assets/images/menu/ico-vida-only-select.svg");
            break;
        case 'imgAdminPublic':
            $('#imgAdminPublic img').attr("src","/assets/images/menu/ico-administracion-publicafederal-select.svg");
            break;
        case 'imgProductos':
            $('#imgProductos img').attr("src","/assets/images/menu/ico-productos-sector-publico-select.svg");
            break;
        case 'imgVitalicia':
            $('#imgVitalicia img').attr("src","/assets/images/menu/ico-renta-vitacia-select.svg");
            break;
        default:
            break;
    }
}

function removeElementSeleccionado(elemento) {
    // Marca como deshabilitado todos los elementos del menu y los textos

    if ($('input#idMenu').val() == 'opcAuto') {

        // Marca deshabilitado todos elementos del menu auto
        $('#imgAuto img').attr("src","/assets/images/menu/79C4C49F-018F-44B8-A6DA-03208D0886FD.svg");
        $('#imgTP img').attr("src","/assets/images/menu/247DCC73-1999-4E32-8CDA-F4BF31B6AD83.svg");
        $('#imgTC img').attr("src","/assets/images/menu/719E5950-2B7F-4EBA-98CC-1ACCCF049596.svg");

        $('#imgAuto div.title').removeClass('seleccionado');
        $('#imgAuto div.title').addClass('texto-descripcion');
        $('#imgTP div.title').removeClass('seleccionado');
        $('#imgTP div.title').addClass('texto-descripcion');
        $('#imgTC div.title').removeClass('seleccionado');
        $('#imgTC div.title').addClass('texto-descripcion');

        // Marca habilitado solo el elemento en cuestion del menu auto
        var idItem = '#' + elemento.id + ' div.title';
        $(idItem).removeClass('texto-descripcion');
        $(idItem).addClass('seleccionado');

        switch(elemento.id) {
            case 'imgAuto':
                $('#imgAuto img').attr("src","/assets/images/menu/ABF0F230-83A3-4032-A9C4-28888731BCCF.svg");
                break;
            case 'imgTP':
                $('#imgTP img').attr("src","/assets/images/menu/42D01A30-0F88-4ED0-9BAB-E8C1835094F3.svg");
                break;
            case 'imgTC':
                $('#imgTC img').attr("src","/assets/images/menu/0D959D15-4F1B-40CE-8158-D918DF9DB690.svg");
                break;
            default:
                break;
        }
    }
    else {
        // Auto

        // Dejar marcado solo el primer elemento del menu auto por defecto
        $('#imgAuto img').attr("src","/assets/images/menu/ABF0F230-83A3-4032-A9C4-28888731BCCF.svg");
        $('#imgAuto div.title').removeClass('texto-descripcion');
        $('#imgAuto div.title').addClass('seleccionado');
        MostrarMenuN3('imgAuto');

        // Dejar desmarcado el resto de los elementos del menu auto por defecto
        //$('#imgAuto img').attr("src","/assets/images/menu/79C4C49F-018F-44B8-A6DA-03208D0886FD.svg");
        $('#imgTP img').attr("src","/assets/images/menu/247DCC73-1999-4E32-8CDA-F4BF31B6AD83.svg");
        $('#imgTC img').attr("src","/assets/images/menu/719E5950-2B7F-4EBA-98CC-1ACCCF049596.svg");

        //$('#imgAuto div.title').removeClass('seleccionado');
        //$('#imgAuto div.title').addClass('texto-descripcion');
        $('#imgTP div.title').removeClass('seleccionado');
        $('#imgTP div.title').addClass('texto-descripcion');
        $('#imgTC div.title').removeClass('seleccionado');
        $('#imgTC div.title').addClass('texto-descripcion');
    }

    // Hogar
    $('#imgHogar img').attr("src","/assets/images/menu/ico-vida-estandarizado-desactivado.svg");
    $('#imgHogar div.title').removeClass('seleccionado');
    $('#imgHogar div.title').addClass('texto-descripcion');

    // Vida
    $('#imgVidaInd img').attr("src","/assets/images/menu/ico-vida-individual-desactivado.svg");
    $('#imgVidaEsen img').attr("src","/assets/images/menu/ico-vida-esencial-desactivado.svg");
    $('#imgVidaPlus img').attr("src","/assets/images/menu/ico-vida-plus-desactivado.svg");
    $('#imgFuneraria img').attr("src","/assets/images/menu/ico-vida-funeraria-desactivado.svg");
    $('#imgMsjVida img').attr("src","/assets/images/menu/ico-vida-mensajes-desactivado.svg");
    $('#imgBasicoStd img').attr("src","/assets/images/menu/ico-vida-estandarizado-desactivado.svg");

    $('#imgVidaInd div.title').removeClass('seleccionado');
    $('#imgVidaInd div.title').addClass('texto-descripcion');
    $('#imgVidaEsen div.title').removeClass('seleccionado');
    $('#imgVidaEsen div.title').addClass('texto-descripcion');
    $('#imgVidaPlus div.title').removeClass('seleccionado');
    $('#imgVidaPlus div.title').addClass('texto-descripcion');
    $('#imgFuneraria div.title').removeClass('seleccionado');
    $('#imgFuneraria div.title').addClass('texto-descripcion');
    $('#imgMsjVida div.title').removeClass('seleccionado');
    $('#imgMsjVida div.title').addClass('texto-descripcion');
    $('#imgBasicoStd div.title').removeClass('seleccionado');
    $('#imgBasicoStd div.title').addClass('texto-descripcion');

    // GM
    $('#imgTransfoma img').attr("src","/assets/images/menu/ico-seguro-transforma-desactivado.svg");
    $('#imgPlanEsen img').attr("src","/assets/images/menu/ico-plan-esencial-desactivado.svg");
    $('#imgPlanTotal img').attr("src","/assets/images/menu/ico-plan-total-desactivado.svg");
    $('#imgPlanColect img').attr("src","/assets/images/menu/ico-plan-medico-colectivo-desactivado.svg");
    $('#imgApEscolar img').attr("src","/assets/images/menu/ico-ap-escolar-desactivado.svg");
    $('#imgApStd img').attr("src","/assets/images/menu/ico-ap-estadarizado-desactivado.svg");
    $('#imgPlanHospital img').attr("src","/assets/images/menu/ico-plan-hospitalario-suma-desactivado.svg");
    $('#imgGmmStd img').attr("src","/assets/images/menu/ico-GMM-estandarizado-desactivado.svg");
    $('#imgValidaCuentas img').attr("src","/assets/images/menu/ico-validador-cuentas-desactivado.svg");

    $('#imgTransfoma div.title').removeClass('seleccionado');
    $('#imgTransfoma div.title').addClass('texto-descripcion');
    $('#imgPlanEsen div.title').removeClass('seleccionado');
    $('#imgPlanEsen div.title').addClass('texto-descripcion');
    $('#imgPlanTotal div.title').removeClass('seleccionado');
    $('#imgPlanTotal div.title').addClass('texto-descripcion');
    $('#imgPlanColect div.title').removeClass('seleccionado');
    $('#imgPlanColect div.title').addClass('texto-descripcion');
    $('#imgApEscolar div.title').removeClass('seleccionado');
    $('#imgApEscolar div.title').addClass('texto-descripcion');
    $('#imgApStd div.title').removeClass('seleccionado');
    $('#imgApStd div.title').addClass('texto-descripcion');
    $('#imgPlanHospital div.title').removeClass('seleccionado');
    $('#imgPlanHospital div.title').addClass('texto-descripcion');
    $('#imgGmmStd div.title').removeClass('seleccionado');
    $('#imgGmmStd div.title').addClass('texto-descripcion');
    $('#imgValidaCuentas div.title').removeClass('seleccionado');
    $('#imgValidaCuentas div.title').addClass('texto-descripcion');

    // Pyme
    $('#imgFlotilla img').attr("src","/assets/images/menu/ico-autos-flotistas-desactivado.svg");
    $('#imgComercial img').attr("src","/assets/images/menu/ico-comercial-e-industrial-desactivado.svg");
    $('#imgProteccionInt img').attr("src","/assets/images/menu/ico-proteccion-integral-desactivado.svg");
    $('#imgVidaGrupo img').attr("src","/assets/images/menu/ico-vida-grupo-desactivado.svg");
    $('#imgVida img').attr("src","/assets/images/menu/ico-vida-only-desactivado.svg");

    $('#imgFlotilla div.title').removeClass('seleccionado');
    $('#imgFlotilla div.title').addClass('texto-descripcion');
    $('#imgComercial div.title').removeClass('seleccionado');
    $('#imgComercial div.title').addClass('texto-descripcion');
    $('#imgProteccionInt div.title').removeClass('seleccionado');
    $('#imgProteccionInt div.title').addClass('texto-descripcion');
    $('#imgVidaGrupo div.title').removeClass('seleccionado');
    $('#imgVidaGrupo div.title').addClass('texto-descripcion');
    $('#imgVida div.title').removeClass('seleccionado');
    $('#imgVida div.title').addClass('texto-descripcion');

    // Sector
    $('#imgAdminPublic img').attr("src","/assets/images/menu/ico-administracion-publicafederal-desactivado.svg");
    $('#imgProductos img').attr("src","/assets/images/menu/ico-productos-sector-publico-desactivado.svg");
    $('#imgVitalicia img').attr("src","/assets/images/menu/ico-renta-vitacia-desactivado.svg");

    $('#imgAdminPublic div.title').removeClass('seleccionado');
    $('#imgAdminPublic div.title').addClass('texto-descripcion');
    $('#imgProductos div.title').removeClass('seleccionado');
    $('#imgProductos div.title').addClass('texto-descripcion');
    $('#imgVitalicia div.title').removeClass('seleccionado');
    $('#imgVitalicia div.title').addClass('texto-descripcion');
}

function MostrarMenuN3(idSubMenu) {
    $('#menu-n3-auto-p').css({'display': 'none'});
    $('#menu-n3-transporte-p').css({'display': 'none'});
    $('#menu-n3-transporte-c').css({'display': 'none'});

    switch(idSubMenu) {
        case 'imgAuto':
            $('#menu-n3-auto-p').css({'display': 'block'});
            break;
        case 'imgTP':
            $('#menu-n3-transporte-p').css({'display': 'block'});
            break;
        case 'imgTC':
            $('#menu-n3-transporte-c').css({'display': 'block'});
            break;
        default:
            break;
    }
}

function txtSeleccionMenuN3(elemento) {
    $('#menu-n3-auto-p div.title').removeClass('seleccionado');
    $('#menu-n3-auto-p div.title').addClass('texto-descripcion');
    $('#menu-n3-transporte-p div.title').removeClass('seleccionado');
    $('#menu-n3-transporte-p div.title').addClass('texto-descripcion');
    $('#menu-n3-transporte-c div.title').removeClass('seleccionado');
    $('#menu-n3-transporte-c div.title').addClass('texto-descripcion');

    var idItem = '#' + elemento.id + ' div.title'
    $(idItem).removeClass('texto-descripcion');
    $(idItem).addClass('seleccionado');
}

function txtNoSeleccionMenuN3(elemento) {
    var idItem = '#' + elemento.id + ' div.title'
    $(idItem).removeClass('seleccionado');
    $(idItem).addClass('texto-descripcion');
}

function scrollPrev() {
    $('#btnPrev').removeClass('esconde-flecha');
    $('#btnNext').removeClass('esconde-flecha');

    $('#btnPrev').addClass('esconde-flecha');

    $('#imgTransfoma').css({'display': 'block'});
    $('#imgPlanEsen').css({'display': 'block'});
    $('#imgPlanTotal').css({'display': 'block'});
    $('#imgPlanColect').css({'display': 'block'});
    $('#imgApEscolar').css({'display': 'block'});
    $('#imgApStd').css({'display': 'none'});
    $('#imgPlanHospital').css({'display': 'none'});
    $('#imgGmmStd').css({'display': 'none'});
    $('#imgValidaCuentas').css({'display': 'none'});
}

function scrollNext() {
    $('#btnPrev').removeClass('esconde-flecha');
    $('#btnNext').removeClass('esconde-flecha');

    $('#btnNext').addClass('esconde-flecha');

    $('#imgTransfoma').css({'display': 'none'});
    $('#imgPlanEsen').css({'display': 'none'});
    $('#imgPlanTotal').css({'display': 'none'});
    $('#imgPlanColect').css({'display': 'none'});
    $('#imgApEscolar').css({'display': 'block'});
    $('#imgApStd').css({'display': 'block'});
    $('#imgPlanHospital').css({'display': 'block'});
    $('#imgGmmStd').css({'display': 'block'});
    $('#imgValidaCuentas').css({'display': 'block'});
}

function expendirMenuMovil(elemento) {
    var idMenu = '#' + elemento.id;

    if ($(idMenu).hasClass("expanded") == true) {
        ocultarItems(elemento);
    }
    else {
        mostrarItems(elemento);
    }
}

function mostrarItems(elemento) {
    switch(elemento.id) {
        case 'MenuAutos':
            $('#btnMostrarAuto').css({'display': 'none'});
            $('#btnOcultarAuto').css({'display': 'block'});
            
            $('#MenuAutos').addClass('expanded');
            $('#MenuAutos div.menu-title').addClass('expanded');
            $('#MenuAutosItems').css({'display': 'block'});
            break;
        case 'MenuDanios':
            $('#btnMostrarDanios').css({'display': 'none'});
            $('#btnOcultarDanios').css({'display': 'block'});

            $('#MenuDanios').addClass('expanded');
            $('#MenuDanios div.menu-title').addClass('expanded');
            $('#MenuDaniosItems').css({'display': 'block'});
            break;
        case 'MenuVida':
            $('#btnMostrarVida').css({'display': 'none'});
            $('#btnOcultarVida').css({'display': 'block'});

            $('#MenuVida').addClass('expanded');
            $('#MenuVida div.menu-title').addClass('expanded');
            $('#MenuVidaItems').css({'display': 'block'});
            break;
        case 'MenuGastosM':
            $('#btnMostrarGM').css({'display': 'none'});
            $('#btnOcultarGM').css({'display': 'block'});

            $('#MenuGastosM').addClass('expanded');
            $('#MenuGastosM div.menu-title').addClass('expanded');
            $('#MenuGastosMItems').css({'display': 'block'});
            break;
        case 'MenuPYME':
            $('#btnMostrarPyme').css({'display': 'none'});
            $('#btnOcultarPyme').css({'display': 'block'});

            $('#MenuPYME').addClass('expanded');
            $('#MenuPYME div.menu-title').addClass('expanded');
            $('#MenuPYMEItems').css({'display': 'block'});
            break;
        case 'MenuSectorP':
            $('#btnMostrarSector').css({'display': 'none'});
            $('#btnOcultarSector').css({'display': 'block'});

            $('#MenuSectorP').addClass('expanded');
            $('#MenuSectorP div.menu-title').addClass('expanded');
            $('#MenuSectorPItems').css({'display': 'block'});
            break;
        default:
            break;
    }
}

function ocultarItems(elemento) {
    switch(elemento.id) {
        case 'MenuAutos':
            $('#btnMostrarAuto').css({'display': 'block'});
            $('#btnOcultarAuto').css({'display': 'none'});

            $('#MenuAutos').removeClass('expanded');
            $('#MenuAutos div.menu-title').removeClass('expanded');
            $('#MenuAutosItems').css({'display': 'none'});   

            break;
        case 'MenuDanios':
            $('#btnMostrarDanios').css({'display': 'block'});
            $('#btnOcultarDanios').css({'display': 'none'});

            $('#MenuDanios').removeClass('expanded');
            $('#MenuDanios div.menu-title').removeClass('expanded');
            $('#MenuDaniosItems').css({'display': 'none'});    

            break;
        case 'MenuVida':
            $('#btnMostrarVida').css({'display': 'block'});
            $('#btnOcultarVida').css({'display': 'none'});

            $('#MenuVida').removeClass('expanded');
            $('#MenuVida div.menu-title').removeClass('expanded');
            $('#MenuVidaItems').css({'display': 'none'});    

            break;
        case 'MenuGastosM':
            $('#btnMostrarGM').css({'display': 'block'});
            $('#btnOcultarGM').css({'display': 'none'});

            $('#MenuGastosM').removeClass('expanded');
            $('#MenuGastosM div.menu-title').removeClass('expanded');
            $('#MenuGastosMItems').css({'display': 'none'});
            break;
        case 'MenuPYME':
            $('#btnMostrarPyme').css({'display': 'block'});
            $('#btnOcultarPyme').css({'display': 'none'});

            $('#MenuPYME').removeClass('expanded');
            $('#MenuPYME div.menu-title').removeClass('expanded');
            $('#MenuPYMEItems').css({'display': 'none'});
            break;
        case 'MenuSectorP':
            $('#btnMostrarSector').css({'display': 'block'});
            $('#btnOcultarSector').css({'display': 'none'});

            $('#MenuSectorP').removeClass('expanded');
            $('#MenuSectorP div.menu-title').removeClass('expanded');
            $('#MenuSectorPItems').css({'display': 'none'});
            break;
        default:
            break;
    }
}
