// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
          RegistrarMascota();
          event.preventDefault()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()

  function RegistrarMascota(){
      let nombres = document.querySelector("#txtNombre").value;
      let raza = document.querySelector("#txtRaza").value;
      let especie = document.querySelector("#txtEspecie").value;
      let comentario = document.querySelector("#txtComentario").value;
      let foto = document.querySelector("#txtFoto").value;


      let url = `http://localhost:3000/mascotas`;
      let datos = {
        nombre:nombres,
        apellido:apellidos,
        comentario: comentario,
        especie: especie,
        foto: foto,
        estado: estado


      };

      fetch(url, {
        method:"POST",
        body: JSON.stringify(datos),
        headers:{
          "Content-Type" : "application/json"
        }
      }).then(res => res.json())
      .then(mensaje =>  {
          console.log(mensaje)
      })
    alert("REGISTRO EXITOSO")
  }
