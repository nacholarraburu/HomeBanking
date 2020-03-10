//Declaración de variables
var nombreUsuario = "Juan Ignacio";
var saldoCuenta = 5000;
var limiteExtraccion = 1500;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;



function sumarDinero(dinero) {
    return saldoCuenta+=dinero;   
}

function restarDinero(dinero) {
    saldoCuenta-=dinero;
}
    


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}

    
//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimiteExtraccion =  parseInt(prompt("Ingresa el nuevo límite de extracción"));
    
      if(isNaN(nuevoLimiteExtraccion)) {
        alert('Ingresa valores numericos')
        return;
    }
    
    limiteExtraccion=nuevoLimiteExtraccion;
    actualizarLimiteEnPantalla();
    alert('Tu nuevo límite de extracción es: $' + nuevoLimiteExtraccion)
    
}

function extraerDinero() {
    
    var dineroExtraido = parseInt(prompt("¿Cuanto dinero quieres extraer?"));
    
        if(isNaN(dineroExtraido)) {
        alert('Ingresa valores numericos')
        return;
      }
    
    var saldoAnterior = saldoCuenta;


        if(dineroExtraido%100) {
        alert('Solo puedes extraer billetes de 100')
        return
    }
    

        if(dineroExtraido>limiteExtraccion) {
        alert('La cantidad que deseas extraer es mayor a tu limite de extracción.')
        return;
    }
    
        if(dineroExtraido<=saldoCuenta) {
        saldoCuenta-=dineroExtraido;
        alert('Has retirado : $' + dineroExtraido + '\n' + 'Saldo anterior:' + saldoAnterior + '\n' + 'Saldo actual: $' + saldoCuenta)
        actualizarSaldoEnPantalla();
    }

        else {
        alert('No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero')
    }
       
}


function depositarDinero() {
    var dineroDepositado = parseInt(prompt("¿Cuánto dinero quieres depositar?"));
    
        if(isNaN(dineroDepositado)) {
        alert('Ingresa valores numericos')
        return;
    }
    var saldoAnterior = saldoCuenta;
    saldoCuenta += dineroDepositado;
    alert('Has depositado : $' + dineroDepositado + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Saldo actual: $' + saldoCuenta)
    actualizarSaldoEnPantalla();
   
}

function pagarServicio() {

    function pagoDeServicios(agua, luz, internet, telefono) {
        if (saldoCuenta >= agua) {
            return true;
        } if (saldoCuenta >= luz) {
            return true;
        } if (saldoCuenta >= internet) {
            return true;
        } if (saldoCuenta >= telefono)
            return true;
        else {
            alert('No hay suficiente saldo en su cuenta para pagar este servicio.');
            return false;
        }
    }
    
        saldoAnterior = saldoCuenta;
        var pagarServicio = prompt('Ingrese el numero del servicio a pagar. ' + '\n' + '1 - Agua ' + '\n' + '2 - Luz' + '\n' + '3 - Internet' + '\n' + '4 - Telefono');
        
        
        switch (pagarServicio) {
            case '1':
                if (pagoDeServicios(agua)) {
                    saldoCuenta -= agua;
                    alert('Has pagado el servicio de Agua' + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Dinero descontado: $' + agua + '\n' + 'Saldo actual: $' + saldoCuenta);
                    actualizarSaldoEnPantalla();
                }
                break;
            case '2':
                if (pagoDeServicios(luz)) {
                    saldoCuenta -= luz;
                    alert('Has pagado el servicio de Luz' + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Dinero descontado: $' + luz + '\n' + 'Saldo actual: $' + saldoCuenta);
                    actualizarSaldoEnPantalla();
                }
                break;
            case '3':
                if (pagoDeServicios(internet)) {
                    saldoCuenta -= internet;
                    alert('Has pagado el servicio de Internet' + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Dinero descontado: $' + internet + '\n' + 'Saldo actual: $' + saldoCuenta);
                    actualizarSaldoEnPantalla();
                }
                break;
            case '4':
                if (pagoDeServicios(telefono)) {
                    saldoCuenta -= telefono;
                    alert('Has pagado el servicio de Telefono' + '\n' + 'Saldo anterior: $' + saldoAnterior + '\n' + 'Dinero descontado: $' + telefono + '\n' + 'Saldo actual: $' + saldoCuenta);
                    actualizarSaldoEnPantalla();
                }
                break;
            default:
                alert('El numero elegido no es un servicio valido.');
                break;
        }
}

    
function transferirDinero() {

    var cuentaAmiga1 = "1234567";
    var cuentaAmiga2 = "7654321";
    var montoTransferencia = parseInt(prompt('Ingrese el monto que desea transferir'))

        if(isNaN(montoTransferencia)) {
        alert('Ingresa valores numericos')
        return;
    }

        if (saldoCuenta < montoTransferencia) {
        return alert('No se puede transferir esa cantidad de dinero.')
    }

    var cuentaIngresada = prompt('Ingrese el número de cuenta');

        if(isNaN(cuentaIngresada)) {
        alert('Ingresa valores numericos')
        return;
    }
        if (cuentaIngresada !== cuentaAmiga1 && cuentaIngresada !== cuentaAmiga2) {
        
       
        return alert('Solo puede transferirse dinero a una cuenta amiga')
    }
    saldoCuenta-=montoTransferencia;
    alert('Se han transferido:$' + montoTransferencia + '\n' + 'Cuenta destino:' + cuentaIngresada)
    actualizarSaldoEnPantalla()
   
}

function iniciarSesion() {
    
    var contra = "1234";        
    var contraIngresada = prompt('Ingrese su código');

        if (contraIngresada !== contra) {
        
        saldoCuenta=0;
        actualizarSaldoEnPantalla();
        alert('Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.')
        extraerDinero = null;
        depositarDinero = null;
        pagarServicio = null;
        transferirDinero = null;
        cambiarLimiteDeExtraccion = null;
        return false;
    }

        else {
        alert('Bienvenido/a Juan Ignacio Larraburu ya puedes comenzar a realizar operaciones')
    }
    


}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}