function renderResponse(data) {
  var response = JSON.parse(JSON.stringify(data));
  var msg = "";
  if (response.status === "ok") {
    msg = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Iscrizione correttamente riuscita.</strong>';
    $("#flash-msg").html(msg);
    $('#create-form').trigger("reset");
  }
  else {
    var error_msg = "";
    if (response.errors) {
      // questo funzionerebbe se fosse possibile il post ajax cross-domain
      $.each(response.errors, function(k, v) {
        error_msg += ' '+v.msg+'('+v.param+'='+v.value+').';
      });
    } else {
      // purtroppo in jsonp non riusciamo a gestire l'errore, quindi messaggio generico
      error_msg = "(dati non validi o username già impegnata).";
    };
    msg = '<div class="alert alert-error"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Iscrizione fallita. '+error_msg+'</strong>';
    $("#flash-msg").html(msg);
  }
}

$(document).ready(function(){
  // Ajax submit JSONP
  $('#create-form').submit(function() {
    // check if valid, TODO : usare il submitHandler di validate()
    if(! $('#create-form').valid()) return false;
    var url = $('#create-form').attr("action"); 
    $.ajax({
      type: "GET",
      url: url,
      data: $('#create-form').serialize(),
      //crossDomain: true,
      dataType: 'JSONP',
      timeout: 3000,
      // qualunque sia l'esito viene gestito dalla funzione renderResponse()
      success: function(data)
      {
        renderResponse(data);
      },
      error: function(data)
      {
        renderResponse(data);
      },
      statusCode: {
        500: function() {
          renderResponse(data);
        }
      }  
    });
    return false;
  });

});