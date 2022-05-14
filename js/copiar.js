function copiar() {
    navigator.clipboard.writeText(
        document.querySelector("#txt-output").value
    );
}
document.querySelector("#btn-copiar").addEventListener("click", copiar);