'use strict';
/**
 * Realizar un programa que pida al usuario 2 números 
 * y realize las 4 operaciones básicas.
 *  Imprimir los resultados.
 */
let num1 = parseFloat(prompt("Ingrese un número: "));
let num2 = parseFloat(prompt("Ingrese otro número: "));

function suma(){
    num1 + num2;
}

function resta(){
    num1 - num2;
}

function multi(){
    num1 * num2;
}
function div(){
    if(num1!=0 && num2!=0){
    num1 / num2;        
    }
}

alert(console.log("El resultado de la suma es: " +suma, ". El resultado de la resta es: " +resta, ". El resultado de la multiplicación es: " +multi, ". El resultado de la división es: " +div));
