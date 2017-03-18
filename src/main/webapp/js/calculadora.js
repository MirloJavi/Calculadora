var clean = false;
var accumulator = 0;
var lastOperation = "";

function unitOperation(typeOperator)
{
    var visor = document.getElementById("num").value.trim();

    if (visor !== "" && parseFloat(visor) !== NaN) {

        switch(typeOperator)
        {
            case "Xelevado2": visor = parseFloat(visor) * parseFloat(visor);
                break;
            case "InversoX":  visor = 1 / parseFloat(visor);
                break;
            case "RaizX": visor = Math.sqrt(parseFloat(visor));
                break;
            case "ParteEntera":

                if (parseFloat(visor) >= 0)
                    visor = Math.floor(parseFloat(visor));
                else
                    visor = Math.ceil(parseFloat(visor));

                break;
        }

    }

    document.getElementById("num").value = visor;

    document.getElementById("hist").value = "";

    cleaner();

}


function OperacionBinaria(typeOperator)
{

    var visor = document.getElementById("num").value;
    var hist = document.getElementById("hist").value;

    switch(typeOperator)
    {
        case "XelevadoY": XelevadoY(visor, hist);
            break;
        case "Dividir": Dividir(visor, hist);
            break;
        case "Multiplicar": Multiplicar(visor, hist);
            break;
        case "Restar": Restar(visor, hist);
            break;
        case "Sumar": Sumar(visor, hist);
            break;
    }
}

function XelevadoY(visor, hist) {

    if (lastOperation === "") {

        hist += visor + " ^ ";

        document.getElementById("hist").value = hist;

        clean = true;

        accumulator += parseFloat(visor);

        lastOperation = "^";
    }
}
function Dividir(visor, hist) {
    if (lastOperation === "/" || lastOperation === "") {

        if (visor === "")
            visor = "0";

        hist += visor + " / ";

        document.getElementById("hist").value = hist;

        clean = true;

        if (accumulator === 0)
            accumulator = parseFloat(visor);
        else
            accumulator /= parseFloat(visor);

        lastOperation = "/";
    }
}
function Multiplicar(visor, hist) {

    if (lastOperation === "*" || lastOperation === "") {
        if (visor === "")
            visor = "0";

        hist += visor + " * ";

        document.getElementById("hist").value = hist;

        clean = true;

        if (accumulator === 0)
            accumulator = parseFloat(visor);
        else
            accumulator *= parseFloat(visor);

        lastOperation = "*";
    }
}
function Restar(visor, hist) {

    if (lastOperation === "-" || lastOperation === "") {

        if (visor === "")
            visor = "0";

        hist += visor + " - ";

        document.getElementById("hist").value = hist;

        clean = true;

        if (accumulator === 0)
            accumulator = parseFloat(visor);
        else
            accumulator -= parseFloat(visor);

        lastOperation = "-";
    }
}
function Sumar(visor, hist) {

    if (lastOperation === "+" || lastOperation === "") {
        if (visor === "")
            visor = "0";

        hist += visor + " + ";

        document.getElementById("hist").value = hist;

        clean = true;

        if (accumulator === 0)
            accumulator = parseFloat(visor);
        else
            accumulator += parseFloat(visor);

        lastOperation = "+";
    }
}

//Números
function Numero(numero) {
    var visor = document.getElementById("num").value.trim();

    if (clean) {
        visor = "";
        clean = false;
    }

    visor += numero.toString();

    document.getElementById("num").value = visor;

}

function cleaner() {
    //Cambio las variables a su valor por defecto
    accumulator = 0;
    lastOperation = "";
    clean = true;
}
function PuntoDecimal() {
    var visor = document.getElementById("num").value.trim();

    if (visor.indexOf(".") < 0) {

        visor += ".";
    }

    document.getElementById("num").value = visor;


}
function Igual() {

    var visor = document.getElementById("num").value.trim();

    switch (lastOperation) {
        case "+": visor = accumulator + parseFloat(visor);
            break;
        case "-": visor = accumulator - parseFloat(visor);
            break;
        case "*": visor = accumulator * parseFloat(visor);
            break;
        case "/": visor = accumulator / parseFloat(visor);
            break;
        case "^":

            var valorOriginal = accumulator;

            for (i = 0; i < parseFloat(visor) - 1; i++) {
                accumulator *= valorOriginal;
            }

            visor = accumulator;

            break;
        case "":
            break;
    }

    document.getElementById("num").value = visor;
    document.getElementById("hist").value = "";
    accumulator = 0;
    lastOperation = "";
    clean = true;
}
function Limpiar() {
    document.getElementById("num").value = "";
    document.getElementById("hist").value = "";
    accumulator = 0;
    clean = false;
    lastOperation = "";
}
function Borrar() {
    var visor = document.getElementById("num").value.trim();

    if (visor === "NaN" || visor === "Infinity")
        visor = "";
    else
        visor = visor.substring(0, visor.length - 1);

    if (visor.trim() === "") {
        visor = "0";
        clean = true;
    }

    document.getElementById("num").value = visor;
}
function CambiarSigno() {
    var visor = document.getElementById("num").value;

    if (visor.indexOf("-") >= 0)
        visor = visor.replace("-", "");
    else
        visor = "-" + visor;

    document.getElementById("num").value = visor;

}