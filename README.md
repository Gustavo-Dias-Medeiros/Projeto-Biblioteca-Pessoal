Etapa 1 - Setup do Projeto: 

1.1: Projeto Inicializado.
1.2: tscongig.json, .gitignore e README.md devidamente criados.
1.3: Repositório git criado.

Etapa 2 - Dados e exibição: 

2.1: Nessa etapa foi declarado os arrays paralelos em `src/index.ts` assim como foi pedido.
2.2: O código foi populado com os dados iniciais como: títulos(nome dos livros), autores, anos de publicação(nessa etapa alguns títulos possuem datas aproximadas, pois não se sabe o ano em que o livro foi devidamente publicado, exemplo: A República, livro escrito por platão estima-se que esse livro foi publicado entre 375 - 380 antes de cristo), número de páginas, se o livro foi lido ou não e por fim a minha avaliação de cada livro.
2.3: Foi implementada a "exibirBiblioteca" usando "forEach"
2.4: Foi executado "npm run dev" e foi valido o resultado.

Etapa 3 - Cadastro e Remoção:

3.1 Nessa etapa foi implementado as funções de adicionar livros e remover livros.
3.2 A validação das entradas foi alterada, pois como eu havia dito dentro do código livros como "A República" de Platão e até "A Carta a Meneceu" de Epicuro, livro que foi adicionado posteriormente são livros que as publicações são datas como antes de cristo, então a minha verificação prevê que o número de páginas não pode ser menor ou igual a zero, mas o ano de publicação pode ser menor, maior ou igual a zero, afinal seria incoerente tendo em vista que dentro do próprio código há livros que datam a publicação como antes de cristo.
3.3 No final foi testado a remoção e adição de livros, removendo "Mundo de Sofia" e adicionando "A Carta a Meneceu" e "Fundamentos da Metafísica dos Costumes".