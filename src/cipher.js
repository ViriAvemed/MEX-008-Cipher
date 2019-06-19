window.cipher = {

  encode: (text1, offset1) => {
    let newText1 = "";
    for (let i = 0; i < text1.length; i++) {//se tenia newText1 en lugar dela variable de entrada
      let newAscii = 0;
      let codeAscii = text1.charCodeAt(i);//se tenia newText1 en lugar dela variable de entrada

      if (codeAscii >= 65 && codeAscii <= 90) {
        newAscii = (codeAscii - 65 + offset1) % 26 + 65;
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        newAscii = (codeAscii - 97 + offset1) % 26 + 97;
      } else {
        newAscii = codeAscii;
      }
      let letter = String.fromCharCode(newAscii);
      newText1 += letter;
    }
    return newText1;
  },

  decode: (text2, offset2) => {
    let newText2 = "";

    for (let i = 0; i < text2.length; i++) {//se tenia newText2 en lugar dela variable de entrada(text2)
      let newAscii = 0;
      let codeAscii = text2.charCodeAt(i);//se tenia newText2 en lugar dela variable de entrada(text2)

      if (codeAscii >= 65 && codeAscii <= 90) {
        let a1 = ((codeAscii - 65 - offset2) % 26);
        if (a1 < 0) {
          a1 = a1 + 26;
        }
        newAscii = a1 + 65;
      } else if (codeAscii >= 97 && codeAscii <= 122) {
        let a1=(codeAscii - 97 - offset2) % 26;
        if (a1 < 0) {//faltaba agregar esta concdicion que sirve para evitar el modulo -1 y asi no se salga del parametrode 26 letras
          a1 = a1 + 26;
        }
        newAscii = a1 + 97;
      } else {
        newAscii = codeAscii;
      }
      let letter = String.fromCharCode(newAscii);
      newText2 += letter;
    }

    return newText2;

  }
};
