// Para adicionar uma peça, copie uma linha e mude os valores.
// categoria: "Roupas" ou "Acessórios"
// A imagem é buscada em IMG/<nome>.png

const pecas = [
    { nome: "Calcinha rosa com renda branca", categoria: "Roupas", tipo: "Calcinha", cor: "Rosa com renda branca", tamanho: "P, M, G", material: "Algodão com renda" },
    { nome: "Short jeans azul", categoria: "Roupas", tipo: "Short", cor: "Azul jeans", tamanho: "36, 38, 40", material: "Jeans" },
    { nome: "Cachecol bege com detalhes laranjas e azuis", categoria: "Acessórios", tipo: "Cachecol", cor: "Bege, laranja e azul", tamanho: "Único", material: "Lã" },
    { nome: "Colar de pérolas", categoria: "Acessórios", tipo: "Colar", cor: "Branco perolado", tamanho: "Único", material: "Pérolas" },
    { nome: "Chapéu de bruxa", categoria: "Acessórios", tipo: "Chapéu", cor: "Preto", tamanho: "Único", material: "Feltro" },
    { nome: "Blazer rosa claro", categoria: "Roupas", tipo: "Blazer", cor: "Rosa claro", tamanho: "P, M, G", material: "Poliéster" },
    { nome: "Sandália azul escuro com detalhes dourados", categoria: "Roupas", tipo: "Sandália", cor: "Azul escuro e dourado", tamanho: "34, 35, 36, 37", material: "Sintético" },
    { nome: "Shorts preto curto", categoria: "Roupas", tipo: "Shorts", cor: "Preto", tamanho: "P, M, G", material: "Suplex" },
    { nome: "Regata Rosa", categoria: "Roupas", tipo: "Regata", cor: "Rosa", tamanho: "P, M, G", material: "Algodão" },
    { nome: "Chinelo vermelho listrado", categoria: "Roupas", tipo: "Chinelo", cor: "Vermelho listrado", tamanho: "34, 35, 36, 37", material: "Borracha" },
    { nome: "Bota marrom de cano baixo", categoria: "Roupas", tipo: "Bota", cor: "Marrom", tamanho: "34, 35, 36, 37", material: "Couro sintético" },
    { nome: "Bolsa rosa", categoria: "Acessórios", tipo: "Bolsa", cor: "Rosa", tamanho: "Único", material: "Sintético" },
    { nome: "Chapéu de festa rosa", categoria: "Acessórios", tipo: "Chapéu de festa", cor: "Rosa", tamanho: "Único", material: "Cartolina" },
    { nome: "Jaqueta jeans azul", categoria: "Roupas", tipo: "Jaqueta", cor: "Azul jeans", tamanho: "P, M, G", material: "Jeans" },
    { nome: "Cardigã Verde", categoria: "Roupas", tipo: "Cardigã", cor: "Verde", tamanho: "P, M, G", material: "Tricô" },
    { nome: "Calça de alfaiataria rosa", categoria: "Roupas", tipo: "Calça de alfaiataria", cor: "Rosa", tamanho: "36, 38, 40", material: "Poliéster" },
    { nome: "Vestido vermelho", categoria: "Roupas", tipo: "Vestido", cor: "Vermelho", tamanho: "P, M, G", material: "Crepe" },
    { nome: "Saia rosa", categoria: "Roupas", tipo: "Saia", cor: "Rosa", tamanho: "P, M, G", material: "Poliéster" },
    { nome: "Pijama da Peppa Pig", imagem: "Pijama da Peppa pig", categoria: "Roupas", tipo: "Pijama", cor: "Rosa com estampa", tamanho: "P, M, G", material: "Algodão" },
    { nome: "Pijama com listras azuis e laranjas", categoria: "Roupas", tipo: "Pijama", cor: "Azul e laranja", tamanho: "P, M, G", material: "Algodão" },
    { nome: "Saia preta", categoria: "Roupas", tipo: "Saia", cor: "Preta", tamanho: "P, M, G", material: "Poliéster" },
    { nome: "Salto alto vermelho brilhante", categoria: "Roupas", tipo: "Salto alto", cor: "Vermelho brilhante", tamanho: "34, 35, 36, 37", material: "Sintético" },
    { nome: "Jaqueta preta de couro", categoria: "Roupas", tipo: "Jaqueta", cor: "Preta", tamanho: "P, M, G", material: "Couro" },
    { nome: "Botas vermelhas de cano alto", categoria: "Roupas", tipo: "Bota", cor: "Vermelha", tamanho: "34, 35, 36, 37", material: "Couro sintético" },
    { nome: "Salto alto preto com detalhes prateados", categoria: "Roupas", tipo: "Salto alto", cor: "Preto e prateado", tamanho: "34, 35, 36, 37", material: "Sintético" },
    { nome: "All Star amarelo", categoria: "Roupas", tipo: "Tênis", cor: "Amarelo", tamanho: "34, 35, 36, 37", material: "Lona" },
    { nome: "Bolsa e carteira marsala", categoria: "Acessórios", tipo: "Bolsa e carteira", cor: "Marsala", tamanho: "Único", material: "Sintético" },
    { nome: "Relógio branco e dourado", categoria: "Acessórios", tipo: "Relógio", cor: "Branco e dourado", tamanho: "Único", material: "Aço inox" },
    { nome: "Vestido preto estilo bailarina", categoria: "Roupas", tipo: "Vestido", cor: "Preto", tamanho: "P, M, G", material: "Tule e cetim" },
    { nome: "All Star rosa escuro", categoria: "Roupas", tipo: "Tênis", cor: "Rosa escuro", tamanho: "34, 35, 36, 37", material: "Lona" },
    { nome: "Pijama com pequenas flores vermelhas", categoria: "Roupas", tipo: "Pijama", cor: "Branco com flores vermelhas", tamanho: "P, M, G", material: "Algodão" },
    { nome: "Bolsa de couro marrom com detalhes dourados", categoria: "Acessórios", tipo: "Bolsa", cor: "Marrom e dourado", tamanho: "Único", material: "Couro" }
];

// pegando dois elementos pelo id para poder usar depois
// pegou a area onde os cards aparecem (grid-pecas) e o campo de busca (busca)
// O filtroAtual é uma variável que guarda qual aba está selecionada. Ela usa let e não const porque o valor muda a cada clique

const grid = document.getElementById("grid-pecas");
const campoBusca = document.getElementById("busca");
let filtroAtual = "tudo";   // "tudo", "roupas" ou "acessorios"

// aqui cria o html de um card de peça de roupa
// recebe uma peça (p) e retorna o HTML correspondente
function criarCard(p) {

    // Usa a foto enviada pelo formulário; se não tiver, procura em IMG/
    const imagem = p.foto || "IMG/" + (p.imagem || p.nome) + ".png";

    // onerror esconde a imagem se o arquivo não existir
    return `
    <div class="col">
        <div class="card peca position-relative">
            <span class="peca-favorito">♡</span>

            <img src="${imagem}" alt="${p.nome}" class="peca-img"
                 onerror="this.style.display='none'">

            <div class="peca-rodape">
                <span class="peca-nome">${p.nome}</span>

                <div class="dropdown dropup">
                    <button class="btn-info-peca" type="button"
                            data-bs-toggle="dropdown">i</button>

                    <div class="dropdown-menu dropdown-menu-end p-0 info-peca">
                        <table class="table table-sm mb-0">
                            <tr><th>Tipo</th><td>${p.tipo}</td></tr>
                            <tr><th>Cor</th><td>${p.cor}</td></tr>
                            <tr><th>Tamanho</th><td>${p.tamanho}</td></tr>
                            <tr><th>Material</th><td>${p.material}</td></tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}


// mostra as peças aplicando filtro e busca
// faz duas verificacoes, se o nome da peça contém o texto digitado e se a categoria da peça é a mesma da aba selecionada
// Se as duas forem verdadeiras o card da peça é somado ao html. No final grid.innerHTML = html coloca todos os cards na tela de uma vez
// Percorre a lista, filtra por busca e categoria e mostra os cards na tela
function mostrarPecas() {
    const texto = campoBusca.value.toLowerCase();
    let html = "";

    for (const p of pecas) {
        const achouNoNome = p.nome.toLowerCase().includes(texto);
        const categoriaCerta =
            filtroAtual === "tudo" ||
            filtroAtual === p.categoria.toLowerCase().replace("ó", "o");
        // "Acessórios" vira "acessorios" para comparar com o data-filtro

        if (achouNoNome && categoriaCerta) {
            html += criarCard(p);
        }
    }

    grid.innerHTML = html;
}


// O querySelectorAll("[data-filtro]") pega os três botões de uma vez. O for coloca em cada um um “ouvinte de clique” (addEventListener). Quando alguém clica...

// filtroAtual recebe o valor do botão clicado (data-filtro)
// A classe ativa é tirada de todos os botões e colocada só no clicado que é o que muda a cor
// mostrarPecas() é chamada de novo para atualizar os cards
const abas = document.querySelectorAll("[data-filtro]");

for (const aba of abas) {
    aba.addEventListener("click", function () {
        filtroAtual = aba.dataset.filtro;

        // tira a cor de "ativa" de todas e coloca só na clicada
        for (const outra of abas) {
            outra.classList.remove("ativa");
        }
        aba.classList.add("ativa");

        mostrarPecas();
    });
}

// Ao clicar numa aba guarda a escolha, muda a cor da aba e atualiza as peças
campoBusca.addEventListener("input", mostrarPecas);

// Ao clicar no coração de uma peça, troca entre ♡ e ♥
// O ouvinte está no grid inteiro, e não em cada coração, porque os cards são criados pelo JS depois que a página carrega
grid.addEventListener("click", function (e) {
    if (e.target.classList.contains("peca-favorito")) {
        e.target.textContent = e.target.textContent === "♡" ? "♥" : "♡";
    }
});



// Quando o formulário é enviado (submit)...
document.getElementById("formPeca").addEventListener("submit", function (e) {
    e.preventDefault();   // e.preventDefault() impede a página de recarregar oq acontece por padrão ao enviar um formulário

    // Foto é opcional: se escolheram um arquivo, cria um endereço temporário para ele
    const arquivo = document.getElementById("fotoPeca").files[0];
    const foto = arquivo ? URL.createObjectURL(arquivo) : "";

    pecas.push({ //acrescenta uma peça nova na lista, com os valores digitados nos campos
        foto: foto,
        nome: document.getElementById("nomePeca").value,
        categoria: document.getElementById("categoriaPeca").value,
        tipo: document.getElementById("tipoPeca").value,
        cor: document.getElementById("corPeca").value,
        tamanho: document.getElementById("tamanhoPeca").value,
        material: document.getElementById("materialPeca").value
    });

    mostrarPecas(); // redesenha os cards com a peça nova
    this.reset();   // limpa o formulario(this é o formulario que disparou o evento, no caso o formPeca)

    // fecha o modal do Bootstrap
    bootstrap.Modal.getInstance(document.getElementById("modalAdicionar")).hide();
});

// Mostra tudo ao abrir a página 
// invoca a fuanção para mostrar as peças assim que a página carrega
mostrarPecas();