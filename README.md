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
3.2 A validação das entradas foi alterada, pois como eu havia dito dentro do código livros como "A República" de Platão e até "A Carta a Meneceu" de Epicuro, livro que foi adicionado posteriormente são livros que as publicações são datatas como antes de cristo, então a minha verificação prevê que o número de páginas não pode ser menor ou igual a zero, mas o ano de publicação pode ser menor, maior ou igual a zero, afinal seria incoerente tendo em vista que dentro do próprio código há livros que datam a publicação como antes de cristo.
3.3 No final foi testado a remoção e adição de livros, removendo "Mundo de Sofia" e adicionando "A Carta a Meneceu" e "Fundamentos da Metafísica dos Costumes".

Etapa 4 - Busca e Filtros:

4.1 Nessa etapa foi implementado a busca por títulos, ou seja um setor de busca de livros que filtra com base no nome do livro, o exemplo que aparece no commit filtrou pela letra "f", que resultou nos livros "Convite à Filosofia" e "Fundamentos da Metafísica dos Costumes", livros que possuem a letra "f" em seus títulos.
4.2 Também foi aderido a busca por autor. Para tornar mais dinâmica a busca por autor eu decidi adicionar mais um livro a lista "A Apologia de Sócrates" de Platão, para que a busca por autores seja mais interativo.

Etapa 5 — Marcar como lido

5.1 Nessa etapa foi feita a devida implementação de marcar como lido os títulos e as respectivas avaliações, na ementa da atividade é pedido que a avaliação fosse feita com if ou switch, optei por seguir com if. Primeiro é inserido o índice do livro e é verificado se o indice apontado é correto, e por fim você pode adicionar a nota ao lado. Esse comando pode não só alterar aqueles livros que estavam pendentes para lidos e com nota, como também pode alterar livros que já haviam sido lidos.
5.2 Além disso foi implementada uma lista que é responsável por mostrar quais livros foram lidos e quais permanecem pendentes.
5.3 Por fim, antes da etapa 5 começar foi inserido novamente o comando exibirBiblioteca para mostrar antes de adicionar novos livros como estava o seu histórico de leitura.

Etapa 6 — Estatísticas

6.1 Nessa etapa foi feita a implementação das estatísticas, sendo elas: Total de livros, Livros lidos, Media das avaliacoes, Livro melhor avaliado e Total de paginas lidas.
6.2 Foi feito o uso de filter e reduce.
6.3 Foi usado ToFixed.

Etapa 7 — Classificação por década

7.1 Nessa etapa foi feito a adesão de um filto que exibe o livro de acordo com a Década.
7.2 Para tornar mais dinâmico o uso antes de começar adicionei o livro "O Alienista" de Machado de Assis, pois esse livro foi publicado no ano de 1882 ele foi adicionado para ficar junto com o livro "Memórias Póstumas de Brás Cubas" livro que também foi publicado por Machado de Assis, todavia foi publicado no ano de 1881, o que põe ambos na mesma década.
7.3 O sistema usa um código simples de Math.floor, no qual ele pega o ano em que a obra foi publicada e divide por 10 sendo assim, se o ano de publicação da obra foi 1881 => 1881/10 = 188,1 que é arredondado para 188, posteriormente ele é multiplicado por 10 novamente e vai para 1880, sendo assim obras de 1882 trabalham com a mesma lógica e por isso são colocadas na mesma década.
7.4 Pelo fato de ser utilizado o termo floor, mesmo o ano sendo 1889 ele se será "arredondado" para 1880.
7.5 Como foi adicionado mais um livro decidi reiterar as estatísticas.

Etapa 8 — Demonstração final

8.1 Nessa etapa foi feita uma interface mais arrojada para o projeto.
8.2 Executar com "npm run dev"

Gustavo Dias Medeiros
1050482523023