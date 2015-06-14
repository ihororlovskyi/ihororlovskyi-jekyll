// Header menu FX
var $head = $( '.sect-back' );
$('.waypoint').each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );
	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$head.attr('class', 'sect-back ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$head.attr('class', 'sect-back ' + animClassUp);
		}
	}, { offset: '-25%' } );
});
