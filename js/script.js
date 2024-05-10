
document.getElementById("imcForm").addEventListener("submit",function(event){
    
    event.preventDefault(); //evita que el formulario se envie de forma predeterminada
    
    let altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultadoIMC = document.getElementById("resultadoIMC");

        
    if (altura === "" || peso === ""){
        alert("Ingrese valores");
    }

    altura = altura / 100;

    const IMC = peso / (altura * altura);
    resultadoIMC.textContent = IMC.toFixed(2); //Limita el resultado a 2 decimales

    if (IMC < 18.5){
        console.log("Bajo peso");
    }
    else if(IMC > 18.5 && IMC < 24.9){
        console.log("Normal");
    }
    else if(IMC > 25 && IMC < 29.9){
        console.log("Sobre peso");
    }
    else{
        console.log("Obesidad");
    }
});