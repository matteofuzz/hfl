$(document).ready(function(){
  
  $.validator.addMethod('chars', function (value, element) { 
    return this.optional(element) || /^[a-z|A-Z]+$/.test(value); 
  }, 'La stringa deve essere alfanumerica, sono ammessi solo i seguenti caratteri speciali: . - @.');
  
  $.validator.addMethod('alphacustom1', function (value, element) { 
    return this.optional(element) || /^[a-z|A-Z|\.|\-|@]+$/.test(value); 
  }, 'La stringa deve essere alfanumerica, sono ammessi solo i seguenti caratteri speciali: . - @.');
  
  $.validator.addMethod('alphacustom2', function (value, element) { 
    return this.optional(element) || /^[a-z|A-Z|\.|\-|@|!|_]+$/.test(value); 
  }, 'La stringa deve essere alfanumerica, sono ammessi solo i seguenti caratteri speciali: . - @ ! _.');
  
  $('#create-form').validate(
    {
      rules: {
        username: {
          rangelength: [6, 20],
          alphacustom1: true,
          required: true
        },
        password: {
          rangelength: [6, 20],
          alphacustom2: true,
          required: true
        },
        email: {
          email: true,
          required: true
        },
        name: {
          rangelength: [2, 30],
          chars: true,
          required: true
        },
        lastname: {
          rangelength: [2, 30],
          chars: true,
          required: true
        },
        gender: {
          required: true
        },
        age: {
          range: [10, 99],
          digits: true,
          required: true
        },
        terms: {
          range: [0, 1],
          digits: true,
          required: true
        }
      },
      highlight: function(element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
      },
      success: function(element) {
        $(element).closest('.control-group').removeClass('error').addClass('success');
      }
    }
  );
  
});

// username string di lunghezza tra i 6 e i 20 caratteri. La stringa deve essere alfanumerica, sono ammessi solo i seguenti caratteri speciali: . - @.
// password string di lunghezza tra i 6 e i 20 caratteri. La stringa deve essere alfanumerica, sono ammessi solo i seguenti caratteri speciali: . - @ ! _.
// email string di lunghezza tra i 6 e i 20 caratteri. La stringa deve rappresentare correttamente un'indirizzo email.
// name string di lunghezza tra i 2 e i 30 caratteri. La stringa deve contenere solo lettere.
// lastname string di lunghezza tra i 2 e i 30 caratteri. La stringa deve contenere solo lettere.
// gender string che può assumere unicamente i valori M ed F.
// age number che può assumere valori tra 10 e 99.
// terms number che può assumere i valori 0 e 1. Il valore richiesto è 1.