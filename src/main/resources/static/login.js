// Call the dataTables jQuery plugin
$(document).ready(function() {
  //on ready
  });

  async function iniciarSesion(){
   let datos = {};
   datos.email= document.getElementById('txtEmail').value;
   datos.password= document.getElementById('txtPassword').value;

    const request = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      //Esto agarra un objeto de javaScript y la transforma a un String de json
      body: JSON.stringify(datos)

    });
    console.log(datos);

    const respuesta= await request.text();
    if(respuesta != 'FAIL'){
      localStorage.token = respuesta;
      localStorage.email = datos.email;
      window.location.href = 'orla.html'
    }else{
      alert("Las credenciales son incorrectas.")
    }
  }