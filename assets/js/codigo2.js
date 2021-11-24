/*const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
*/

//cifrado en metodo de Cesar
//El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada

window.addEventListener("load",inicio,true);

function C(){
    document.getElementById("text").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase();
    })
    
    document.getElementById("btn-cifrar").addEventListener("click", function(){
        let texto = document.getElementById("text").value ;
        let code = document.getElementById("codigos").value ;
        document.getElementById("textresult").value = cifrarC(texto , code);

    },true)
    document.getElementById("btn-descifrar").addEventListener("click", function(){
        let texto = document.getElementById("text").value ;
        let code = document.getElementById("codigos").value ;
        document.getElementById("textresult").value = descifrarC(texto , code);

    },true)
}

//funciones

function cifrarC(texto , code){
    let resultado = "" ;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    code = (code % 27 + 27) % 27 ;
    
    if(texto){
        for(let i = 0; i<texto.length; i++){
            if(letras.indexOf(texto[i])!= -1){
                let posicion = ((letras.indexOf(texto[i])+ code)% 27);
                resultado += letras[posicion];

            }
            else{
                resultado += texto[i] ;
            }
        }
    }
   return resultado ;
}


