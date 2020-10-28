$( document ).ready(function() {
  $( ".question-card, .closelink" ).click(function() {
    $( ".info-modal, body" ).toggleClass( "active" );
  });
});
