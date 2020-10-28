$( document ).ready(function() {
  $( ".question-card").click(function() {
    theCardId = $(this).attr('id');
    $( ".info-modal, body" ).toggleClass( "active" );
    $("#info-modal-content").load(`/fragments/${theCardId}.html`);
  });
});
