function encriptar() {
    var texto = document.querySelector("#txt-input").value;
    texto = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.querySelector("#txt-output").value = texto;
}


function ocultar_mostrar(){
    document.querySelector("#btn-copiar").style.visibility="visible";
    document.querySelector("#txt-output").style.visibility="visible";
    document.querySelector("#txt1").style.visibility="hidden";
    document.querySelector("#txt2").style.visibility="hidden";
    document.querySelector("#muneco").style.visibility="hidden";
}

var boton = document.querySelector("#btn-encriptar");
boton.addEventListener("click", function () {    
    if(document.querySelector("#txt-input").value.match(/^[a-z ]*$/)) {
        encriptar();
        ocultar_mostrar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
});