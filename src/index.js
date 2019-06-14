
function upperCase() {//está función va convertir el texto ingresado a mayusculas
  let mayus = document.getElementById("id_mensajeacifrar").value; //primero se toma el texto que ingresa el usuario
   document.getElementById("id_mensajeacifrar").value = mayus.toUpperCase();// a ese texto se convierte a mayúsculas
}

function soloNumeros(e) { //Está función permite restringir la entrada de texto
   let key = e.keyCode || e.which;
   let tecla = String.fromCharCode(key);
   let numeros = "1234567890";
   let especiales = [8, 37, 39, 46];

   let tecla_especial = false
    for(let i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(numeros.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

function soloLetras(e) {
    let key = e.keyCode || e.which;
    let tecla = String.fromCharCode(key);
    let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let especiales = [8, 37, 39, 46];
 
    let tecla_especial = false
     for(let i in especiales) {
         if(key == especiales[i]) {
             tecla_especial = true;
             break;
         }
     }
 
     if(letras.indexOf(tecla) == -1 && !tecla_especial)
         return false;
 }

 function cipher(){
     let getC = document.getElementById("id_mensajeacifrar").value;
     let dezplazamiento= Number (document.getElementById("id_offset").value);
     console.log(typeof id)
     let textonuevo="";
     let getCifra= [];
     for (let i=0; i<getC.length; i++){
        getCifra= ((getC.charCodeAt(i)-65+dezplazamiento)%26+65);
        textonuevo+=String.fromCharCode(getCifra);       
     }
        document.getElementById("id_resultado").value=textonuevo;
}
document.getElementById("id_cifrar").addEventListener("click",cipher);

function decipher (){
    
}
    