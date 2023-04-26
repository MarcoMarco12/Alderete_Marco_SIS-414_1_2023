let suma = document.getElementById("boton");
let resta = document.getElementById("boton");
let multiplicacion = document.getElementById("boton");
let divicion = document.getElementById("boton");
function sumarNumero() {
    let text1=document.getElementById("num1").value;
    let text2=document.getElementById("num2").value;
    let resultado= "";
    resultado=parseInt(text1) + parseInt(text2);
    console.log(resultado);
    alert("el resultado es:"+ resultado );
}
function restarNumero(){
    let text1=document.getElementById("num3").value;
    let text2=document.getElementById("num4").value;
    let resultado= "";
    resultado=+ parseInt(text1) - parseInt(text2);
    console.log(resultado);
    alert("el restante es:"+ resultado );
}
function multiplicarNumero(){
    let text1=document.getElementById("num5").value;
    let text2=document.getElementById("num6").value;
    let resultado= "";
    resultado=+ parseInt(text1) * parseInt(text2);
    console.log(resultado);
    alert("el resultado es:" + resultado );
}
function dividirNumero(){
    let text1=document.getElementById("num7").value;
    let text2=document.getElementById("num8").value;
    let resultado= "";
    resultado=+ parseInt(text1) / parseInt(text2);
    console.log(resultado);
    alert("el resultado es:"+ resultado );
}
function imcNumero(){
    let text1=document.getElementById("num9").value;
    let text2=document.getElementById("num10").value;
}   

suma.addEventListener('click',sumarNumero);
resta.addEventListener('click',restarNumero);
multiplicacion.addEventListener('click',multiplicarNumero);
divicion.addEventListener('click',dividirNumero);
