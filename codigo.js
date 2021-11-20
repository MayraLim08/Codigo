
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
        document.getElementById("Cuadro2").style.visibility = "visible"
        result.innerHTML = "Su mensaje cifrado es:" ;
        cifrar(this);
    }
})

//funcion del btn descifrar

btnd.addEventListener("click", ()=>{
    if( txt.value == "" ){
        alert("Te falto ingresar tu mensaje secreto") ;
    }else if(cdg.value == ""){
        alert("Te falto ingresar una clave secreta") ;
    }else{
        document.getElementById("Cuadro2").style.visibility = "visible"
        result.innerHTML = "Su mensaje descifrado es:" ;
        descifrar(this);
    
        
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
//convierte datos binarios o cualquier tipo de dato a una representación imprimible
//en Base64
function cifrar(elemento){
    let palabra = txt.value ;
    let palabra_cifrada = btoa(palabra);
    txr.innerHTML = palabra_cifrada ;
}

function descifrar(elemento){
    let palabra = txt.value ;
    let palabra_descifrada = atob(palabra);
    txr.innerHTML = palabra_descifrada ;

}

function cleartxt(){
    txt.value = "";
    txt.innerHTML = "";
    cot.innerHTML = "0/100";
    cdg.value = "";
}

// Cerrar 

document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("Cuadro2").style.visibility = "hidden";
    cleartxt()

})








