$push2press = {};
push2press = {};
push2press.loading = function() {
	if (confirm("Are you sure?")) {
		var h = '<div style="padding:16px;"><br><legend>Upgrading</legend><br><br><div id="p2p_download_bar">'+
		'<div class="progress progress-striped active">'+
	  	'	<div class="bar" style="width: 100%;"></div>'+
		'</div>'+
		'</div>'+
		'</div>';
		$("#modal-window2").removeClass("modalpreview");
		$("#modal-window2").removeClass("modalpreview600");
		$("#modal-window2").removeClass("modalpreview200qrcode");
		$("#modal-window2").addClass("modalpreview200");
		$("#modal-window2").html(h);
		$("#modal-window2").modal('show');
		setTimeout(function() {
			document.location.href='upgrade.php';
		},500);
	}
};
push2press.modal = function(id) {
	$("#modal-window2").removeClass("modalpreview");
	$("#modal-window2").removeClass("modalpreview600");
	$("#modal-window2").removeClass("modalpreview200qrcode");
	$("#modal-window2").addClass("modalpreview200qrcode");
//	$("#modal-window2").addClass("modalpreview200");
	$("#modal-window2").html($(id).html());
	$("#modal-window2").modal('show');

}

push2press.qrcode = function() {
	var h = '<div style="padding:16px;"><br><legend>QR Code</legend>';
	h += '<table width="600"><tr>';
	h += '<td valign="top" width="300">'+$("#qrcodesmall").html();
	h += "<br>Send yourself the link by email";
	h += '<form action="api.php"><input type="text" name="emaillinkto"><input class="btn" type="submit"></form>';
	h += "</td><td valign='top'>";
	
	h += '<div id="myCarousel" class="carousel slide">';
	h += "<div class='carousel-inner'>";
	h += "<div class='item'>1.scan the code<div class='qrcode-instructions qrcode1'></div></div>";
	h += "<div class='item'>2.press the searchbar<div class='qrcode-instructions qrcode2'></div></div>";
	h += "<div class='item'>3.press OK<div class='qrcode-instructions qrcode3'></div></div>";
	h += "<div class='item'>4.Open the app<div class='qrcode-instructions qrcode4'></div></div>";
	h += "</div>";
	h += "</div>";
	
	h += "</td></tr></table>";

	$("#modal-window2").removeClass("modalpreview");
	$("#modal-window2").removeClass("modalpreview600");
	$("#modal-window2").addClass("modalpreview200qrcode");
	$("#modal-window2").html(h);
	$("#modal-window2").modal('show');
	setTimeout(function() {
		$('.carousel').carousel()
	},500);
	
};
$push2press.preview = function(URL,A,B,C) {
	var h = "";
	h += "<div style='position:relative;width:1000px;height:600px;'>";
	h += "<image src='images/iphone-preview.png' border='0' class='scaleOn' style='width:390px;position:absolute;top:-60px;left:20px;'>";
	h += "<image src='images/iphone-preview.png' border='0' class='scaleOn' style='width:390px;position:absolute;top:-60px;right:20px;'>";
	h += "<iframe frameborder='0' src='"+URL+"' class='scaleOn' style='position:absolute;top:120px;right:60px;width:320px;height:400px;'></iframe>";
	h += "<p class='scaleOn' style='position:absolute;top:140px;left:150px;width:200px;height:50px;font-size:14px;line-height:14px;'><b>"+A+"</b><br>"+B+"</p>";
	h += "<image class='scaleOn' src='"+C+"' border='0' style='position:absolute;top:140px;left:100px;width:55px;height:55px;'>";
	h += '<a href=""><button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="position:absolute;top:0;right:10px;">&times;</button></a>';
	h += "</div>";
	
	$("#modal-window2").addClass("modalpreview");
	$("#modal-window2").addClass("modalpreview600");
	$("#modal-window2").html(h);
	$("#modal-window2").modal('show');
// 	alert(A+"-"+B+"-"+C);
} 
$push2press.previewpage = function(URL,A,B,C) {
	var h = "";
	h += "<div style='position:relative;width:500px;height:500px;'>";
	h += "<image src='images/iphone-preview.png' border='0' class='scaleOn' style='width:390px;position:absolute;top:-160px;right:24px;'>";
	h += "<iframe frameborder='0' src='"+URL+"' class='scaleOn' style='position:absolute;top:20px;right:60px;width:320px;height:400px;'></iframe>";

//	h += "<p style='position:absolute;top:130px;left:180px;width:200px;height:50px;font-size:14px;line-height:14px;'><b>"+A+"</b><br>"+B+"</p>";
//	h += "<image src='"+C+"' border='0' style='position:absolute;top:129px;left:115px;width:55px;height:55px;'>";
	h += '<a href=""><button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="position:absolute;top:0;right:10px;">&times;</button></a>';
	h += "</div>";
	
	$("#modal-window2").removeClass("modalpreview");
	$("#modal-window2").removeClass("modalpreview600");
	$("#modal-window2").html(h);
	$("#modal-window2").modal('show');
// 	alert(A+"-"+B+"-"+C);
} 

$push2press.preview2 = function(URL) {
	var h = "";
	
	h +="<iframe frameborder='0' src='"+URL+"' style='width:100%;height:100%;'></iframe>";
	
	$("#modal-window2").removeClass("modalpreview");
	$("#modal-window2").html(h);
	$("#modal-window2").modal('show');
}

$push2press.go = function(S) {
	document.location.href=S;
}

$push2press.ckedit = function(S,H,W) {
	CKEDITOR.replace( S, {
		toolbar : 'Basic',
		width : H,
		height : W,
		filebrowserBrowseUrl : '/bootStrap/ckfinder/ckfinder.html',
		filebrowserImageBrowseUrl : '/bootStrap/ckfinder/ckfinder.html?type=Images',
		filebrowserFlashBrowseUrl : '/bootStrap/ckfinder/ckfinder.html?type=Flash',
		filebrowserUploadUrl : '/bootStrap/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
		filebrowserImageUploadUrl : '/bootStrap/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images',
		filebrowserFlashUploadUrl : '/bootStrap/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash'
	});
}

$push2press.push = function(ID,TO,MESSID,MESS) {
	var h = "";
	h += "<div class='modal-header'>";
 	h += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
	h += "<h3>Send Push Notification</h3>";
	h += "</div>";
	h += "<div class='modal-body'>";
    h += "<iframe style='width:90%; height:300px;' frameborder='no' src='api.php?action=pushwindow&id="+ID+push2press.rnd()+"'></iframe>";
	h += "</div>";
	h += "<div class='modal-footer'>";
	h += "</div>";
    
	$("#modal-window").html(h);
	$("#modal-window").modal({
		show : true
	}).css("height","inherit").css("width","500px").css("margin-left","-250px").css("left","50%");

/*
	var h = "";
    h += "<div class='plain-hero-unit'>";
    h += ID;
    h += "</div>";
    
	$("#modal-window").load("api.php?action=pushwindow&id="+ID);
	$("#modal-window").modal({
		show : true
	});
*/
}

$push2press.push1 = function(ID,TO,MESSID,MESS) {
	var h = "";
    h += "<div class='plain-hero-unit'>";
    h += ID;
    h += "</div>";
    
	$("#modal-window").load("api.php?action=pushwindow1&id="+ID);
	$("#modal-window").modal({
		show : true
	});

}
	
$push2press.push2 = function(ID,TO,MESSID,MESS) {
	var h = "";
	h += "<div class='modal-header'>";
 	h += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
	h += "<h3>Send Push Notification</h3>";
	h += "</div>";
	h += "<div class='modal-body'>";
    h += "<iframe style='width:90%; height:300px;' frameborder='no' src='api.php?action=pushwindow2&id="+ID+push2press.rnd()+"'></iframe>";
	h += "</div>";
	h += "<div class='modal-footer'>";
	h += "</div>";
    
	$("#modal-window").html(h);
	$("#modal-window").modal({
		show : true
	}).css("height","inherit").css("width","500px").css("margin-left","-250px").css("left","50%");


/*
	var h = "";
    h += "<div class='plain-hero-unit'>";
    h += ID;
    h += "</div>";
    
	$("#modal-window").load("api.php?action=pushwindow2&id="+ID);
	$("#modal-window").modal({
		show : true
	});
*/
}
push2press.rnd = function() {
	return "&__"+new Date().getTime();
}
$push2press.push3 = function(ID,TO,MESSID,MESS) {
	var h = "";
//    h += "<div class='content-border'>";
	h += "<div class='modal-header'>";
 	h += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
	h += "<h3>Send Push Notification</h3>";
	h += "</div>";
	h += "<div class='modal-body'>";
    h += "<iframe style='width:90%; height:300px;' frameborder='no' src='api.php?action=pushwindow3&id="+ID+push2press.rnd()+"'></iframe>";
	h += "</div>";
	h += "<div class='modal-footer'>";
	h += "</div>";
    
//	$("#modal-window").load("api.php?action=pushwindow3&id="+ID);
	$("#modal-window").html(h);
	$("#modal-window").modal({
		show : true
	}).css("height","inherit").css("width","500px").css("margin-left","-250px").css("left","50%");



}

push2press.popupWin = function(URL,NAME) {
	var _NAME = (NAME && NAME != "") ? "name='"+NAME+"'" : "";
	var h = "";
//    h += "<div class='content-border'>";
	h += "<div class='modal-header'>";
 	h += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
	h += "</div>";
	h += "<div class='modal-body'>";
    h += "<iframe "+_NAME+" frameborder='0' width='90%' height='90%' src='"+URL+push2press.rnd()+"' marginwidth='0' marginheight='0' scrolling='no' />";
	h += "</div>";
	h += "<div class='modal-footer'>";
	h += "</div>";
    
//	$("#modal-window").load("api.php?action=pushwindow3&id="+ID);
	$("#modal-window").html(h);
	$("#modal-window").modal({
		show : true
	}).css("height","inherit").css('width','600px').css("marginLeft","-300px").css('height','500px');
}




$push2press.getlist = function(catid) {
	var sortedIDs = $("#sortable").sortable( "toArray" );
//	alert(sortedIDs)
//	console.log(sortedIDs);
	var lnk = "api.php?action=do-volgorde&catid="+catid+"&order="+sortedIDs;
	document.location.href=lnk;
}

$(function() {
	$("#sortable").sortable({
		group: 'nested',
//		nested : true,
		placeholder: "ui-state-highlight",
		afterMove : function ($placeholder, container) {
			console.log("After Move");
		},
		onDrop : function ($item, container, _super) {
			console.log("drop");
		}
	});
	
	
	var oldContainer;
	
	push2press.group = $("ol.nested_with_switch").sortable({
	  group: 'nested',
//	  handle: 'i.icon-move',
	  exclude: 'x-nodrag',
	  containerSelector : "ol, ul",
//	  placeholder : "<li class='ui-state-highlight ui-nonumber'>&nbsp;</li>",
	  placeholder : "<div class='ui-state-highlight ui-nonumber'>&nbsp;</div>",
	  afterMove: function (placeholder, container) {
	    if(oldContainer != container){
	      if(oldContainer)
	        oldContainer.el.removeClass("active")
	      container.el.addClass("active")
	      
	      oldContainer = container
	    }
	  },
	  onDrop: function (item, container, _super) {
	    container.el.removeClass("active");


	  	var _item = $(item[0]);
	  	var _container = $(container.el[0]);
		if(_item.hasClass("x-page") && _container.hasClass('x-category')) {
			var _children = container.el.find(".x-page");
			var changeString = "";
		    for (var i=0; i < _children.length; i++) {
		    	if (i > 0) changeString += ",";
		    	changeString += _children[i].id.substring(21);
		    }
			console.log("This is a page move of ", _item.attr("id"), "children", _container.children.length, " find ", _children,changeString);
			
			var catid = _container.attr("id").substring(23);
			var lnk = "api.php?action=do-reorder-pages&catid="+catid+"&order="+changeString;
			console.log(lnk);
			$.ajax({
				url : lnk,
				success : function() {
				},
				fail : function() {
				}
			}); 
			
//			document.location.href=lnk;
			
			
			
			
		}
	 	if(_item.hasClass("x-category") && _container.hasClass('x-root')) {
			var _children = container.el.find(".x-category.sort-item");
			var changeString = "";
		    for (var i=0; i < _children.length; i++) {
		    	if (i > 0) changeString += ",";
		    	changeString += _children[i].id.substring(20);
		    }
			console.log("This is a category move of ", _item.attr("id"), "children" ,  _container.children.length, " find ", _children,changeString);
			var lnk = "api.php?action=do-reorder-cats&order="+changeString;
			console.log(lnk);
			$.ajax({
				url : lnk,
				success : function() {
				},
				fail : function() {
				}
			}); 
			
			
	 	}


	    /*
	    var items = container.el.find(".sort-item");
	    console.log(items);
	    for (var i=0; i < items.length; i++) {
		    console.log(i+" ) "+$(items[i]).attr("data_p2p_type"));
		    console.log(i+" ) "+$(items[i]).attr("data_p2p_id"));
		}
	    
	    console.log(push2press.group.sortable("serialize").get().join("\n"));
	    console.log(push2press.group.sortable("serialize").get());
	    console.log(push2press.group.sortable("serialize"));
	    var items = push2press.group.sortable("serialize");
	    for (var i=0; i < items.length; i++) {
		    console.log(i+" ) ",items[i]);
		    console.log(i+" ) ",$(items[i]));
		    console.log(i+" ) "+$(items[i]).attr("data_p2p_type"));
		    console.log(i+" ) "+$(items[i]).attr("data_p2p_id"));
		    console.log(i+" ) "+items[i].children.length);
	    }
	    */
	    _super(item)
	  },
	  /*
	  serialize: function (parent, children, isContainer) {
	  	console.log(parent);
	  	console.log(children);
	  	console.log(isContainer);
	  	return isContainer ? children.join() : parent.text()
	  },
	  */
	  isValidTarget : function (item, container) {

	  	var _item = $(item[0]);
	  	var _container = $(container.el[0]);

		/* if item is page and container is category then it is ok .. also if item is category and container is root */
	 	if(_item.hasClass("x-page") && _container.hasClass('x-category')) return true; 
	 	if(_item.hasClass("x-category") && _container.hasClass('x-root')) return true; 
	  	return false;
		}
	});
	
	$("#sortable").disableSelection();
});


var uvOptions = {};
(function() {
	var uv = document.createElement('script'); uv.type = 'text/javascript'; uv.async = true;
	uv.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'widget.uservoice.com/wlHMAlKuZ4MLJmN2U2w2RA.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(uv, s);
})();


push2press.getEditorToolbar = function() {

	var retval  =
	[
		{ name: 'document', items : [ 'Bold','Italic','Underline','-','RemoveFormat', '-', 'Source','-','Preview','-','Templates','TextColor','BGColor' ] },
		{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo', '-', 'SelectAll','-', 'Scayt' ] },
		{ name: 'forms', items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 
	        'HiddenField' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Blockquote','CreateDiv',
		'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
		{ name: 'links', items : [ 'Link','Unlink','Anchor' , '-' , 'Image','-','Table','HorizontalRule','SpecialChar' ] },
		{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
		{ name: 'tools', items : [ 'ShowBlocks','-','About'] }	
	];
	
	return retval;

}

push2press.wizard_add_titanium_tags = function(TXT) {
	if (TXT.indexOf("<!--|") < 0) {
		return "<!--|\n"+ TXT + "\n|-->"
	}
	return TXT
}
push2press.wizard = function(TXT) {
	var lines = TXT.split("\n");
	var S = "";
	var wiz = "";
	var wizzard_array = [];
	
	for (var i=0; i < lines.length; i++) {
		var line = lines[i];
		if (line.indexOf("wiz:#") == 0) {
			// do nothing - this is a name or meta data about the plugin
			
		} else if (line.indexOf("wiz:") == 0) {
			var line_parts = line.split(":");
			wiz += "<td>"+line_parts[1]+"</td>";
			wiz += "<td> : </td>";
			wiz += "<td><input id='wiz-field-"+wizzard_array.length+"' type='text' value='"+line_parts[3]+"'></td></tr>";
			wizzard_array.push(line_parts[2]);
		
		} else {
			S += (line+"\n") ;
		}
	}
	if (wiz != "") {
		push2press.wizzardsubmit = function() {
			var wizzardvars = "";
			var Q = '"';
			for (var i=0; i < wizzard_array.length; i++) {
				console.log($("#wiz-field-"+i));
				wizzardvars += "var "+wizzard_array[i]+" = " + Q + $("#wiz-field-"+i).val() + Q + ";\n";
			}
			document.getElementById('page_type').value = "TI";
			push2press.edit_with_code(push2press.wizard_add_titanium_tags(wizzardvars + S));
			$("#modal-window").modal('hide');
			
		}


		wiz += "<tr><td>&nbsp;</td><td>&nbsp;</td><td><a href='javascript:push2press.wizzardsubmit();'>OK</a></td></tr>";
		wiz = "<h1>Wizzard</h1><table class='table'>"+wiz+"</table>";
		$("#modal-window").html(wiz);
		$("#modal-window").modal({
			show : true
		});
	} else {
		document.getElementById('page_type').value = "TI";
		document.getElementById('elm12').value = push2press.wizard_add_titanium_tags(S);
		push2press.selectAppropriateEditor("TI");
	}
}

push2press.changePageType = function() {
	var new_value = this.value;
	if (new_value.indexOf("ti|") == 0) {
		/* if it starts with ti| then it means it is a template from the plugins folder */
		var new_value_split = new_value.split("|");
		$.ajax({
			url : new_value_split[1], 
			success : function(data) {
				push2press.wizard.call(this,data);
			},
			cache: false
		});
		return;
	}


	document.getElementById('page_type').value = new_value;
	push2press.selectAppropriateEditor(new_value);
}
push2press.setInitialPage_type = function(TYPE) {
	$(function() {
		push2press.selectAppropriateEditor(TYPE);
	})
}

push2press.edit_with_code = function(NEW_CONTENT) {
	console.log(CKEDITOR.instances);
	console.log(CKEDITOR.instances.elm12);
	if (!CKEDITOR.instances.elm12) {
		var elm12 = document.getElementById("elm12");
		if (NEW_CONTENT) elm12.value = NEW_CONTENT;
		return;
	}

	CKEDITOR.instances.elm12.destroy();
	var bottomSpace = document.getElementById("bottomSpace");
	if (bottomSpace) bottomSpace.style.width = "100%";

	var elm12 = document.getElementById("elm12");
	if (elm12) elm12.style.width = "99%";
	if (NEW_CONTENT) elm12.value = NEW_CONTENT;

}
push2press.edit_with_wysiwyg = function() {
	if (CKEDITOR.instances.elm12) return;

	$("#wysiwygbox").css("display","");
	
	var bottomSpace = document.getElementById("bottomSpace");
	if (bottomSpace) bottomSpace.style.width = "400px";
	if (bottomSpace) bottomSpace.style.marginLeft = "50px";
//	if (bottomSpace) bottomSpace.style.backgroundColor = "#000000";
	if (bottomSpace) bottomSpace.style.textAlign = "center";

	var elm12 = document.getElementById("elm12");
	if (elm12) elm12.style.width = "90%";
	
	CKEDITOR.replace( 'elm12', {
		skin : 'BootstrapCK-Skin',
		sharedSpaces : {top : 'topSpace',bottom : 'bottomSpace'},
		toolbar : 'mytoolbar',
		removePlugins : 'maximize,resize',
		width : 300,
		height : 360,
		toolbar_mytoolbar : push2press.getEditorToolbar(),
		filebrowserBrowseUrl : 'kcfinder/browse.php?type=files',
		filebrowserImageBrowseUrl : 'kcfinder/browse.php?type=images',
		filebrowserFlashBrowseUrl : 'kcfinder/browse.php?type=flash',
		filebrowserUploadUrl : 'kcfinder/upload.php?type=files',
		filebrowserImageUploadUrl : 'kcfinder/upload.php?type=images',
		filebrowserFlashUploadUrl : 'kcfinder/upload.php?type=flash'
	});
}
push2press.toolbars_a = [];
push2press.showtoolbar = function(n) {
	for (var i=0; i < push2press.toolbars_a.length; i++) {
		$(push2press.toolbars_a[i].obj).css("display","none");
		$("#toolbar-li-"+i).removeClass("active");
	}
	$(push2press.toolbars_a[n].obj).css("display","");
	$("#toolbar-li-"+n).addClass("active");
}
push2press.toolbars = function() {
	var toolboxmenu = $("#toolboxmenu");
	if (!toolboxmenu || toolboxmenu.length == 0) {

		var toolbox = $(".cke_toolbox");
		toolbox.prepend("<div id='toolboxmenu'>MENU</div>");
		var toolboxmenu = $("#toolboxmenu");
		
		
		var toolbars = toolbox.find(".cke_toolbar");

		var handles = "";
		push2press.toolbars_a = [];
		
		for (var i=0; i < toolbars.length; i++) {
			var name = $(toolbars[i]).find(".cke_voice_label").text();
			
			handles += "<li id='toolbar-li-"+i+"'><a href='javascript:push2press.showtoolbar("+i+");'>"+name+"</a></li>";
			$(toolbars[i]).css("display","none");
			push2press.toolbars_a.push({
				i : i,
				obj : toolbars[i]
			});

			
		}
		
		toolboxmenu.html("<div id='p2p-custom-navbar'><ul class='nav nav-tabs'>"+handles+"</ul></div>");

	}
}
push2press.selectAppropriateEditor = function(TYPE) {

	if (TYPE == "TI") {
		push2press.edit_with_code();
		setTimeout(push2press.editwithace,2000);
			
	} else {
		push2press.edit_with_wysiwyg();
	}
}

push2press.editwithace = function() {
	var txt = $("#elm12").val();
	
	txt = $.trim(txt);		// trim whitespace
	
	if (txt.indexOf("<!--|") === 0) {
		txt = txt.split("|",2)[1];
		// look for --> at the end of the textarea
		if (txt[txt.length-1] === ">" && txt[txt.length-2] === "-" && txt[txt.length-3] === "-" && txt[txt.length-4] === "|") {
			txt = txt.substring(0,txt.length - 4);
		}
		if (txt[txt.length-1] === ">" && txt[txt.length-2] === "-" && txt[txt.length-3] === "-") {
			txt = txt.substring(0,txt.length - 3);
		}
	}
		
    push2press.editor = ace.edit("editor");
    push2press.editor.setTheme("ace/theme/twilight");
    push2press.editor.getSession().setMode("ace/mode/javascript");
    push2press.editor.setValue(txt);
    
    $("#xx-p2p-ace-tr").css("display","");
	$("#wysiwygbox").css("display","none");
}
push2press.backwithace = function() {
	var txt = push2press.editor.getValue(txt);

	txt = $.trim(txt);		// trim whitespace
	
	if (txt.indexOf("<!--|") !== 0) {
		txt = "<!--|" + txt + "|-->"; 
	}
	$("#elm12").val(txt);

}
push2press.preparePageEditSubmit = function(form) {
    if ($("#xx-p2p-ace-tr").css("display") != "none") {
    	push2press.backwithace();
    } else {
    }
	console.log(form);
	return false;
}

push2press.choosePageType = function() {
	var h = "";
	push2press.gotopage = function(n) {
		$("#modal-window2").modal('hide');
		var fn = function() {
			ths = {};
			ths.value = _pagetypes[n].p;
			push2press.changePageType.call(ths);
		};
		setTimeout(fn,1000); 
	}
	h += "<div class='modal-head'>";
	h += "<h1>Choose from these pre made templates</h1>";
	h += "<div> &nbsp;</div>"
	h += "<div> &nbsp;</div>"
	h += "</div>";
	h += "<div class='modal-body'>";
//	h += "<form>";
	h += "<input style='position:absolute; top:32px;' type='text' id='filter'>";
	h += "<ul class='plainlist' style='max-height:330px;'>";
	for (var i=0; i < _pagetypes.length; i++) {
		h += "<li class='plainlist'>";
		h += "<table class='table table-condensed' width='95%'>";
		h += "<tr><td valign='top' width='30%'>";
		h += "<div class='overflowhidden'><img height='40' src='"+_pagetypes[i].i+"'></div>";
		h += "<div>&nbsp;</div>";
		h += "</td><td valign='top' width='5%'>";
		h += "&nbsp;";
		h += "</td><td width='55%'>";
		h += "<div class='overflowhidden'><h2>"+_pagetypes[i].n+"</h2></div>";
		h += "</td><td width='10%'>";
		h += "<div><a class='btn' href='javascript:push2press.gotopage("+i+");'>Add</a></div>";
		h += "</td></tr>";
		h += "</table>";
		h += "</li>";
	}
	h += "</ul>";
//	h += "</form>";
	h += "</div>";
	h += "<div class='modal-footer'>";
	h += "footer";
	h += "</div>";
	$("#modal-window2").html(h);
	$("#modal-window2").modal('show').css("width","800px").css("margin-left","-400px").css("left","50%");
	$('#filter').filterList();

}

push2press.insertimage = function() {
	console.log(CKEDITOR);
	CKEDITOR.tools.callFunction(1,{});
}



push2press.popupWinFinderClose = function() {

	$("#kcfinder_div_iframe").html("");
	window.KCFinder = null;
	
}

push2press.popupWinFinderOpen = function() {

	var URL = "kcfinder/browse.php?type=images";
	$("#kcfinder_div_iframe").html("<iframe id='kcfinder_iframe' frameborder='0' width='90%' height='90%' src='"+URL+push2press.rnd()+"' marginwidth='0' marginheight='0' scrolling='no' />");

}
push2press.popupWinFinderOpenFunction = function() {}

push2press.popupWinFinder = function(URL,NAME) {
	var _NAME = (NAME && NAME != "") ? "name='"+NAME+"'" : "";
	var URL = "kcfinder/browse.php?type=images";
	
	var h = "";
	h += "<div class='modal-header'>";
 	h += "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
	h += "</div>";
	h += "<div class='modal-body'>";
	h += "<div id='kcfinder_div_iframe'>"
//    h += "<iframe id='kcfinder_iframe' frameborder='0' width='90%' height='90%' src='"+URL+push2press.rnd()+"' marginwidth='0' marginheight='0' scrolling='no' />";
	h += "</div>";

	h += "</div>";
	h += "<div class='modal-footer'>";
	h += "</div>";
    
	$("#modal-window").html(h);
	
	$('#modal-window').on('shown', function () {
		push2press.popupWinFinderOpen();
		$('#modal-window').on('shown',function() {});
		// do something…
	});
	$('#modal-window').on('hide', function () {
		push2press.popupWinFinderClose();
		$('#modal-window').on('hide',function() {});
		// do something…
	});
	
    window.KCFinder = {
        callBack: function(url) {
            window.KCFinder = null;
            $("#modal-window").modal("hide");
//            field.value = url;
//            div.style.display = 'none';
//            div.innerHTML = '';

        }
    };
	
	
	$("#modal-window").modal({
		show : true
	}).css("height","inherit").css('width','600px').css("marginLeft","-300px").css('height','500px');


//    var div = document.getElementById('kcfinder_div');
/*
    if (div.style.display == "block") {
        div.style.display = 'none';
        div.innerHTML = '';
        return;
    }
*/
/*
    window.KCFinder = {
        callBack: function(url) {
            window.KCFinder = null;
            field.value = url;
            div.style.display = 'none';
            div.innerHTML = '';
        }
    };
*/
//    div.innerHTML = '<iframe name="kcfinder_iframe" src="kcfinder/browse.php?type=files'+push2press.rnd()+'" ' + 
//        'frameborder="0" width="90%" height="90%" marginwidth="0" marginheight="0" scrolling="no" />';
//    div.style.display = 'block';
	
	
	
}


function kcnew() {
	push2press.popupWinFinder();	// 'kcfinder/browse.php?type=images');
}


/* taken from the home menu */
var mq = window.matchMedia("(min-width: 500px)");

function WidthChange(mq) {

	if (mq.matches) {
		/* window width is at least 500px */
	} else {
		/* window width is less than 500px */
		$("i").addClass("icon-white");
	}
}
$(window).bind("resize", WidthChange(mq));





