function ir() {
  var c = Pswd
  var u = Usernm

  if (document.form.password.value === c && document.form.username.value === u) {

    window.location = "periodico.html"



  } else {
    alert("error xd")
  }

  // xd



}
function ojo() {

  if (Pswd.type == 'password') {

    Pswd.type = 'text';

  }
  else if (Pswd.type == 'text') {

    Pswd.type = 'password'

  }
}
//http://127.0.0.1:8080/index.html

