function check() {
    var log = document.getElementById('login').value;
    var pw = document.getElementById('senha').value;

    if (log === "miranda" && pw === "kaleidoscope") {
        location.href = 'teste.html';
    } else {
        alert('Login ou senha incorretos');
    }
}

function lembrete(){
    alert('estão na carta bobinha :P');
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', check);
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("esqueci").addEventListener('click', lembrete);
});
