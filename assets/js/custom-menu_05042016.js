$(document).ready(function(){
	if($( window ).width()>=751){
		cant_sub_menu = 4;
		$('nav li a').click(function(){            
			if($( this ).hasClass( "dropdown-toggle" )){
				$('.inicio-area').css('top', '-33px');
				cant_sub_menu = $(this).parent('.dropdown').children('ul').children('li').length;
				contenido_submenu = $(this).parent('.dropdown').children('ul').html();
				//btn_close = '<a href="#" class="close">X</a>';
				//btn_close = '<a href="#" class="close"><i class="fa fa-times"></i></a>';
				//btn_close = '<a href="#" class="close"><img src="../assets/images/cerrar_boton.svg" width="25px" height="25px"</a>';
				//contenido_submenu = btn_close+'<ul class="slider-submenu">'+contenido_submenu+'</ul>';
				contenido_submenu = '<ul class="slider-submenu">'+contenido_submenu+'</ul>';
				if(cant_sub_menu<=4){
					$('.bx-slider-menu').addClass('hidden-next-prev');
				} else {
					$('.bx-slider-menu').removeClass('hidden-next-prev');
				}
				$('.bx-slider-menu .container').html(contenido_submenu);
				$('.bx-slider-menu li').addClass('slide');
				$('.slider-submenu').bxSlider({
					slideWidth: 200,
					minSlides: 2,
					maxSlides: 4,
					slideMargin: 10,
					pager: false,
					infiniteLoop: true,
					hideControlOnEnd: false
				});
				$('.bx-slider-menu .close').click(function(){  
					$('.bx-slider-menu .container').html('');
					$('.inicio-area').css('top', '-3px'); 
				});
			}
		});

		if($('.navbar-nav.nav .dropdown').hasClass('active')){
		    cant_sub_menu = $('.navbar-nav.nav .dropdown.active ul').children('li').length;
			contenido_submenu = $('.navbar-nav.nav .dropdown.active ul').html();
			//btn_close = '<a href="#" class="close">X</a>';
			//btn_close = '<a href="#" class="close"><i class="fa fa-times"></i></a>';
			//btn_close = '<a href="#" class="close"><img src="../assets/images/cerrar_boton.svg" width="25px" height="25px"</a>';
			//contenido_submenu = btn_close+'<ul class="slider-submenu">'+contenido_submenu+'</ul>';
			contenido_submenu = '<ul class="slider-submenu">'+contenido_submenu+'</ul>';
			if(cant_sub_menu<=4){
				$('.bx-slider-menu').addClass('hidden-next-prev');
		  }
			$('.bx-slider-menu .container').html(contenido_submenu);
			$('.bx-slider-menu li').addClass('slide');
			$('.slider-submenu').bxSlider({
					slideWidth: 200,
					minSlides: 2,
					maxSlides: 4,
					slideMargin: 10,
					pager: false,
					infiniteLoop: true,
					hideControlOnEnd: true
			});
			$('.bx-slider-menu .close').click(function(){  
				$('.bx-slider-menu .container').html('');
					$('.inicio-area').css('top', '-3px');   
			});
		}
	} else {
		$( ".nav.navbar-nav" ).append($('.menu-top ul').html());
		//socials = $('#footer .social-share-s').html();
		//socials = '<li><ul class="list-socials">'+socials+'</ul></li>';
		//$( ".nav.navbar-nav" ).append(socials);
		$( ".nav.navbar-nav li.dropdown a" ).append('<i class="fa fa-angle-right pull-right"></i>');
		$( ".nav.navbar-nav .search" ).parent('li').remove();
	}
//
	// clic ubicacion y contacto
	$('a.ubicacion').click(function(){
		$(".menu-top-content li").removeClass('active');
		$(this).parent('li').addClass('active');
		if($( ".panels-e.ubicacion" ).hasClass('open')){
			close_panel('ubicacion');
		} else {
			open_panel('ubicacion');
		}
	});
	
	$('a.contacto').click(function(){
		$(".menu-top-content li").removeClass('active');
		$(this).parent('li').addClass('active');
		if($( ".panels-e.contacto" ).hasClass('open')){
			close_panel('contacto');
		}else{
			open_panel('contacto');
		}
	});
	$('a.search').click(function(){
		$(".menu-top-content li").removeClass('active');
		$(this).parent('li').addClass('active');
		if($( ".panels-e.busqueda" ).hasClass('open')){
			close_panel('busqueda');
		}else{
			open_panel('busqueda');
		}
	});

	function open_panel(panels){
		close_panel('ubicacion');
		close_panel('contacto');
		$( ".panels-e."+panels ).addClass('open');
		
		if(panels == "ubicacion"){
			$( ".panels-e" ).addClass('retirar-paddings');
		} else {
			$( ".panels-e" ).removeClass('retirar-paddings');
		}
		
		$( ".panels-e.open" ).slideToggle( "slow", function() {
			$( ".panels-e" ).removeClass('close');
			btn_close = '<a href="#" class="close"><img src="../assets/images/cerrar.png" width="30px" height="30px" style="margin-top:40px;"></a>';
			$( ".panels-e .container" ).append(btn_close);
			$( ".panels-e .container a.close" ).click(function(){
				close_panel(".panels-e."+panels)
				$(".menu-top-content li").removeClass('active');
			});
		});
	}
	
	function close_panel(panels){
		$( ".panels-e.open" ).slideToggle( "slow", function() {});
		$( ".panels-e" ).removeClass('open');
		$( ".panels-e.open" ).slideToggle( "slow", function() {
			$( ".panels-e."+panels ).addClass('close');
		});
	}

});

function mostrar(id) {
    if (id == "contenido01") {
        $("#contenido01").show();
        $("#contenido02").hide();
		$("#contenido03").hide();
        $("#contenido04").hide();
        $("#contenido05").hide();
		$("#contenido06").hide();
    }

    if (id == "contenido02") {
        $("#contenido01").hide();
        $("#contenido02").show();
		$("#contenido03").hide();
        $("#contenido04").hide();
        $("#contenido05").hide();
		$("#contenido06").hide();
    }

    if (id == "contenido03") {
        $("#contenido01").hide();
        $("#contenido02").hide();
		$("#contenido03").show();
        $("#contenido04").hide();
        $("#contenido05").hide();
		$("#contenido06").hide();
    }

    if (id == "contenido04") {
        $("#contenido01").hide();
        $("#contenido02").hide();
		$("#contenido03").hide();
        $("#contenido04").show();
        $("#contenido05").hide();
		$("#contenido06").hide();
    }
	if (id == "contenido05") {
        $("#contenido01").hide();
        $("#contenido02").hide();
		$("#contenido03").hide();
        $("#contenido04").hide();
        $("#contenido05").show();
		$("#contenido06").hide();
    }
	if (id == "contenido06") {
        $("#contenido01").hide();
        $("#contenido02").hide();
		$("#contenido03").hide();
        $("#contenido04").hide();
        $("#contenido05").hide();
		$("#contenido06").show();
    }
}

