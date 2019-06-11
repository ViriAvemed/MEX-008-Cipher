const offset = document.getElementById("id_offset").value; //se pide al usuario un digito de desplazaiento 
const mensaje = document.getElementById("id_mensajeacifrar").value; //se pide ingresar un mensaje al usuario
const resultado = document.getElementById("id_resultado").value; //arrojará el texto cifrado o decifrado

function upperCase() {
    let mayus = document.getElementById("id_mensajeacifrar").value;
    document.getElementById("id_mensajeacifrar").value = mayus.toUpperCase();
    sinAcentos();
}
