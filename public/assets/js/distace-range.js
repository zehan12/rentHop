(function($) {
    "use strict";
	$( "#mySlider" ).slider({
		range: true,
		min: 5000,
		max: 500000,
		values: [ 5000, 20000],
		slide: function( event, ui ) {
			$( "#price" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});

	$( "#price" ).val( "$" + $( "#mySlider" ).slider( "values", 0 ) +
			   " - $" + $( "#mySlider" ).slider( "values", 1 ) );
})(jQuery);