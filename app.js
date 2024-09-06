function pesquisar() {

    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Validação: verifica se o termo contém pelo menos um caractere não espaço em branco
    if ((!campoPesquisa) || (!/^\S+$/.test(campoPesquisa))) {
        section.innerHTML = "<p> Por favor, digite um caractér válido para pesquisar.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada resultado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento

            // Cria uma div para cada resultado, formatando o título, descrição e link
            resultados += `
    <div class="item-resultado">
        <h2>    
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
    
    </div>
    `;

        }

    }

    if(!resultados) {
        resultados ="<p> Nada foi encontrado </p>"
    }

    // Atualiza o conteúdo da seção com os resultados formatados
    section.innerHTML = resultados;
}


