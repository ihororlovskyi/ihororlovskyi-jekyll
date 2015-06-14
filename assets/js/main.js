// Header menu FX
var $head = $( '.top' );
$('.waypoint').each( function(i) {
	var $el = $( this ),
		animClassDown = $el.data( 'animateDown' ),
		animClassUp = $el.data( 'animateUp' );
	$el.waypoint( function( direction ) {
		if( direction === 'down' && animClassDown ) {
			$head.attr('class', 'top ' + animClassDown);
		}
		else if( direction === 'up' && animClassUp ){
			$head.attr('class', 'top ' + animClassUp);
		}
	}, { offset: '-25%' } );
});
