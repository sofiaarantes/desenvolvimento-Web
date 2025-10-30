// ============== EXEMPLO 1 ==============
estado = 0;

function mudaCor(cor) {
    var elemento = document.getElementById("item");
    elemento.style.color = cor;
}

function mudaCorFundo(cor) {
    var elemento = document.getElementById("item");
    if (estado == 0) {
        elemento.style.backgroundColor = "lightblue";
        elemento.style.borderBottom = "3px solid purple";
        estado == 1;
    } else {
        elemento.style.backgroundColor = "white";
        elemento.style.borderBottom = "none";
        estado == 0;
    }
}

// ============== EXEMPLO 2 ==============

function validaForm() {
    var valorNome = document.getElementById("nome").value;
    //Verifica se o campo nome foi preenchido e contém no mínimo três caracteres. 
    if (valorNome == "" || valorNome == null || valorNome.length < 3) {
        // mostrado um alerta, caso o campo esteja vazio. 
        alert("Por favor, indique o seu nome.");
        //o form não é enviado.
        return false;
    }
    var valorEmail = document.getElementById("email").value;
    //o campo e-mail precisa de conter: "@", "," e não pode catar vazio 
    if (valorEmail.indexOf("@") == -1 || valorEmail.indexOf(".") == -1 || valorEmail == "" || valorEmail == null) {
        alert("Por favor, indique um e-mail válido.");
        return false;
    }
    var selecao = document.getElementById('cargo');
    var valor = selecao.options[selecão.selectedIndex].value;
    if (valor != "programador") {
        alert("No momento estamos contratando somente para programador");
        return false;
    }
}
