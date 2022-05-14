function desencriptar() {
    var texto = document.querySelector("#txt-input").value;
    texto = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.querySelector("#txt-output").value = texto;
}

var boton = document.querySelector("#btn-desencriptar");
boton.addEventListener("click", function () {
    if(document.querySelector("#txt-input").value.match(/^[a-z ]*$/)) {
        desencriptar();
    } else {
        alert("Solo se permiten letras minusculas, sin caracteres especiales.")
    }
});