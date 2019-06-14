
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

 const cipher = () => {
     let firstMsjC = document.getElementById("id_mensajeacifrar").value;
     let ofssetNumC= parseInt (document.getElementById("id_offset").value);
     let newMsjC="";
     for (let i=0; i<firstMsjC.length; i++){
       let getCodi= firstMsjC.charCodeAt(i);
       let newCipher= (getCodi-65+ofssetNumC)%26+65;
        newMsjC+=String.fromCharCode(newCipher);       
     }
        document.getElementById("id_resultado").value=newMsjC;
        return newMsjD;
}
document.getElementById("id_cifrar").addEventListener("click",cipher);

const decipher = () => {
    let firstMsjD =document.getElementById("id_mensajeacifrar").value;
    let ofssetNumD = parseInt (document.getElementById("id_offset").value);
    let newMsjD="";    
    for (let i=0; i<firstMsjD.length; i++){
    let getcod= firstMsjD.charCodeAt(i);
    let getcif=(getcod-65-ofssetNumD)%26+65;
    newMsjD+=String.fromCharCode(getcif);
}
    document.getElementById("id_resultado").value=newMsjD;
    return newMsjD;
    }

document.getElementById("id_decifrar").addEventListener("click",decipher);
