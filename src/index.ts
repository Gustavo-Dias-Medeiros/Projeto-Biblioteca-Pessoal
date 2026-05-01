const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];
//Criar as constantes para armazenar as informações pedidas

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

function adicionarLivro(titulo: string, autor: string, ano: number, numeroPaginas: number): void {
    if (numeroPaginas <= 0) {
        console.log("Erro: AS páginas devem possuir valores positivos."); // Não faz sentido incluir erro se a data for negativa, o livro de Platão é de -380. O erro é para o número de páginas, que não pode ser negativo ou zero.
        return;
    }

    titulos.push(titulo);
    autores.push(autor);
    anos.push(ano);
    paginas.push(numeroPaginas); // Nessa etapa o push indicava erro: "Property 'push' does not exist on type 'number'.", então converti paginas para numeroPaginas (essa correção foi feita pelo copilot), adcionarei a justificativa no README.md
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

removerLivro(3); // Remove "Mundo de Sofia" 

exibirBiblioteca(); // Exibe a biblioteca atualizada após as adições e remoção; adciona a carta a Meneceu e os fundamentos da metafísica dos costumes, e remove o mundo de Sofia.