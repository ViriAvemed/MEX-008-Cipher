
function encode () {
    let offset = document.getElementById("id_offset").value;
    let text= document.getElementById("id_mensajeacifrar").value;
    let newText="";
    offset = parseInt(offset);
   
      for ( let i=0; i<text.length; i++){
        let newAscii=0;
        let codeAscii = text.charCodeAt(i);

         if (codeAscii >=65 && codeAscii<=90){
            newAscii = (codeAscii-65+offset)%26+65;
         } else if (codeAscii >=97 && codeAscii<=122){
            newAscii = (codeAscii-97+offset)%26+97;
         } else if (codeAscii >=32 && codeAscii<=64){
           newAscii=codeAscii;
         }
           let letter=String.fromCharCode(newAscii);
           newText+=letter;    
       }    
        document.getElementById("id_resultado").value=newText;
       return newText;
    }
     document.getElementById("id_cifrar").addEventListener("click",encode);

 function decode () {
    let offset = document.getElementById("id_offset").value;
    let text= document.getElementById("id_mensajeacifrar").value;
    let newText = "";
    offset = parseInt(offset);

         for ( let i=0; i<text.length; i++){
           let newAscii=0;
           let codeAscii = text.charCodeAt(i);

           if (codeAscii >=65 && codeAscii<=90){
             let a1=((codeAscii-65-offset)%26); 
             if(a1<0){
                 a1=a1+26;
             }
               newAscii=a1+65;

           } else if (codeAscii >=97 && codeAscii<=122){
             let a1=((codeAscii-97-offset)%26); 
             if(a1<0){
                 a1=a1+26;
             }
               newAscii=a1+97;
             } else if (codeAscii >=32 && codeAscii<=64){
               newAscii=codeAscii;
             }
               let newLetter=String.fromCharCode(newAscii);
               newText+=newLetter;   
         }    
         document.getElementById("id_resultado").value=newText;
         return newText;
      }
       document.getElementById("id_decifrar").addEventListener("click",decode);
