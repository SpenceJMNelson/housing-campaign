$( document ).ready(function() {
  $( ".question-card").click(function() {
    $(".info-modal").scrollTop());
    theCardId = $(this).attr('id');
    $( ".info-modal, body, .closelink-wrapper" ).toggleClass( "active" );
    $("#info-modal-content").load(`/housing-campaign/fragments/${theCardId}.html`);
  });
});


$( document ).ready(function() {
  $( ".closelink").click(function() {
    $( ".info-modal, body, .closelink-wrapper" ).toggleClass( "active" );
  });
});
