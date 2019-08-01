let botao = document.querySelector("#botao");
let texto = document.querySelector("ul");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirmEmail = document.querySelector("#confirmEmail");
let senha = document.querySelector("#senha");
let sexo = document.querySelector("select");
let naoSou = document.querySelector("a");
let div = document.querySelector("div");
let section = document.querySelector("section");

function esconderInfos() {
    section.style.display = "none";
}

function mostrarInfos() {
    section.style.display = "initial";
}

function guardarInfos() {
    if (email.value != "" && email.value === confirmEmail.value) {
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("senha", senha.value);
        localStorage.setItem("sexo", sexo.value);
        div.style.display = "none";
        mostrarInfos();
        texto.innerHTML = `<li>Seja bem vindo! Sr(a).</li>
                           <li>Nome: ${localStorage.nome}</li>
                           <li>Email: ${localStorage.email}</li>
                           <li>Senha: ${localStorage.senha}</li>
                           <li>Sexo: ${localStorage.sexo}</li>`;
        naoSou.innerHTML = `Não é ${localStorage.nome}? Clique aqui.`;
        naoSou.onclick = limparInfos;
    }
    else{
        alert("Os emails diferem");
    }
}

function limparInfos() {
    localStorage.clear()
}
esconderInfos();
if (localStorage.nome) {
    div.style.display = "none";
    mostrarInfos();
    texto.innerHTML = `<li>Seja bem vindo! Sr(a).</li>
                        <li>Nome: ${localStorage.nome}</li>
                        <li>Email: ${localStorage.email}</li>
                        <li>Senha: ${localStorage.senha}</li>
                        <li>Sexo: ${localStorage.sexo}</li>`;
    naoSou.innerHTML = `Não é ${localStorage.nome}? Clique aqui.`;
    naoSou.onclick = limparInfos;
}
else{
    botao.onclick = guardarInfos;
}
