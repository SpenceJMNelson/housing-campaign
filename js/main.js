$( document ).ready(function() {
  $( ".question-card").click(function() {
    theCardId = $(this).attr('id');
    $( ".info-modal, body, .closelink-wrapper" ).toggleClass( "active" );
    $("#info-modal-content").load(`${location.origin}/fragments/${theCardId}.html`);
    $(".info-modal").scrollTop(0);
  });
});

$( document ).ready(function() {
  $( "#sponsorship-link").click(function() {
    theCardId = $(this).attr('id');
    $( ".info-modal, body, .closelink-wrapper" ).toggleClass( "active" );
    $("#info-modal-content").load(`${location.origin}/fragments/sponsorship.html`);
    $(".info-modal").scrollTop(0);
  });
});

$( document ).ready(function() {
  $( ".closelink").click(function() {
    $( ".info-modal, body, .closelink-wrapper" ).toggleClass( "active" );
  });
});
