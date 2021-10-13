console.log("prueba js")


$(document).ready(function(){



    $("#calcular").click(function(){

        let valor1 = $("#valor1").val()
        let valor2 = $("#valor2").val()
        let operacion = $("#operacion").val()
        let resultado = 0
            valor1 = parseFloat(valor1)
            valor2 = parseFloat(valor2)
            
     if (operacion == "suma"){
        resultado = valor1 + valor2
        $("#resultado").text(resultado)
     }
    
     else if (operacion == "resta"){
        resultado = valor1 - valor2
        $("#resultado").text(resultado)
     }
  
     else if (operacion == "multi"){
        resultado = valor1 * valor2
        $("#resultado").text(resultado)
        console.log(resultado)
     } 

     else if (operacion == "div"){
        resultado = valor1 / valor2
        $("#resultado").text(resultado)
        console.log(resultado)
     } 


     else if (operacion =="raiz"){
       resultado =  Math.sqrt(valor1)
       $("#resultado").text(`la raiz del primer numero es ${resultado}`)
     }

     
     
     else {
        $("#resultado").text(`Operacion erronea solo se permita suma,resta,multi,`)  
     }
    
    
    });



})
