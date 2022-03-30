//Codigo cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}  
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
 

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
}

// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd()

//Codigo triangulo

console.group("triangulo");
// const baseTriangulo = 5;
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 5;
// console.log("Lado 1:" + ladoTriangulo1 + "cm");
// console.log("Lado 2:" + ladoTriangulo2 + "cm");
// console.log("Base:" + baseTriangulo + "cm");

function perimetroTriangulo(base,l1,l2){
     
    return parseFloat(base)+parseFloat(l1)+parseFloat(l2);
}
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");


function areaTriangulo(base,h){
    return (parseFloat(base)*parseFloat(h))/2;
}
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// //Codigo del circulo
console.group("circulo");
// const radioCirculo = 5;
// console.log("El radio del cuadrado miden: " + radioCirculo + "cm");
// const diametroCirculo = radioCirculo*2;
// console.log("El diametro del cuadrado miden: " + diametroCirculo + "cm");
// //PI
// const PI = Math.PI;
// const perimetroCirculo =  diametroCirculo*PI;
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
function Diametro(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    return Diametro(radio)*Math.PI;
}

function areaCirculo(radio){
    return radio*radio*Math.PI;
}
// const areaCirculo =  PI*radioCirculo*radioCirculo;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");
console.groupEnd()


//HTML

function calcularPerimetro(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    alert("El perimetro es: " + perimetro + " cm");
}

function calcularArea(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    alert("El area es: " + area + " cm^2");
}
//HTML TRIANGULO

function calcularPerimetroT(){
    const input = document.getElementById("InputTriangulo");
    const value1 = input.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1,value2,value3);

    alert("El perimetro es: " + perimetro + " cm");
}

function calcularAreaT(){
    const input = document.getElementById("InputTriangulo");
    const value1 = input.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;
    const area = areaTriangulo(value1,value2);

    alert("El area es: " + area + " cm^2");
}


//HTML CIRCULO
function calcularPerimetroC(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);

    alert("El perimetro es: " + perimetro + " cm");
}

function calcularAreaC(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);

    alert("El area es: " + area + " cm^2");
}

function validar(l1,l2,l3){
    if(l1==l2){
        return true;
    }else if(l1==l3)
    {
        return true;
    }else if(l2==l3){
        return true;
    }else{
        return false;
    }
}

function calculoAltura(l1,l2,l3){
    
    let a ;
    let b ;
    if(l1==l2){
        a = l1;
        b = l3;
    }else if(l1==l3)
    {
        a = l1;
        b = l2;
    }else if(l2==l3){
        a = l2;
        b = l1;
    }

    const h = Math.sqrt((a*a) - ((b*b)/4));
    return h;

}

function calcularAltura(){
    const input = document.getElementById("InputTrianguloI");
    const value1 = input.value;
    const input2 = document.getElementById("InputTrianguloI2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTrianguloI3");
    const value3 = input3.value;
    const isosceles = validar(parseFloat(value1),parseFloat(value2),parseFloat(value3));

    if(isosceles === true){
        const altura = calculoAltura(parseFloat(value1),parseFloat(value2),parseFloat(value3));
        alert("La altura es: " + altura + " cm");
    }else{
        alert("No es un triangulo isosceles");
    }

    
}