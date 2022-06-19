let cantidad
let meses 
let total
let pagos
let interes

while((isNaN(cantidad) || isNaN(meses)) || cantidad <= 1000 || cantidad >50000 || meses > 12){
    alert("bienvenido al simulador de prestamos, recuerde que las cantidades a solicitar son de 1,000 a 50,000 pesos en un plazo maximo de 12 meses")
    cantidad = parseFloat(prompt("ingrese la cantidad deseada"))
    meses = parseInt(prompt("Ingrese los meses a pagar"))

    if(meses <= 3 && cantidad >= 1000 || cantidad <=50000){
        interes = 0.10
        total = cantidad + (cantidad * interes)
        pagos = total / meses
        console.log("el monto total a pagar es: " + total + " pesos y los pagos a " + meses + " meses son de: " + pagos.toFixed(2) + " pesos")
    }

    else if(meses >3 && meses <= 6 && cantidad >= 1000 || cantidad <=50000) {
        interes = 0.25
        total = cantidad + (cantidad * interes)
        pagos = total / meses
        console.log("el monto total a pagar es: " + total + " pesos y los pagos a " + meses + " meses son de: " + pagos.toFixed(2) + " pesos")
    
    }

    else if(meses >6 && meses <= 12 && cantidad >= 1000 || cantidad <=50000) {
        interes = 0.50
        total = cantidad + (cantidad * interes)
        pagos = total / meses
        console.log("el monto total a pagar es: " + total + " pesos y los pagos a " + meses + " meses son de: " + pagos.toFixed(2) + " pesos")
    
    }

    else if(meses > 12) {
        /*interes = 0.75
        total = cantidad + (cantidad * interes)
        pagos = total / meses
        console.log("el monto total a pagar es: " + total + " pesos y los pagos a " + meses + " meses son de: " + pagos.toFixed(2) + " pesos")*/
    
    }
}
/* PENDIENTE VALIDACIONES DE CANTIDAD Y MESES*/

