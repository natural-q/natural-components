"use strict";$.fn.editableTableWidget=function(e){return $(this).each(function(){var t,i,n=$.extend(((i=$.extend({},$.fn.editableTableWidget.defaultOptions)).editor=i.editor.clone(),i),e),o=$(this),r=n.editor.css("position","absolute").hide().appendTo(o.parent()),s=function(e){(t=o.find("td:focus")).length&&(r.val(t.text()).removeClass("error").show().offset(t.offset()).css(t.css(n.cloneProperties)).width(t.width()).height(t.height()).focus(),e&&r.select())},d=function(){var e,i=r.val(),n=$.Event("change");if(t.text()===i||r.hasClass("error"))return!0;e=t.html(),t.text(i).trigger(n,i),!1===n.result&&t.html(e)},a=function(e,t){return 39===t?e.next("td"):37===t?e.prev("td"):38===t?e.parent().prev().children().eq(e.index()):40===t?e.parent().next().children().eq(e.index()):[]};r.blur(function(){d(),r.hide()}).keydown(function(e){if(13===e.which)d(),r.hide(),t.focus(),e.preventDefault(),e.stopPropagation();else if(27===e.which)r.val(t.text()),e.preventDefault(),e.stopPropagation(),r.hide(),t.focus();else if(9===e.which)t.focus();else if(this.selectionEnd-this.selectionStart===this.value.length){var i=a(t,e.which);i.length>0&&(i.focus(),e.preventDefault(),e.stopPropagation())}}).on("input paste",function(){var e=$.Event("validate");t.trigger(e,r.val()),!1===e.result?r.addClass("error"):r.removeClass("error")}),o.on("click keypress dblclick",s).css("cursor","pointer").keydown(function(e){var t=!0,i=a($(e.target),e.which);i.length>0?i.focus():13===e.which?s(!1):17===e.which||91===e.which||93===e.which?(s(!0),t=!1):t=!1,t&&(e.stopPropagation(),e.preventDefault())}),o.find("td").prop("tabindex",1),$(window).on("resize",function(){r.is(":visible")&&r.offset(t.offset()).width(t.width()).height(t.height())})})},$.fn.editableTableWidget.defaultOptions={cloneProperties:["padding","padding-top","padding-bottom","padding-left","padding-right","text-align","font","font-size","font-family","font-weight","border","border-top","border-bottom","border-left","border-right"],editor:$("<input>")};