//alert("");
//console.log("");
//document.write("");

var tabuada = 8;

function meChame(nome) {
    document.write("<h1>Tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = " + (tabuada * 1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada * 2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada * 3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada * 4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada * 5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada * 6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada * 7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada * 8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada * 9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada * 10) + "<br");
    document.write("Feita por " + nome);

}

function escreva() {
    for (var i = 1; i < 11; i++) {
        document.write(tabuada + " x " + i + " = " + (tabuada * i) + "<br>");
    }
}

function quadrado() {
    for (var i = 2; i < 101; i++) {
        document.write("O Quadrado de " + i + " é " + (i * i) + "<br>")
    }
}
function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function total() {
    let valor = document.getElementById("val").value;
    let juros = document.getElementById("ju").value;
    let mes = document.getElementById("mes").value;
    if (!Number(valor)) {
        alert("O valor deve ser um número.");
        document.getElementById("val").value = "";
        document.getElementById("val").focus();
        return
    }
    if (!Number(juros)) {
        alert("O valor dos juros deve ser um número.");
        document.getElementById("ju").value = "";
        document.getElementById("ju").focus();
        return
    }
    if (!Number(mes)) {
        alert("A quantide de meses deve ser um número.");
        document.getElementById("mes").value = "";
        document.getElementById("mes").focus();
        return
    }

    let resultado = 0;
    let texto = "";
    for (let i = 1; i <= mes; i++) {
        resultado = valor * (1 + (juros / 100));
        valor = resultado;
         texto += "Mês " + i + " valor: " + moeda(resultado) + "<br>";
        //document.write("Mês " + i + " valor: " + moeda(resultado) + "<br>");
    }
    document.getElementById("meses").innerHTML = texto;
    document.getElementById("resultado").innerHTML = "Total: " + moeda(resultado);
    //document.write( "O Resultado é " + moeda(resultado) );
}

    function  calculeRaiz(){
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value;
        let delta = (b*b) - 4*a*c

        if(delta < 0){
        
        }
        else if (delta == 0){

        } else {

        }

     }
