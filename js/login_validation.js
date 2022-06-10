$(function() {

/* torzo de código SOLO para Bootrstrap 4 */
  $.validator.setDefaults({
    errorClass: 'invalid-feedback',
    highlight: function(element) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element) {
      $(element).removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

//login-form

$("#login-form").validate({
	rules: {
		"login-email": {
			required: true, //obligatorio 
			email: true
		},
		"login-password": {
			required: true,
			minlength: 8
		}
	},

	messages: {
		"login-email": {
			required: "Este campo es obligatorio introduce tu correo.",
			email: "Por favor, escribe una dirección de correo válida",
		},
		"login-password": {
			required: "Este campo es obligatorio. Contraseña tiene que tener 8 caracteres min",
			minlength: "Por favor, no escribas menos de {0} caracteres.",
		},
	}
});

$('#login-form').on('submit', function() {

  if ($('#login-form').valid()) {
    alert("formulario válido");
    //form.submit();
  } else {
      alert("formulario no válido");
  }
 
});


});




