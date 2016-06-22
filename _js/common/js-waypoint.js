/**
* waypoint
* https://github.com/imakewebthings/waypoints
*/
var $head = $( '.top-back' );
$('.js-waypoint').each( function(i) {
    var $el = $( this ),
        animClassDown = $el.data( 'animateDown' ),
        animClassUp = $el.data( 'animateUp' );
    $el.waypoint( function( direction ) {
        if( direction === 'down' && animClassDown ) {
            $head.attr('class', 'top-back ' + animClassDown);
        }
        else if( direction === 'up' && animClassUp ){
            $head.attr('class', 'top-back ' + animClassUp);
        }
    }, { offset: '-25%' } );
});
