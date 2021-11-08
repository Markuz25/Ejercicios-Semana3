const usuarios = [];

function agregarUsuario(){
    const formulario = document.forms['formulario'];
    const nombre = formulario['nombre'];
    const apellido = formulario['apellido'];
    const password = formulario['password'];
    const email = formulario['email'];
    if (nombre.value != '' && apellido.value != '' && password.value != '' && email.value != '' ){
        const usuario = new Usuario(nombre.value,apellido.value,password.value,email.value);
        console.log(usuario.nombre);
        usuarios.push(usuario);
        mostrarUsuarios();
        alert('El usuario se ha agregado correctamente');
        console.log(usuarios);
    }else{
        alert('Datos Invalidos');
    }
}

function mostrarUsuarios(){
    let texto = '';
    for(let usuario of usuarios){
        texto += `<li>ID: ${usuario.idUsuario} ${usuario.nombreCompleto()}</li>`
    }
    document.getElementById('listaUsuarios').innerHTML = texto;
}