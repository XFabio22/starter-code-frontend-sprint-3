
// // Exercise 6
// function validate() {
// 	var error = 0;
// 	// Get the input fields
// 	var fName = document.getElementById("fName");
// 	var fEmail = document.getElementById("fEmail");

// 	// Get the error elements
// 	var errorName = document.getElementById("errorName");
// 	var errorEmail = document.getElementById("errorEmail");  
	
// 	// Validate fields entered by the user: name, phone, password, and email
// 	if(fName.value == ""){
// 		error++;
// 	}

// 	if(fEmail.value == ""){
// 		error++;
// 	}
	 
// 	if(error>0){
// 		alert("Error");
// 	}else{
// 		alert("OK");
// 	}
// }
// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
// 	'use strict'
  
// 	// Fetch all the forms we want to apply custom Bootstrap validation styles to
// 	var forms = document.querySelectorAll('.needs-validation')
  
// 	// Loop over them and prevent submission
// 	Array.prototype.slice.call(forms)
// 	  .forEach(function (form) {
// 		form.addEventListener('submit', function (event) {
// 		  if (!form.checkValidity()) {
// 			event.preventDefault()
// 			event.stopPropagation()
// 		  }
  
// 		  form.classList.add('was-validated')
// 		}, false)
// 	  })
//   })()
$(function() {

	$.validator.setDefaults({
	  errorClass: 'invalid-feedback',
	  highlight: function(element) {
		$(element)
  
		  .addClass('is-invalid');
	  },
	  unhighlight: function(element) {
		$(element)
  
		  .removeClass('is-invalid');
	  },
	  errorPlacement: function (error, element) {
		if (element.prop('type') === 'checkbox') {
		  error.insertAfter(element.parent());
		} else {
		  error.insertAfter(element);
		}
	  }
	});
  
	$.validator.addMethod('strongPassword', function(value, element) {
	  return this.optional(element) 
		|| value.length >= 8
		&& /\d/.test(value)//metodo de validacion en contraseñas
		&& /[a-z]/i.test(value);
	}, 'La contraseña debe tener al menos 8 caracteres y al menos un número o una letra.')
  
	$("#register-form").validate({
	  rules: {
		registrationemail: {
		  required: true,
		  email: true,
		},
		registrationpassword1: {
		  required: true,
		  strongPassword: true
		},
		primernombre:{
			required: true,

		},
		segundonombre:{
			required: true,

		},numero:{
			required: true,
		},
		direccion:{
			required: true,
		}
	  },
	  messages: {
		"registrationemail": {
			  required: "Este campo es obligatorio.",
			  email: "Por favor, escribe una dirección de correo válida"
		  },
		  "registrationpassword1": {
			  required: "Este campo es obligatorio.",
			  minlength: "Por favor, no escribas menos de {0} caracteres."
		  },
		  "direccion": {
			  required: "Este campo es obligatorio.",

		  },
		   
		  "numero":{
			  required: "Este campo es obligatorio.",
			  number: "numero  no válido",
			  minlength: 5
		  },
		  "primernombre": {
			  required:"Este campo es obligatorio."
			},"segundonombre": {
				required:"Este campo es obligatorio."
			},
	  
	  	}
	});
  
	  $("#register-form").on('submit', function() {
		  if ($('#register-form').valid()) {
			  alert("formulario válido");
		  } else {
			  alert("formulario no válido");
		  }
	  });
  
  });