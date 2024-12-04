Arrey e object

----------------------
Em JavaScript, tanto objetos quanto arrays são tipos de dados que permitem armazenar coleções de informações. Ambos podem ser alterados, mas têm estruturas e métodos diferentes para manipulação. Vamos explorar como você pode alterar informações em objetos e arrays.

### Alterando Informações em Objetos

Um objeto é uma coleção de pares chave-valor. Você pode acessar e modificar os valores usando as chaves.

#### Exemplo de Objeto

```javascript
const pessoa = {
    nome: "Maria",
    idade: 30,
    cidade: "São Paulo"
};

// Acessando uma propriedade
console.log(pessoa.nome); // Saída: Maria

// Alterando uma propriedade
pessoa.idade = 31;
console.log(pessoa.idade); // Saída: 31

// Adicionando uma nova propriedade
pessoa.profissao = "Desenvolvedora";
console.log(pessoa.profissao); // Saída: Desenvolvedora

// Removendo uma propriedade
delete pessoa.cidade;
console.log(pessoa.cidade); // Saída: undefined
```

### Alterando Informações em Arrays

Um array é uma lista ordenada de valores. Você pode acessar e modificar os elementos do array usando índices.

#### Exemplo de Array

```javascript
const frutas = ["maçã", "banana", "laranja"];

// Acessando um elemento
console.log(frutas[0]); // Saída: maçã

// Alterando um elemento
frutas[1] = "kiwi";
console.log(frutas); // Saída: ["maçã", "kiwi", "laranja"]

// Adicionando um novo elemento
frutas.push("uva");
console.log(frutas); // Saída: ["maçã", "kiwi", "laranja", "uva"]

// Removendo o último elemento
frutas.pop();
console.log(frutas); // Saída: ["maçã", "kiwi", "laranja"]

// Removendo o primeiro elemento
frutas.shift();
console.log(frutas); // Saída: ["kiwi", "laranja"]

// Adicionando um elemento no início
frutas.unshift("morango");
console.log(frutas); // Saída: ["morango", "kiwi", "laranja"]
```

### Resumo

- **Objetos**: Usados para armazenar pares chave-valor. Você pode acessar, alterar, adicionar e remover propriedades.
- **Arrays**: Usados para armazenar listas ordenadas de valores. Você pode acessar, alterar, adicionar e remover elementos usando índices e métodos de array.

Ambos são mutáveis, o que significa que você pode alterar suas propriedades ou elementos após a criação. No entanto, se você declarar um objeto ou array com `const`, não poderá reatribuir a variável para um novo objeto ou array, mas ainda poderá modificar seu conteúdo.

Se você tiver mais perguntas ou precisar de mais exemplos, sinta-se à vontade para perguntar!