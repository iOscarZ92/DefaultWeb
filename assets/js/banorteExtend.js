$(function () {
    $.extend({
        siteMap: function (o, url) {
            var xml = $.getMenuFile(url);

            var n = $(xml).find('menu').length;
            var fc = Math.round(n / 2) + 2;
            var lc = (n - 2) - fc;

            var counter = 0;

            $(xml).find('menu').each(function () {
                if ($(this).attr('id') !== undefined
					&& $(this).attr('title') !== undefined
					&& $(this).attr('href') !== undefined) {
                    var type = $(this).parents().length;
                    if (type > 1) {
                        if ($(this).parent().attr('id') === undefined
							|| $(this).parent().attr('title') === undefined
							|| $(this).parent().attr('href') === undefined) {
                            return;
                        }
                    }

                    s = $('<p />');
                    s.css('padding', 0);

                    if (type > 2) {
                        s.css('padding-left', 15 * type);
                        var a = $('<a />');
                        a.append($(this).attr('title'));
                        a.attr('href', $(this).attr('href'));
                        var li = $('<li />');
                        li.append(a);
                        var ul = $('<ul />');
                        ul.append(li);
                        s.append(ul);
                    } else if (type === 2) {
                        s.css('padding-left', 15 * type);
                        var a = $('<a />');
                        a.append($(this).attr('title'));
                        a.attr('href', $(this).attr('href'));
                        var li = $('<li />');
                        li.append(a);
                        var ul = $('<ul />');
                        ul.append(li);
                        s.append(ul);
                    } else {
                        s.css('padding', '5px 0 5px 0');
                        s.append('<ul><li>' + $(this).attr('title') + '</ul></li>');
                    }

                    if (counter <= fc) {
                        $('.listLeft', o).append(s);
                    } else {
                        $('.listRight', o).append(s);
                    }
                    counter++;
                } else {
                    fc--;
                }

            });
        },
        menu: function (o, url, params) {
            var xml = $.getMenuFile(url);

            var id = params && params.id !== undefined
				? params.id
				: null;

            var current = params && params.current !== undefined
				? params.current
				: null;

            var menusec = params && params.menusec !== undefined
				? params.menusec
				: null;

            var breadcrumb = params && params.breadcrumb !== undefined
				? params.breadcrumb
				: null;

            $(xml).children('menus').each(function () {
                var currentMenu = null;
                var aTitle = new Array();
                var aHref = new Array();
                var aId = new Array();

                if (id !== null) {
                    $(xml).find('menu').each(function () {
                        if ($(this).attr('id') === params.id) {
                            if ($(this).attr('id') !== undefined
							&& $(this).attr('title') !== undefined
							&& $(this).attr('href') !== undefined) {
                                $(this).children('menu').each(function () {
                                    if ($(this).attr('id') === current) {
                                        aTitle.push($(this).attr('title'));
                                        aHref.push($(this).attr('href'));
                                        $(this).parents().map(function () {
                                            if ($(this).attr('title') !== undefined) {
                                                aTitle.push($(this).attr('title'));
                                                aHref.push($(this).attr('href'));
                                                aId.push($(this).attr('id'));
                                            }
                                        });
                                        aTitle.reverse();
                                        aHref.reverse();
                                        aId.reverse();
                                        currentMenu = aId[0];
                                        for (var i = 0; i != aTitle.length; i++) {
                                            var ab = $('<a />');
                                            if (i !== aTitle.length - 1) {
                                                ab.attr('href', aHref[i]);
                                            }
                                            ab.append(aTitle[i]);
                                            $(breadcrumb).append(' « ');
                                            $(breadcrumb).append(ab);
                                        }
                                    }
                                });
                            }
                        }
                    });
                }

                $(this).children('menu').each(function () {
                    var mp = $('<li />');
                    var ap = $('<a />');
                    ap.attr('href', $(this).attr('href'));
                    ap.append($(this).attr('title'));
                    mp.append(ap);
                    if ($(this).attr('id') === currentMenu) {
                        mp.addClass('current');
                    }
                    var sl = $('<ul />');
                    $(this).children('menu').each(function () {
                        var ms = $('<li />');
                        var as = $('<a />');
                        as.attr('href', $(this).attr('href'));
                        as.append($(this).attr('title'));
                        ms.append(as);
                        var slb = $('<ul />');
                        $(this).children('menu').each(function () {
                            var msb = $('<li />');
                            var asb = $('<a />');
                            asb.click(function () {
                                window.location = $(this).attr('href');
                                $.checkTab();
                            });
                            //
                            var slbb = $('<ul />');
                            $(this).children('menu').each(function () {
                                var msbb = $('<li />');
                                var asbb = $('<a />');
                                asbb.attr('href', $(this).attr('href'));
                                asbb.append($(this).attr('title'));
                                asbb.click(function () {
                                    window.location = $(this).attr('href');
                                    $.checkTab();
                                });
                                msbb.append(asbb);
                                slbb.append(msbb);
                            });
                            //
                            asb.attr('href', $(this).attr('href'));
                            asb.append($(this).attr('title'));
                            msb.append(asb);
                            //
                            msb.append(slbb);
                            //
                            slb.append(msb);
                        });
                        ms.append(slb);
                        sl.append(ms);
                    });
                    mp.append(sl);
                    $(o).append(mp);
                });

                openFooter();
                mainmenu();
                //tabsMenu();
                banorteFilials();
                BNRTE.OSPanel.init();
            });
        },
        gallery: function (o, url, params) {
            var o = $(o);
            var bValid = true;
			var gt = 'get';
            if (url !== null && url !== "") {
                var xml;
                $.ajax({
                    type: gt,
                    url: url,
                    dataType: ($.browser.msie) ? "text" : "xml",
                    async: false,
                    success: function (x) {
                        if (typeof x === 'string') {
                            xml = new ActiveXObject('Microsoft.XMLDOM');
                            xml.async = false;
                            xml.loadXML(x);
                        } else {
                            xml = x;
                        }
                    },
                    error: function () { bValid = false; }
                });
                if (bValid) {
                    $(xml).children('images').each(function () {
                        $(this).children('image').each(function () {
                            var i = $('<img />');
                            i.attr('src', $(this).attr('src'));
                            i.attr('alt', $(this).attr('title'));

                            if (params == "Promociones") {
                                i.attr('width', 622);
                                i.attr('height', 370);
                            }
                            else {
                                i.attr('width', 638);
                                i.attr('height', 290);
                            }

                            var a = $('<a />');
                            a.attr('href', $(this).attr('href'));
                            a.attr('target', $(this).attr('target'));

						    a.attr('onclick', $(this).attr('onclick'));
							//alert($(this).attr('onclick'))

                            a.append(i);
                            var c = $('<div />');
                            var t = $('<h4 />');
                            var tx = $('<p />');
                            t.text($(this).attr('title'));
                            tx.text($(this).attr('description'));
                            c.append(t);
                            c.append(tx);

                            var slide = $('<div />');
                            slide.addClass('slide');

                            slide.append(a);
                            slide.append(c);

                            $(o).append(slide);
                        });
                    });

                    if (params == "Promociones") {
                        $(o).carouFredSel({
                            width: '622',
                            responsive: true,
                            scroll: {
                                fx: "crossfade"
                            },
                            items: {
                                visible: 1,
                                height: 370,
                                width: 622
                            },
                            pagination: "#pagerProm",
                            auto: 9000
                        });
                    }
                    else {
                        $(o).carouFredSel({
                            width: '638',
                            responsive: true,
                            scroll: {
                                fx: "crossfade"
                            },
                            items: {
                                visible: 1,
                                height: 290,
                                width: 638
                            },
                            pagination: "#pager",
                            auto: 9000
                        });
                    }
                }
            }
        },
        checkTab: function () {
            var hash = $(location).attr('hash');
            if (hash !== '' && hash !== '#') {
                var t = $(hash);
                t.click();
            }
        },
        getMenuFile: function (url) {
            var xml;
            var loadFile = false;
			var gt = 'get';
            if (!loadFile) {
                $.ajax({
                    type: gt,
                    url: url,
                    dataType: ($.browser.msie) ? "text" : "xml",
                    async: false,
                    cache: true,
                    success: function (x) {
                        if (typeof x === 'string') {
                            xml = new ActiveXObject('Microsoft.XMLDOM');
                            xml.async = false;
                            xml.loadXML(x);
                        } else {
                            xml = x;
                        }
                    },
                    error: function () { }
                });
            }
            return xml;
        }
    });

});