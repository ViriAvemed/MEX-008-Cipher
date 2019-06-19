
 let buttonCif = document.getElementById("id_cifrar");
 let buttonDecif = document.getElementById("id_decifrar");

 const llamando1 = () =>{
   let offset1 = parseInt(document.getElementById("id_offsetCif").value);
   let text1 = document.getElementById("id_msjACifrar").value;
   document.getElementById("id_result").innerHTML = window.cipher.encode(text1,offset1);/// primero se poner text uno porque asi se declaron en la funcion
 };//faltaba ; (buena practica)
    buttonCif.addEventListener("click", llamando1);


 const llamando2 =()=>{

   let offset2 = parseInt(document.getElementById("id_offsetDecif").value);
   let text2 = document.getElementById("id_msjADecifrar").value;
   document.getElementById("id_result2").innerHTML = window.cipher.decode(text2,offset2);///(se llamba a encode de nuevo hay llamar a decode) primero se poner text uno porque asi se declaron en la funcion
 };//faltaba ; (buena practica)
 buttonDecif.addEventListener("click", llamando2);

