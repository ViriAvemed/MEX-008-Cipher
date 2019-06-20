
//DECLARANDO VARIABLES DE LOS BOTONES QUE LLAMARAN A LA FUNCI[ON CIPHER
 let buttonCif = document.getElementById("id_cifrar");
 let buttonDecif = document.getElementById("id_decifrar");

 //FUNCION FLECHA PARA EJECUTAR WINDOW.CIPHER.ENCDODE
 const llamando1 = () =>{
   let offset1 = parseInt(document.getElementById("id_offsetCif").value);
   let text1 = document.getElementById("id_msjACifrar").value;
   document.getElementById("id_result").innerHTML = window.cipher.encode(text1,offset1);
   document.getElementById("id_msjACifrar").value = "";
 };
    buttonCif.addEventListener("click", llamando1);

//FUNCION FLECHA PARA EJECUTAR WINDOW.CIPHER.DECODE
 const llamando2 =()=>{

   let offset2 = parseInt(document.getElementById("id_offsetDecif").value);
   let text2 = document.getElementById("id_msjADecifrar").value;
   document.getElementById("id_result2").innerHTML = window.cipher.decode(text2,offset2);
   document.getElementById("id_msjADecifrar").value = "";

 };
 buttonDecif.addEventListener("click", llamando2);

//FUNCIONES DISPLAY PARA MOSTRAR U OCULTAR PANTALLAS
 const homeToMenu =()=>{
   document.getElementById("id_home").className = "hidden";
   document.getElementById("id_menu").className = "shown";
   document.getElementById("id_user").value = "";
   document.getElementById("id_password").value = "";
 };
 document.getElementById("id_ingresar").addEventListener("click",homeToMenu);

const menuToHome =()=>{
  document.getElementById("id_menu").className = "hidden";
  document.getElementById("id_home").className = "shown";
};
document.getElementById("id_return1").addEventListener("click",menuToHome);

const menuToNewPass =()=>{
  document.getElementById("id_menu").className = "hidden";
  document.getElementById("id_newPass").className = "shown";
};
document.getElementById("id_goNewPass").addEventListener("click",menuToNewPass);

const menuToSaved =()=>{
  document.getElementById("id_menu").className = "hidden";
  document.getElementById("id_passSaved").className = "shown";
};
document.getElementById("id_goSaved").addEventListener("click",menuToSaved);

const menuToConsult =()=>{
  document.getElementById("id_menu").className = "hidden";
  document.getElementById("id_consult").className = "shown";
};
document.getElementById("id_goConsult").addEventListener("click",menuToConsult);

const newToHome =()=>{
  document.getElementById("id_newPass").className = "hidden";
  document.getElementById("id_home").className = "shown";
  document.getElementById("id_offsetCif").value = "";
  document.getElementById("id_co").value = "";
  document.getElementById("id_appli").value = "";
  document.getElementById("id_result").innerHTML="";
};
document.getElementById("id_home3").addEventListener("click",newToHome);

const newToMenu =()=>{
  document.getElementById("id_newPass").className = "hidden";
  document.getElementById("id_menu").className = "shown";
  document.getElementById("id_offsetCif").value = "";
  document.getElementById("id_co").value = "";
  document.getElementById("id_appli").value = "";
  document.getElementById("id_result").innerHTML="";
};
document.getElementById("id_return3").addEventListener("click",newToMenu);


const savToMenu =()=>{
  document.getElementById("id_passSaved").className = "hidden";
  document.getElementById("id_menu").className = "shown";
  document.getElementById("id_saved").className = "shown";
};
document.getElementById("id_retunr2").addEventListener("click",savToMenu);

const savToHome =()=>{
  document.getElementById("id_passSaved").className = "hidden";
  document.getElementById("id_home").className = "shown";
  document.getElementById("id_saved").className = "shown";
 };
document.getElementById("id_home2").addEventListener("click",savToHome);

const consToMenu =()=>{
  document.getElementById("id_consult").className = "hidden";
  document.getElementById("id_menu").className = "shown";
  document.getElementById("id_offsetDecif").value = "";
  document.getElementById("id_result2").innerHTML="";
  };
document.getElementById("id_return4").addEventListener("click",consToMenu);

const consToHome =()=>{
  document.getElementById("id_consult").className = "hidden";
  document.getElementById("id_home").className = "shown";
  document.getElementById("id_offsetDecif").value = "";
  document.getElementById("id_result2").innerHTML="";
};
document.getElementById("id_home4").addEventListener("click",consToHome);

const intro =()=>{
  document.getElementById("id_home").className = "hidden";
  document.getElementById("instructions").className = "shown";
 };
document.getElementById("id_pasosboton").addEventListener("click",intro);

const inicio1 =()=>{
  document.getElementById("instructions").className = "hidden";
  document.getElementById("id_home").className = "shown";
};
document.getElementById("atras").addEventListener("click",inicio1);
