// *****************************
// *       Botão de subir      *                 
// *****************************

const botaoSubir = document.querySelector("#climb-to-the-top");

window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 500)
        botaoSubir.style.display = "block";
    else {
        botaoSubir.style.display = "none";
    }
});

botaoSubir.addEventListener("click", function (e) {
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// *****************************
// *       GitHub              *                 
// *****************************

let carregandoElemento = document.getElementById("loading");

function pegarProjetos() {
    const urlGitHub = "https://api.github.com/users/LucasRodriguesCunha/repos";

    fetch(urlGitHub, {
        method: "GET"
    })
        .then((response) => response.json())
        .then((response) => {
            carregandoElemento.style.display = "none";
            listarProjetos(response); // Chama a função correta
        })
        .catch((erro) => {
            console.log(erro);
        });
}

function listarProjetos(dados) {
    let listarElemento = document.getElementById("my-projects-list");

    for (let i = 0; i < dados.length; i++) {
        let a = document.createElement("a");
        a.href = dados[i]["clone_url"];
        a.target = "_blank";
        a.textContent = dados[i]["name"]; // Adiciona o nome do projeto como texto do link
        listarElemento.appendChild(a); // Adiciona o elemento <a> à lista de projetos
    }
}

pegarProjetos();