/**
* waypoint
* https://github.com/imakewebthings/waypoints
*/
var $head = $( '.back-fx' );
$('.js-back-fx').each( function(i) {
    var $el = $( this ),
        animClassDown = $el.data( 'animateDown' ),
        animClassUp = $el.data( 'animateUp' );
    $el.waypoint( function( direction ) {
        if( direction === 'down' && animClassDown ) {
            $head.attr('class', 'back-fx js-back-fx ' + animClassDown);
        }
        else if( direction === 'up' && animClassUp ){
            $head.attr('class', 'back-fx js-back-fx ' + animClassUp);
        }
    }, { offset: '-25%' } );
});
