(function() {
    angular
        .module('lkCanvas')
        .directive('lkButton', lkButton);

        function lkButton(){
	        return lkButtonLink;
	    }
	    
	    function lkButtonLink(scope, element, attrs) {
			var ink, d, x, y;
			element.css( {overflow: 'hidden'});
			ink = element.prepend("<span class='lk-ink'></span>").find('.lk-ink');
			element.click(function(e){
				if(this.className.indexOf('u-disabled')>0) {
					return;
				}
				// Si se hacen dos clicks seguidos para la animación anterior
				ink.removeClass("animate");
				// Pone el tamaño de .lk-ink
				if(!ink.height() && !ink.width())
				{
					//use eelement's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
					d = Math.max(element.outerWidth(), element.outerHeight());
					ink.css({height: d, width: d});
				}
				
				// Toma las coordenadas del click
				//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
				x = e.pageX - element.offset().left - ink.width()/2;
				y = e.pageY - element.offset().top - ink.height()/2;
				//set the position and add class .animate

				ink.css({top: y+'px', left: x+'px'}).addClass("animate");
			})
	    }

})();


