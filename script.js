const Usernm = document.getElementById('Usernm');
const Pswd = document.getElementById('Pswd');
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();

    const data = {
        Usernm: Usernm.value,
        Pswd: Pswd.value
    };

    console.log(data);

    // Realizar la redirección a inicion.html con parámetros
    window.location = "inicion.html"

});

function ojo(){

if (Pswd.type == 'password')
{

    Pswd.type = 'text';

}
else if(Pswd.type == 'text'){
   
    Pswd.type = 'password'

}



}




