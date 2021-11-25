//cifrado en metodo de Cesar
const text = document.getElementById("text");
const cont = document.getElementById("contador");
const cod = document.getElementById("codigos");
const btncopy = document.getElementById("copy") ;
const textresult = document.getElementById("textresult")
//El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada

//limite de caracteres

text.addEventListener("keyup" , ()=>{
    cont.innerHTML = text.value.length + "/100" ;
});

window.addEventListener("load",inicio,true);

function inicio(){
    document.getElementById("text").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    })
    
    document.getElementById("btn-cifrar").addEventListener("click", function(){
        if(text.value == "" ){
            alert("Te falto ingresar tu mensaje secreto") ;
        }else if(cod.value == ""){
            alert("Te falto ingresar una clave secreta") ;
        }else{
        let texto = document.getElementById("text").value ;
        let code = document.getElementById("codigos").value ;
        textresult.value = cifrarC(texto , code);
        document.getElementById("Cuadro2").style.visibility = "visible";
        document.getElementById("mjsresult").innerHTML = "Su mensaje cifrado es:" };

    },true)
    document.getElementById("btn-descifrar").addEventListener("click", function(){
        if( text.value == "" ){
            alert("Te falto ingresar tu mensaje secreto") ;
        }else if(cod.value == ""){
            alert("Te falto ingresar una clave secreta") ;
        }else{
        let texto = document.getElementById("text").value ;
        let code = document.getElementById("codigos").value ;
        textresult.value = descifrarC(texto , code);
        document.getElementById("Cuadro2").style.visibility = "visible";
        document.getElementById("mjsresult").innerHTML = "Su mensaje descifrado es:" };

    },true)
}

//funciones

//replace() para reemplazar un solo carácter en una cadena de Java

function cifrarC (texto, code){
    if(!texto)
        return "";
    const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    code = (code % 27 + 27) % 27 ;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+code)%27]);
    
}

function descifrarC (texto, code){
    if(!texto)
        return "";
    const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    code = (code % 27 + 27) % 27 ;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-code)%27]);
    
}

function cleartxt(){
   text.value = "";
   text.innerHTML = "";
   cont.innerHTML = "0/100";
   cod.value = "";
   btncopy.textContent = "📑Copiar"
}

//BTN copiar
btncopy.addEventListener("click", ()=>{
    document.getElementById("textresult").select();
    document.execCommand("copy");
    setTimeout(()=>{
        btncopy.textContent = "Copiado!";
    }, 100);


})

//Cerrar

document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("Cuadro2").style.visibility = "hidden";
    cleartxt()

})

//btn




