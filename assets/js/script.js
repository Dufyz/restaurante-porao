window.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('texto-input-nome');
    var output = document.getElementById('texto-output-nome');

    input.addEventListener('input', function () {
        output.textContent = input.value;
    });
});

window.addEventListener('DOMContentLoaded', function () {
    var textarea = document.getElementById('texto-input-pedido');
    var output = document.getElementById('texto-output-pedido');

    textarea.addEventListener('input', function () {
        var texto = textarea.value.replace(/\n/g, '<br>');
        output.innerHTML = texto;
    });
});

window.addEventListener('DOMContentLoaded', function () {
    var textarea = document.getElementById('texto-input-endereco');
    var output = document.getElementById('texto-output-endereco');

    textarea.addEventListener('input', function () {
        var texto = textarea.value.replace(/\n/g, '<br>');
        output.innerHTML = texto;
    });
});

function imprimirParteEspecifica() {
    window.print();
}

window.addEventListener('DOMContentLoaded', function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var output = document.getElementById('resultado');

    function atualizarValor() {
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                output.textContent = checkboxes[i].value;
            }
        }
    }

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', function () {
            if (this.checked) {
                for (var j = 0; j < checkboxes.length; j++) {
                    if (checkboxes[j] !== this) {
                        checkboxes[j].checked = false;
                    }
                }
            }
            atualizarValor();
        });
    }
});

function atualizarDataHora() {
    var elementoDataHora = document.getElementById('data-hora');
    var dataAtual = new Date();
    var dataFormatada = dataAtual.toLocaleDateString();
    var horarioFormatado = dataAtual.toLocaleTimeString();
    var dataHora = dataFormatada + ', ' + horarioFormatado;
    elementoDataHora.textContent = dataHora;
}

window.addEventListener('DOMContentLoaded', function () {
    atualizarDataHora();
    setInterval(atualizarDataHora, 1000);
});

function atualizarPagina() {
    location.reload();
}