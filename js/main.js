$( document ).ready(function() {
  $( ".question-card").click(function() {
    theCardId = $(this).attr('id');
    $( ".info-modal, body" ).toggleClass( "active" );
    $("#info-modal-content").load(`/housing-campaign/fragments/${theCardId}.html`);
  });
});


$( document ).ready(function() {
  $( ".closelink").click(function() {
    $( ".info-modal, body" ).toggleClass( "active" );
  });
});
