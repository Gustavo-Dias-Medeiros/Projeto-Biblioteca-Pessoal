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