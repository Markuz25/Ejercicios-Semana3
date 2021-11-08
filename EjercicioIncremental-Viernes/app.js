function calcular(numeroAmigos,callback){
    console.log(numeroAmigos);
    console.log("Hola Tecler");
    callback();
}
function callback(){
    console.log("Hola callback");
}
calcular(5,callback);