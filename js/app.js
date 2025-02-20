let pista = document.getElementById('qtd-pista');
let cadeiraSuperior = document.getElementById('qtd-superior');
let cadeiraInferior = document.getElementById('qtd-inferior');

function comprar() {
    let tipoTicket = document.getElementById('tipo-ingresso');
    let quantidade = document.getElementById('qtd').value;

    if(tipoTicket.value == 'pista') {
        if(!validarEstoque(pista.innerHTML, quantidade)) {
            return;
        }
        pista.innerHTML = parseInt(pista.innerHTML) - quantidade;
    }
    if(tipoTicket.value == 'inferior') {
        if(!validarEstoque(cadeiraInferior.innerHTML, quantidade)) {
            return
        }
        cadeiraInferior.innerHTML = parseInt(cadeiraInferior.innerHTML) - quantidade;
    }
    if(tipoTicket.value == 'superior') {
        if(!validarEstoque(cadeiraSuperior.innerHTML, quantidade)) {
            return;
        }
        cadeiraSuperior.innerHTML = parseInt(cadeiraSuperior.innerHTML) - quantidade;
    }

    document.getElementById('qtd').value = '';
}

function validarEstoque(estoque, quantidade) {
    if(estoque - quantidade < 0) {
        alert('Quantidade indisponível no estoque');
        return false;
    }
    return true;
}