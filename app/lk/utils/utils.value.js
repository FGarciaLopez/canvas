// disparadores.value.js
(function() {
	angular
		.module('lkCanvas')
		.value( 'Utils', new Utils());

	function nl2br(str) {
	 var break_tag = '<br>';
	 return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + break_tag + '$2');
	}

	function Utils() {
		return  {
			nl2br: nl2br
		}
	}
})();	