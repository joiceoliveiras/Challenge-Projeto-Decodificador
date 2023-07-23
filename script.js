var botaoCriptografar = document.querySelector(".btn-criptografar");
var botaoDescriptografar = document.querySelector(".btn-descriptografar");
var boneco = document.querySelector(".conteudoboneco");
var conteudo = document.querySelector(".conteudo-paragrafo");
var resultado = document.querySelector(".texto-resultado");

botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;

function criptografar(){
    ocultarAdiante();
    var caixatexto = recuperarTexto()
    resultado.textContent = criptografarTexto(caixatexto);
}

function descriptografar(){
    ocultarAdiante();
    var caixatexto = recuperarTexto()
    resultado.textContent = descriptografarTexto(caixatexto);
}

function recuperarTexto(){
    var caixatexto = document.querySelector(".caixatexto")
    return caixatexto.value
}

function ocultarAdiante(){
    boneco.classList.add("ocultar");
    conteudo.classList.add("ocultar");
}

function criptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function descriptografarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("olá"); 
});