console.log( 'example.js sourced');

$(document).ready( function(){
  console.log( 'doc ready' );
  $( '#sendInfo' ).on( 'click', function(){
    console.log( 'sendInfo clicked' );
    // ajax POST to route on our server
    var creatureIn = $('#creatureIn').val();
    var noiseIn = $('#noiseIn').val();
    var objectToSend={
      creature: creatureIn,
      noise: noiseIn
    };
    $.ajax({
      type: 'POST',
      url: '/texter',
      data: objectToSend,
      success: function( data ){
        console.log( 'got this from server:', data );
      } // end success
    }); // end ajax
  }); // end sendInfo on click
}); // end doc ready
