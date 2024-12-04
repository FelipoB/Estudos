const variável constante que não quer mudar.

==========================
A palavra-chave `const` em JavaScript é usada para declarar variáveis que têm um valor constante, ou seja, que não podem ser reatribuídas após a sua definição. Aqui estão algumas características importantes sobre `const`:

1. **Imutabilidade da Referência**: Quando você declara uma variável com `const`, você não pode reatribuir um novo valor a essa variável. No entanto, se a variável for um objeto (incluindo arrays), você ainda pode modificar suas propriedades ou elementos.

   ```javascript
   const numero = 10;
   // numero = 20; // Isso causaria um erro, pois não é possível reatribuir um valor a uma variável const

   const objeto = { nome: "Maria" };
   objeto.nome = "João"; // Isso é permitido, pois estamos modificando uma propriedade do objeto
   console.log(objeto.nome); // Saída: João
   ```

2. **Escopo de Bloco**: Assim como `let`, as variáveis declaradas com `const` têm escopo de bloco. Elas só estão disponíveis dentro do bloco em que foram definidas.

   ```javascript
   if (true) {
       const mensagem = "Olá, mundo!";
       console.log(mensagem); // Saída: Olá, mundo!
   }
   // console.log(mensagem); // Isso causaria um erro, pois 'mensagem' não está definida fora do bloco
   ```

3. **Hoisting**: As variáveis `const` também são "hoisted", mas não podem ser acessadas antes de sua declaração, resultando em um erro de referência se tentarmos acessá-las antes.

   ```javascript
   // console.log(valor); // Isso causaria um erro de referência
   const valor = 30;
   ```

### Quando usar `const`

- **Valores Constantes**: Use `const` para valores que não devem ser reatribuídos, como configurações ou constantes.
- **Objetos e Arrays**: Se você estiver lidando com objetos ou arrays e não quiser reatribuir a variável, mas ainda precisar modificar suas propriedades ou elementos, `const` é uma boa escolha.

### Exemplo Completo

Aqui está um exemplo que combina o uso de `const`:

```javascript
const PI = 3.14; // Uma constante
const frutas = ["maçã", "banana"]; // Um array constante

// Modificando o array
frutas.push("laranja");
console.log(frutas); // Saída: ["maçã", "banana", "laranja"]

// PI = 3.14159; // Isso causaria um erro, pois PI é uma constante
```

Em resumo, `const` é uma maneira de declarar variáveis que não devem ser reatribuídas após a sua definição, ajudando a prevenir erros no código e a aumentar a clareza sobre a intenção de uso das variáveis. Se tiver mais perguntas ou precisar de exemplos adicionais, fique à vontade para perguntar!