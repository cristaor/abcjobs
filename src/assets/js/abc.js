function checkForm() {
   //console.log("Hello") 
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  /*Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })*/
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        var button = document.querySelector('button[type="submit"]');
        if (!form.checkValidity()) {
          button.disabled = true; 
      }
      else{button.disabled = false;}
        form.classList.add('was-validated')
    })
}
