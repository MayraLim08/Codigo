
const txt = document.getElementById("text") ;
const cot = document.getElementById("contador") ;
const cdg = document.getElementById("codigos") ;
const btnc = document.getElementById("btn-cifrar") ;
const btnd = document.getElementById("btn-descifrar");
const result = document.getElementById("mjsresult") ;
const txr = document.getElementById("textresult") ;
const btncopy = document.getElementById("copy") ;
const ctn = document.getElementsByClassName("contenedor") ;

//para limitar caracteres.
//el evento "keyup" se activa cuando soltamos una tecla.

txt.addEventListener("keyup" , ()=>{
    cot.innerHTML = txt.value.length + "/100" ;
});


//función parseInt comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada.
//funcion del btn cifrar

btnc.addEventListener("click" , ()=>{
    if( txt.value = "" ){
        alert("Te falto ingresar tu mensaje secreto") ;
    }else if(cdg.value == ""){
        alert("Te falto ingresar un codigo") ;
    }else{
        result.innerHTML = "Su mensaje cifrado es:" ;
        let textresult = cifrar.encode(parseInt(cdg.value),txt.value);
        txr.innerHTML = textresult;
        openModal()
    }
})

/*
const cifrar = {
    encode(codigos,text){
      if (text == ""){ throw new TypeError;}
      let letter;
      let textEncode = "";
      for(let i = 0; i < text.length; i++){
        letter = text.charCodeAt(i);
        msgEncode += String.fromCharCode(getLetter(letter,codigos));
      }
      return textEncode;
    }
}
*/

//funcion del btn descifrar

btnd.addEventListener("click", ()=>{
    if( txt.value = "" ){
        alert("Te falto ingresar tu mensaje secreto") ;
    }else if(cdg.value == ""){
        alert("Te falto ingresar un codigo") ;
    }else{
        result.innerHTML = "Su mensaje cifrado es:" ;
        let textresult = descifrar.decode(parseInt(cdg.value),txt.value);
        txr.innerHTML = textresult;
    }
})
/*
decode(codigos,text){
    if (text == ""){ throw new TypeError;}
    codigos *= -1;
    let letter;
    let textDecode = "";
    for(let i = 0; i < text.length; i++){
      letter = text.charCodeAt(i);
      textDecode += String.fromCharCode(getLetter(letter,codigos));
    }
    return textDecode;
  }
};
*/

//setTimeout() es usada para retrasar la ejecución de la función pasada como argumento por un periodo de tiempo determinado
//btn copiar

btncopy.addEventListener("click", ()=>{
    txr.select();
    document.execCommand("copy");
    setTimeout(()=>{
        btncopy.textContent = "Copiado!";
    }, 100);


})

//funciones
/*
function openModal(){
    ctn.classList.remove("containerClose");
    modal.classList.remove("modalClose");
}

function closeModal(){
    modal.classList.add("modalClose");
    clearMsg();
    setTimeout(()=>{
        btncopy.innerHTML = "<i class='fas fa-copy'></i> Copiar";
        ctn.classList.add("containerClose");
    }, 550);
}

function clearMsg(){
    txt.value = "";
    txt.innerHTML = "";
    cot.innerHTML = "0/280";
}
*/
