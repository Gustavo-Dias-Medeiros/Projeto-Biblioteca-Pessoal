//Etapa 2 - Dados e exibição: 

const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];
//Cria as constantes para armazenar as informações pedidas

function popularDadosIniciais(): void {
    titulos.push('A República', 'Meditações', 'O Príncipe', 'Mundo de Sofia', 'O Alquimista', 'Convite à Filosofia', 'Memórias Póstumas de Brás Cubas');
    autores.push('Platão', 'Marco Aurélio', 'Maquiavel', 'Jostein Gaarder', 'Paulo Coelho', 'Marilena Chaui', 'Machado de Assis');
    anos.push(-380, 180, 1532, 1991, 1988, 1999, 1881);
    paginas.push(300, 256, 200, 400, 208, 320, 256);
    lido.push(true, true, false, false, true, false, false);
    avaliacoes.push(4, 5, 0, 0, 5, 0, 0);
}
//Cria uma função para popular os dados iniciais da biblioteca
popularDadosIniciais();

function exibirBiblioteca(): void {
    console.log("===Minha Biblioteca===");
    titulos.forEach((titulo, i) => {
        const status = lido[i] ? `LIDO (${avaliacoes[i]}/5)` : "PENDENTE";
        console.log(`${i + 1}. "${titulo}" (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${status}`);
    });
}

exibirBiblioteca();

//Etapa 3 - Cadastro e Remoção:

function adicionarLivro(titulo: string, autor: string, ano: number, numeroPaginas: number): void {
    if (numeroPaginas <= 0) {
        console.log("Erro: AS páginas devem possuir valores positivos."); // Não faz sentido incluir erro se a data for negativa, o livro de Platão é de -380. O erro é para o número de páginas, que não pode ser negativo ou zero.
        return;
    }

    titulos.push(titulo);
    autores.push(autor);
    anos.push(ano);
    paginas.push(numeroPaginas); // Nessa etapa o push indicava erro: "Property 'push' does not exist on type 'number'.", então converti paginas para numeroPaginas (essa correção foi feita pelo copilot)
    lido.push(false);       // Se eu adicionar um livro, ele começa como não lido
    avaliacoes.push(0);    // E a avaliação começa como 0, já que o livro ainda não foi lido
    
    console.log(`O Livro "${titulo}" foi adicionado com sucesso!`);
}

function removerLivro(indice: number): void {
    if (indice < 0 || indice >= titulos.length) { // O indice não pode ser negativo e nem maior ou igual ao número de livros na biblioteca
        console.log("Erro: Índice inválido.");
        return;
    }

    const removido = titulos[indice]; 
    
    titulos.splice(indice, 1);
    autores.splice(indice, 1);
    anos.splice(indice, 1);
    paginas.splice(indice, 1);
    lido.splice(indice, 1);
    avaliacoes.splice(indice, 1);

    console.log(`O Livro "${removido}" foi removido com sucesso!`);
}

console.log("\n===Testando Cadastro e Remoção===");

adicionarLivro("A Carta a Meneceu", "Epicuro", -341, 51);

adicionarLivro("Fundamentos da Metafísica dos Costumes", "Immanuel Kant", 1785, 432);

adicionarLivro("A Apologia de Sócrates", "Platão", -399, 64);

removerLivro(3); // Remove "Mundo de Sofia" 

exibirBiblioteca(); // Exibe a biblioteca atualizada após as adições e remoção; adciona a carta a Meneceu e os fundamentos da metafísica dos costumes, e remove o mundo de Sofia.

//Etapa 4 - Busca e Filtros:

function buscarPorTitulo(termo: string): number[] {
    const indicesEncontrados: number[] = [];
    const termoMinusculo = termo.toLowerCase();

    titulos.forEach((titulo, indice) => {
        if (titulo.toLowerCase().includes(termoMinusculo)) {
            indicesEncontrados.push(indice);
        }
    });

    return indicesEncontrados;
}

function listarPorAutor(autor: string): string[] {
    const autorPesquisado = autor.toLowerCase();

    return titulos.filter((_, indice) => {
    const autor = autores[indice];
    return autor !== undefined && autor.toLowerCase() === autorPesquisado;
});
}

console.log("\n===Testando Buscas===");

const termoPesquisado = "p"; 
const resultados = buscarPorTitulo(termoPesquisado);

console.log(`\nResultados para "${termoPesquisado}":`);
resultados.forEach(i => {
    console.log(`[ID: ${i + 1}] - ${titulos[i]}`);
});

const autorPesquisado = "Platão";
const livrosDoAutor = listarPorAutor(autorPesquisado);

console.log(`\nLivros de ${autorPesquisado}:`);
livrosDoAutor.forEach(titulo => {
    console.log(`- ${titulo}`);
});

console.log("\n\nLidos:", listarLidos());
console.log("\nPendentes:", listarPendentes());

//Etapa 5 — Marcar como lido

function marcarComoLido(indice: number, avaliacao: number): void {
    if (indice < 0 || indice >= titulos.length) {
        console.log("Erro: Livro não encontrado.");
        return;
    }

    if (avaliacao < 1 || avaliacao > 5) {
        console.log("Erro: A avaliação deve ser de 1 a 5.");
        return;
    }

    lido[indice] = true;
    avaliacoes[indice] = avaliacao;

    console.log(`Sucesso! "${titulos[indice]}" marcado como lido com nota ${avaliacao}.`);
}

function listarLidos(): string[] {
    // Filtra os títulos baseando-se no valor 'true' 
    return titulos.filter((_, i) => lido[i]);
}

function listarPendentes(): string[] {
    // Filtra os títulos baseando-se no valor 'false'
    return titulos.filter((_, i) => !lido[i]);
}

console.log("\n--- Teste de Marcar como lido e avaliação ---");

marcarComoLido(2, 5);

marcarComoLido(4, 3);

console.log("Lidos:", listarLidos());
console.log("Pendentes:", listarPendentes());

exibirBiblioteca();

//Etapa 6 — Estatísticas

function totalLivros(): number {
    return titulos.length;
}

console.log("\nTotal de livros:", totalLivros());

function totalLidos(): number {
    return lido.filter(status => status).length;
}

function percentualLidos(): number {
    if (totalLivros() === 0) return 0;
    const percentual = (totalLidos() / totalLivros()) * 100;
    return Number(percentual.toFixed(2));
}

console.log("Total de livros lidos:", totalLidos() + ` (${percentualLidos()}%)`);

function mediaAvaliacoes(): number {
    const notasLidos = avaliacoes.filter((_, i) => lido[i]);
    
    if (notasLidos.length === 0) return 0;

    const soma = notasLidos.reduce((acumulador, nota) => acumulador + nota, 0);
    return Number((soma / notasLidos.length).toFixed(2));
}

console.log("Média das avaliações:", mediaAvaliacoes());


function livroMaiorAvaliacao(): string {
    if (titulos.length === 0) return "Nenhum livro cadastrado";

    const indiceDoMelhor = avaliacoes.reduce((maiorIndiceAteAgora, notaAtual, indiceAtual) => {
        const notaMaiorAteAgora = avaliacoes[maiorIndiceAteAgora]!;
        
        return notaAtual > notaMaiorAteAgora ? indiceAtual : maiorIndiceAteAgora;
    }, 0);
    return titulos[indiceDoMelhor] ?? "Livro não encontrado";
}

console.log("Livro com maior avaliação:", livroMaiorAvaliacao());

function totalPaginasLidas(): number {
    return paginas
        .filter((_, i) => lido[i]) // Filtra páginas apenas de livros lidos
        .reduce((acc, pag) => acc + pag, 0); // Soma as páginas
}

console.log("Total de páginas lidas:", totalPaginasLidas());

//Etapa 7 — Classificação por década

adicionarLivro("O Alienista", "Machado de Assis", 1882, 128);
exibirBiblioteca();

function exibirPorDecada(): void {
    console.log("\n=== BIBLIOTECA POR DÉCADA ===");

    // Pega as décadas únicas
    const decadasUnicas = [...new Set(anos.map(ano => Math.floor(ano! / 10) * 10))];
    decadasUnicas.sort((a, b) => a - b);

    // Percorre por cada década
    decadasUnicas.forEach(decada => {
        console.log(`${decada}s:`); // Exibe o cabeçalho da década

        // Filtra os livros dessa década
        const livrosDaDecada = titulos.filter((_, i) => {
            const decadaDoLivro = Math.floor(anos[i]! / 10) * 10;
            return decadaDoLivro === decada;
        });

        livrosDaDecada.forEach(titulo => {
            console.log(`  - ${titulo}`);
        });
    });
}

exibirPorDecada();

console.log("\nTotal de livros:", totalLivros());
console.log("Total de livros lidos:", totalLidos() + ` (${percentualLidos()}%)`);
console.log("Média das avaliações:", mediaAvaliacoes());
console.log("Livro com maior avaliação:", livroMaiorAvaliacao());
console.log("Total de páginas lidas:", totalPaginasLidas());

//Etapa 8 — Demonstração final



function executarDemonstracao() {
    console.clear();
  
    console.log("\n========= MINHA BIBLIOTECA =========");
    exibirBiblioteca();

  
    console.log("\n========= ESTATÍSTICAS =========");
    console.log(`Total de Livros: ${totalLivros()}`);
    console.log(`Livros Lidos: ${totalLidos()} (${percentualLidos()}%)`);
    console.log(`Média de Avaliações: ${mediaAvaliacoes()}`);
    console.log(`Total de Páginas Lidas: ${totalPaginasLidas()}`);
    console.log(`Livro Destaque: ${livroMaiorAvaliacao()}`);


    exibirPorDecada();
}

// Chame a função para que ela execute ao rodar 'npm run dev'
executarDemonstracao();