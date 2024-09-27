function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipo == 'inferior') {
        comprarInferior(quantidade);
    } else if (tipo == 'superior') {
        comprarSuperior(quantidade);
    } else if (tipo == 'pista'){
        comprarPista(quantidade);
    }

}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdInferior){
        alert ('Nao é possivel comprar!');
    } else {
        qtdInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra efetuada');
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior){
        alert ('Nao é possivel comprar!');
    } else {
        qtdSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra efetuada');
    }
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista){
        alert ('Nao é possivel comprar!');
    } else {
        qtdPista -= quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra efetuada');
    }
}