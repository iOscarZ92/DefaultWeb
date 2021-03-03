var BNRTE = BNRTE || {};

BNRTE.initClientsSupport = function(){
	var statesInfoConts = jQuery('.municipios,.oficinas');
	var firstCol;
	var secondCol;
	
	/*dibuja el menu de municipios de acuerdo a los datos del estado*/
	function drawZoneMenu($data,$code){
		var parentCont = jQuery('#contMunicipio');
		var firstColMenuFragment;
		
		if(firstCol){
			firstCol.remove();	
			secondCol.remove();
			jQuery('#contDatosOficina').html('');
		}
		
		if($data){ 
			var zones = $data.municipios;
			
			
			firstCol = jQuery(document.createElement('ul'));
			firstCol.addClass("offices");
			
			for(var i=0;i<zones.length;i++){
				var cZone = menuOpt(zones[i]);
				var cBtn = cZone.find('a');
				cBtn.click(drawOffices);
				if(i==0){
					cBtn.click();
				}
				firstCol.append(cZone);
			}
			parentCont.append(firstCol);
		}
	}
	/*dibuja el menu de las oficinas(segunda columna)*/
	function drawOffices($e){
		var tgt = jQuery(this);
		tgt.parent().parent().children().each(function(){
			jQuery(this).removeClass('current');
		});
		tgt.parent().addClass('current');
		
		var offices = this.info.oficinas;
		var parentCont = jQuery('#contOficinas');
		
		if(secondCol){
			secondCol.remove();
		}
		jQuery('#contDatosOficina').html('');
		
		secondCol = jQuery(document.createElement('ul'));
		secondCol.addClass("offices");
		
		for(var i=0;i<offices.length;i++){
			var cOffice = menuOpt(offices[i]);
			var cBtn = cOffice.find('a');
			cBtn.click(drawOffice);
			secondCol.append(cOffice);
		}
		parentCont.append(secondCol);
	}
	function drawOffice($e){
		var tgt = jQuery(this);
		tgt.parent().parent().children().each(function(){
			jQuery(this).removeClass('current');
		});
		tgt.parent().addClass('current');
		
		var parentCont = jQuery('#contDatosOficina');
		var info = this.info;
		var officeInfo = info.datos;
		var thirdColFragment;
		parentCont.html('');
		
		thirdColFragment = document.createDocumentFragment();
		var name = jQuery(document.createElement('h4'));
		name.html(info.nombre);
		thirdColFragment.appendChild(name.get(0));
		
		
		var officeNum = jQuery(document.createElement('p'));
		officeNum.html("Sucursal No. "+officeInfo.num);
		thirdColFragment.appendChild(officeNum.get(0));
		
		var addressCont = jQuery(document.createElement('p'));
		addressCont.append('<span class="red">Dirección:</span><br />'+officeInfo.direccion+'</p><p><span class="red">Colonia:</span><br />'+officeInfo.col);
		thirdColFragment.appendChild(addressCont.get(0));
		
		var zipCodeCont = jQuery(document.createElement('p'));
		zipCodeCont.append('<span class="red">C.P.:</span> '+officeInfo.cp);
		thirdColFragment.appendChild(zipCodeCont.get(0));
		
		var phoneCont = jQuery(document.createElement('p'));
		phoneCont.append('<span class="red">Teléfonos:</span><br/>'+officeInfo.tels);
		thirdColFragment.appendChild(phoneCont.get(0));
		
		if(officeInfo.fax){
			var faxCont = jQuery(document.createElement('p'));
			faxCont.append('<span class="red">Fax:</span> '+officeInfo.fax);	
			thirdColFragment.appendChild(faxCont.get(0));
			faxCont = null;
		}
		
		var businessHoursCont = jQuery(document.createElement('p'));
		businessHoursCont.append('<span class="red">Horario de servicio:</span><br />L-V : '+officeInfo.horarioLV+'<br />S : '+officeInfo.horarioS);
		thirdColFragment.appendChild(businessHoursCont.get(0));
		
		name=null;officeNum=null;addressCont=null;zipCodeCont=null;phoneCont=null;
		parentCont.append(thirdColFragment);
	}
	function menuOpt($info){
		var linkCont = jQuery(document.createElement('li'));
		var option = jQuery(document.createElement('a'));
		option.text($info.nombre);
		option.get(0).info = $info;
		linkCont.append(option);
		return linkCont;
	}
	
	
	jQuery('#states').change(function($e){
		var tgt = jQuery(this);
		var cValue = tgt.val();
		var js = '../ws/'+cValue+'.json';
		/*Busca los archivos .json de acuerdo al valor seleccionado
		en el combo box de estado(e.g AS.json), en caso de ser un servicio web,
		se sugiere mandar el valor como parametro get*/
		
		if(cValue != -1){	
			statesInfoConts.css('display','block');
			jQuery.getJSON(js,drawZoneMenu);
		}else{
			statesInfoConts.css('display','none');
		}
	});
	statesInfoConts.css('display','none');
}

