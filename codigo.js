
const txt = document.getElementById("text") ;
const cot = document.getElementById("contador") ;
const cdg = document.getElementById("codigos") ;
const btnc = document.getElementById("btn-cifrar") ;
const btnd = document.getElementById("btn-descifrar");
const result = document.getElementById("mjsresult") ;
const txr = document.getElementById("textresult") ;
const btncopy = document.getElementById("copy") ;
const ctn = document.getElementsByClassName("modalctn") ;
const modal= document.getElementsByClassName("modal");
const close = document.getElementById("close")

//para limitar caracteres.
//el evento "keyup" se activa cuando soltamos una tecla.

txt.addEventListener("keyup" , ()=>{
    cot.innerHTML = txt.value.length + "/100" ;
});


//función parseInt comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada.
//funcion del btn cifrar

btnc.addEventListener("click" , ()=>{
    if( txt.value == "" ){
        alert("Te falto ingresar tu mensaje secreto") ;
    }else if(cdg.value == ""){
        alert("Te falto ingresar una clave secreta") ;
    }else{
        result.innerHTML = "Su mensaje cifrado es:" ;
        txr.innerHTML = textresult;
        

    }
})

//funcion del btn descifrar

btnd.addEventListener("click", ()=>{
    if( txt.value == "" ){
        alert("Te falto ingresar tu mensaje secreto") ;
    }else if(cdg.value == ""){
        alert("Te falto ingresar una clave secreta") ;
    }else{
        result.innerHTML = "Su mensaje descifrado es:" ;
        let textresult = descifrar.decode(parseInt(cdg.value),txt.value);
        txr.innerHTML = textresult;
        
    }
})

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

function openR(){
    ctn.classList.remove("modalctn")
}


// Cerrar y abrir


