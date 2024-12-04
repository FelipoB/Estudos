let array = [10,11,12,13,14,15]
console.log(array[0], array[1] ...) // Desta forma para retornar todos os números vc pode colocar um array de cada vez 

console.log(array.length)// retornar o tamando do array 
// deveria retornar 6 no terminal bash(node 13-loops.js)






-----------------------------------------
Em JavaScript, loops (ou laços de repetição) são estruturas que permitem executar um bloco de código várias vezes, com base em uma condição. Existem vários tipos de loops em JavaScript. Aqui estão os mais comuns:

### 1. **for**

O loop `for` é usado quando você sabe quantas vezes deseja iterar.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Imprime os números de 0 a 4
}
```

### 2. **while**

O loop `while` continua a executar enquanto a condição especificada for verdadeira. É útil quando você não sabe quantas iterações serão necessárias.

```javascript
let i = 0;
while (i < 5) {
    console.log(i); // Imprime os números de 0 a 4
    i++;
}
```

### 3. **do...while**

//O loop `do...while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa na primeira verificação.

```javascript
let i = 0;
do {
    console.log(i); // Imprime os números de 0 a 4
    i++;
} while (i < 5);
```

### 4. **for...of**

O loop `for...of` é usado para iterar sobre objetos iteráveis, como arrays ou strings. Ele fornece uma maneira simples de acessar os elementos.

```javascript
const array = [10, 20, 30, 40];
for (const value of array) {
    console.log(value); // Imprime cada valor do array
}
```

### 5. **for...in**

O loop `for...in` é usado para iterar sobre as propriedades enumeráveis de um objeto.

```javascript
const objeto = { a: 1, b: 2, c: 3 };
for (const key in objeto) {
    console.log(key, objeto[key]); // Imprime as chaves e valores do objeto
}
```

### 6. **break e continue**

- **break**: Usado para sair de um loop antes que ele termine normalmente.
  
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sai do loop quando i é 5
    }
    console.log(i); // Imprime 0 a 4
}
```

- **continue**: Usado para pular a iteração atual e continuar com a próxima.

```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula números pares
    }
    console.log(i); // Imprime números ímpares de 1 a 9
}
```

Esses são os principais tipos de loops em JavaScript. Cada um tem suas próprias aplicações e é importante escolher o loop certo com base no que você precisa fazer. Se você tiver alguma dúvida ou precisar de mais informações sobre um tipo específico de loop, fique à vontade para perguntar!