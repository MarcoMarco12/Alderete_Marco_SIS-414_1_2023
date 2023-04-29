let suma = document.getElementById("boton");
let resta = document.getElementById("boton");
let multiplicacion = document.getElementById("boton");
let division = document.getElementById("boton");
let icm = document.getElementById("boton");

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
    let peso = document.querySelector('.peso').value
    let altura = document.querySelector('.altura').value
    const genero = document.querySelectorAll('.opcion')
    let saveGenro = ''
    for (let i = 0; i < genero.length; i++) {
        if(genero[i].checked){
            saveGenro = genero[i].value
            break;
        }
        
    }
    /**genero */

    console.log(saveGenro)
    const imc = ((peso)/ Math.pow((altura), 2)).toFixed(2);
    if (imc < 18){
        console.log(`Tu IMC es ${imc} tu estado es:\nBAJO PESO`);
    }
        
    else if (imc >= 18 && imc <= 24.9){
        console.log(`Tu IMC es ${imc} tu estado es:\nPESO NORMAL`);
    }
        
    else if (imc >= 25 && imc <= 29.9){
        console.log(`Tu IMC es ${imc} tu estado es:\nSOBRE PESO`);
    }
        
    else{
        console.log(`Tu IMC es ${imc} tu estado es:\nOBESIDAD`);
    }
    
    // switch(imc){
    //     case imc < 18:{
    //         console.log(`Tu IMC es ${imc.toFixed(2)} tu estado es:\nBAJO PESO`);
    //         break;
    //     }
            
    //     case imc >= 18 &&  imc <+ 24,9:{
    //         console.log(`Tu IMC es ${imc.toFixed(2)} tu estado es:\nPESO NORMAL`);
    //         break;
    //     }
            
    //     case imc >= 25 &&  imc <+ 29,9:{
    //         console.log(`Tu IMC es ${imc.toFixed(2)} tu estado es:\nSOBRE PESO`);
    //         break;
    //     }
            
    //     case imc >= 25 &&  imc <+ 29,9:{
    //         console.log(`Tu IMC es ${imc.toFixed(2)} tu estado es:\OBESIDAD`);
    //         break;
    //     }
            
    // }
}   
suma.addEventListener('click',sumarNumero);
resta.addEventListener('click',restarNumero);
multiplicacion.addEventListener('click',multiplicarNumero);
division.addEventListener('click',dividirNumero);
imc.addEventListener('click',imcNumero);