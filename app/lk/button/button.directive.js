(function() {
    angular
        .module('lkCanvas')
        .directive('lkButton', lkButton);

        function lkButton(){
	        return lkButtonLink;
	    }
	    
	    function lkButtonLink(scope, element, attrs) {
			var ink, d, x, y;
			element.parent().css( {overflow: 'hidden', position: 'relative'});
			ink = element.prepend("<span class='lk-ink'></span>").find('.lk-ink');
			element.click(function(e){
				if(this.className.indexOf('u-disabled')>0) {
					return;
				}
				//incase of quick double clicks stop the previous animation
				ink.removeClass("animate");
				//set size of .ink
				if(!ink.height() && !ink.width())
				{
					//use eelement's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
					d = Math.max(element.outerWidth(), element.outerHeight());
					ink.css({height: d, width: d});
				}
				
				//get click coordinates
				//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
				x = e.pageX - element.offset().left - ink.width()/2;
				y = e.pageY - element.offset().top - ink.height()/2;
				//set the position and add class .animate
				ink.css({top: y+'px', left: x+'px'}).addClass("animate");
			})
	    }

})();


