var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			   string: navigator.userAgent,
			   subString: "iPad",
			   identity: "iPad"
	    },
		{
			   string: navigator.userAgent,
			   subString: "Android",
			   identity: "Android"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

}
BrowserDetect.init();

function mainmenu(){
	
	var date = new Date();
	var currYear = date.getFullYear();
	var currMonth = date.getMonth();
	var currDay = date.getDate();
	var cExpire = new Date(currYear + 1, currMonth, currDay);
	var cExpireDate = cExpire.toUTCString();
	var touchDevice = BrowserDetect.OS == "iPhone/iPod" || BrowserDetect.OS == "iPad";
	var contrastCookieName = "contrastStyleURL";
	var cookiePath = '/'; 
	
	$(" #mc_menu_1 a").removeAttr("title");
	$(" #mc_menu_1 ul ").css({display: "none"}); // Opera Fix
	
	function resetHover(){
		$("#mc_menu_1 > li").each(function(){
			var cElem = $(this);
			if(!cElem.hasClass('current'))
				cElem.css('background-color','transparent');
		});	
	}
	
	function showMenu($e){
		var ulToShow = $(this).find('ul:first');
		
		if(touchDevice){
			resetHover();
			$(" #mc_menu_1 li ul").each(function(){
				var cElem = $(this);
				if(cElem.get(0) != ulToShow.get(0)){
					cElem.css({visibility: "hidden"});
				}
			});
		}
		if(ulToShow.css('visibility')=='hidden'){
			if(touchDevice)
				ulToShow.parent().css({"background-color":"#B60100"});
			ulToShow.css({visibility: "visible",display: "none"}).show(400);
		}else{
			if(touchDevice)
				ulToShow.parent().css({"background-color":"transparent"});
			ulToShow.css({visibility: "hidden"});	
		}
	}
	
	function hideMenu($e){
		$(this).find('ul:first').css({visibility: "hidden"});	
	}
	
	
	if(!touchDevice){
		$(" #mc_menu_1 li").hover(showMenu,hideMenu);
	} else{
		$(" #mc_menu_1 > li > a").removeAttr('href');
		resetHover();
		$(" #mc_menu_1 > li").click(showMenu)	
	}
	
	
	function readCookie($name){
		var results = document.cookie.match( '(^|;) ?' + $name + '=([^;]*)(;|$)' );
		if (results) {
			var value = unescape(results[2]);
			return value;
		}	
	}
	
	function getPath(){
		var direccionCss = $('#originalStyle').attr('href').split('/');
		direccionCss.pop();
		var newDirection = ""
			for(i=0;i<direccionCss.length;i++){
				newDirection += direccionCss[i]+"/"
		}
		return 	newDirection;
	}
	

	 $('.contrastStyle').click(function($e){					   
		$e.preventDefault();
		var direccionCss = $('#originalStyle').attr('href').split('/');
		direccionCss.pop();
		var newDirection = ""
			for(i=0;i<direccionCss.length;i++){
			newDirection += direccionCss[i]+"/"
			}
		newDirection = newDirection + "seguros_hc.css"
		$('#originalStyle').attr('href', newDirection)
		$('.normalStyle').css('display','block');
		$('.contrastStyle').css('display','none');
		document.cookie = contrastCookieName + '=' + "contrast" + ';path=' + cookiePath + ' ;expires=' + cExpireDate;
		
	});
	 $('.normalStyle').click(function($e){					   
		$e.preventDefault();
		var direccionCss = $('#originalStyle').attr('href').split('/');
		direccionCss.pop();
		var newDirection = ""
			for(i=0;i<direccionCss.length;i++){
			newDirection += direccionCss[i]+"/"
			}
		newDirection = newDirection + "seguros.css"
		$('#originalStyle').attr('href', newDirection)
		$('.normalStyle').css('display','none');
		$('.contrastStyle').css('display','block');
		document.cookie = contrastCookieName + '=' + "default" + ';path=' + cookiePath + ' ;expires=' + cExpireDate;
	});
	
	
	
	var contrastStyleSheet=readCookie(contrastCookieName);
	if(contrastStyleSheet){
		var styleSheet;
		var oStyle = $('#originalStyle').attr('href');
		if(contrastStyleSheet=="contrast"){
			if(oStyle.indexOf('seguros')!=-1){
				styleSheet = "seguros_hc.css"	
			}else if(oStyle.indexOf('afore')!=-1){
				styleSheet = "afore_hc.css"
			}else if(oStyle.indexOf('pensiones')!=-1){
				styleSheet = "pensiones_hc.css"	
			}else if(oStyle.indexOf('corporativo')!=-1){
				styleSheet = "corporativo_hc.css"	
			}
			$('.normalStyle').css('display','block');
			$('.contrastStyle').css('display','none');
		}else{
			if(oStyle.indexOf('seguros')!=-1){
				styleSheet = "seguros.css"	
			}else if(oStyle.indexOf('afore')!=-1){
				styleSheet = "afore.css"
			}else if(oStyle.indexOf('pensiones')!=-1){
				styleSheet = "pensiones.css"	
			}else if(oStyle.indexOf('corporativo')!=-1){
				styleSheet = "corporativo.css"	
			}
			$('.normalStyle').css('display','none');
			$('.contrastStyle').css('display','block');	
		}
		$('#originalStyle').attr('href',getPath()+styleSheet);
	}
}

function tabsMenu(){
	$(".tab_content").hide(); 
	$("ul.tabs li:first").addClass("active").show();
	$(".tab_content:first").show();	
	$(".topImage2").hide();
	$(".topImage2:first").show();
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); 
		$(this).addClass("active"); 
		$(".tab_content").hide(); 
		$(".topImage2").hide();
		var activeTab = $(this).find("a").attr("href"); 
		$(activeTab).fadeIn();
		$(activeTab+'_img').show();
		return false;
	});
}

function openFooter(){
	var segurosFooter = $('#linksFooter');
	var originalSize = segurosFooter.height();
	//alert(segurosFooter.height())
	
		$('#footerBtn').click(function($e){
			$e.preventDefault();
			if(segurosFooter.height()==originalSize){
				
				segurosFooter.animate({height:"44px"}, 800, function(){
					$('.moreBtn').css('display','block');
					$('.closeBtn').css('display','none');
					
				})
			}else{
				segurosFooter.animate({height:originalSize}, 800, function(){
					$('.moreBtn').css('display','none');
					$('.closeBtn').css('display','block');
				})
			}
	 });
}

var BNRTE = BNRTE || {};

BNRTE.OSPanel = (function(){
	var _pubMt = {};
	var _lightBg;
	var _panelWrapper;
	var _closeBtn;
	var _contentWrapper;
	var _innerWrapper;
	var _tabsWrapper;
	var _contentIframe;
	var _tabs = [];
	var _tabsInfo = [{label:"Chat con un ejecutivo",url:"/seguros/ChatSeguros/Chat.htm"},{label:"Envíanos un email",url:"/seguros/ChatSeguros/Mail.htm"}];
	
	function initDomElems(){
		_lightBg = jQuery('<div id="lightBck"></div>');
		_lightBg.insertAfter(jQuery('body>div:last'));
		_panelWrapper = jQuery('<div class="lightOp"></div>');
		_panelWrapper.insertBefore(jQuery('#header'));
		_closeBtn = jQuery('<div id="lightClose"><a href="#">Atención Personalizada</a></div>');
		_contentWrapper = jQuery('<div class="lightContent"></div>');
		_innerWrapper = jQuery('<div id="interiorTabsLogin"></div>');
		_contentWrapper.append(_innerWrapper);
		_panelWrapper.append(_closeBtn,_contentWrapper);
		_tabsWrapper = jQuery('<ul class="tabs"></ul>');
		_innerWrapper.append(_tabsWrapper);	
		initTabs();
	}
	function setIframeURL($url){
		if(_contentIframe){
			_contentIframe.remove();	
		}
		_contentIframe = jQuery('<iframe class="login" src="'+$url+'" marginwidth="0" marginheight="0" scrolling="no"  vspace="0" hspace="0" frameborder="0"></iframe>');
		_innerWrapper.append(_contentIframe);		
	}
	function initTabs(){	
		for(var i=0; i<_tabsInfo.length; i++){
			var tLi = jQuery('<li></li>');
			var tA = jQuery('<a>'+_tabsInfo[i].label+'</a>');
			tLi.append(tA);
			(function($i){
				tA.css('cursor','pointer');
				tA.click(function($e){
					$e.preventDefault();
					_tabsWrapper.find('li').removeClass('active');
					jQuery(this).parent().addClass('active');
					setIframeURL(_tabsInfo[$i].url);
				});
				_tabs.push(tA);
			})(i);
			_tabsWrapper.append(tLi);
		}
	}
	//Metodos publicos//
	_pubMt.showPanel=function($tabIndex){
		scroll(0,0);
		_lightBg.css('display','block');
		_panelWrapper.css('display','block');
		$tabIndex = $tabIndex || 0;
		_tabs[$tabIndex].click();
	}
	_pubMt.init = function(){
		initDomElems();
		_closeBtn.click(function($e){
			$e.preventDefault();
			_lightBg.css('display','none');
			_panelWrapper.css('display','none');	
		});
	}
	return _pubMt;
})();


function banorteFilials(){
	var tools = $('#herramientasLinea');
	var banorte = $('#banorteFilials');
	var alphaBck = $('#lightBck')
	$('#banorteBtn').click(function($e){
		$e.preventDefault();
		var direccionCss = $('#originalStyle').attr('href').split('/');
		direccionCss.pop()
		direccionCss.pop();
		var newDirection = ""
			for(i=0;i<direccionCss.length;i++){
			newDirection += direccionCss[i]+"/"
			}
			if(banorte.css('marginLeft')=='57px'){
				banorte.animate({marginLeft:"-646px"},800,function(){
					newDirection = "url(" + newDirection + "images/img/btn-empresa-hover.png)";
					$('#banorteBtn').css('backgroundImage', newDirection)										   
				});
			}else{
				banorte.animate({marginLeft:"57px"},800,function(){
					newDirection = "url(" + newDirection + "images/img/btn-empresa.png)";
					$('#banorteBtn').css('backgroundImage', newDirection)	
				});
			}	
	})
	tools.click(function($e){
		$e.preventDefault();
		BNRTE.OSPanel.showPanel();
	})
	/*$('#lightClose').click(function($e){
		$e.preventDefault();
		alphaBck.css('display','none');
		$('.lightOp').css('display','none');
	})*/
}

 $(document).ready(function(){				
	openFooter();
	//mainmenu();
	tabsMenu();
	banorteFilials();
	BNRTE.OSPanel.init();	
});
 

