const textoPrincipal = document.getElementById('text__principal')
const textoEncriptado = document.getElementById('text__encriptado')
const divEncriptado = document.querySelector(".div__secundario")
const divImagen = document.querySelector(".contenedor__imagen")
const botonEncriptar = document.getElementById('encriptar')
const botonDesencriptar = document.getElementById('desencriptar')
const botonCopiar = document.getElementById('copiar')

botonEncriptar.onclick = encriptar
botonDesencriptar.onclick = desencriptar
botonCopiar.onclick = copiar

function encriptar(){
    textoEncriptado.value = ""
    var texto = textoPrincipal.value
    const regEx = /[^a-z\s]/g 
    if(texto == ""){
        alert("Debe ingresar algún texto.")
    } 
    else if(regEx.test(texto)){
        alert("El texto no debe: \n   -Contener mayúsculas. \n   -Contener acentos ni caracteres especiales.")
    }
    else{
    var encriptacion = texto.replaceAll('i','imes').replaceAll('e','enter').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat')
    textoEncriptado.value += encriptacion
    divEncriptado.style.display="flex"
    divImagen.style.display="none"
    }
}

function desencriptar(){
    textoEncriptado.value = ""
    var texto = textoPrincipal.value
    const regEx = /[^a-z\s]/g 
    if(texto == ""){
        alert("Debe ingresar algun texto.")
    } 
    else if(regEx.test(texto)){
        alert("El texto no debe: \n   -Contener mayusculas. \n   -Contener acentos ni caracteres especiales.")
    }
    else{
    var desencriptacion = texto.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u')
    textoEncriptado.value += desencriptacion
    divEncriptado.style.display="flex"
    divImagen.style.display="none"
    }
}

function copiar(){
    textoEncriptado.select()
    document.execCommand("copy")
}

