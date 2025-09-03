var diasUteis = ["segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira"];
var fimDeSemana = ["sábado","sabado","domingo"];

function verificadorDia() {
    var dia = document.getElementById("diain").value.toLowerCase().trim();
    var resultado = document.getElementById("resultado");

    if (diasUteis.includes(dia)) {
        resultado.innerHTML = "Dia útil";
        resultado.style.color = "white";
        resultado.style.backgroundColor = "green";
        resultado.style.padding = "10px";
        resultado.style.borderRadius = "8px";
    } else if (fimDeSemana.includes(dia)){
        resultado.innerHTML = "Fim de semana";
        resultado.style.color = "black";
        resultado.style.backgroundColor = "yellow";
        resultado.style.padding = "10px";
        resultado.style.borderRadius = "8px";
    } else {
        resultado.innerHTML = "Dia inválido";
        resultado.style.color = "white";
        resultado.style.backgroundColor = "red";
        resultado.style.padding = "10px";
        resultado.style.borderRadius = "8px";
    }
}
