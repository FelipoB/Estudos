let test1 = "super"
let teste2 ="poder"

let juntos = test1 + teste2

return = "superpoder" 

// separado
let juntos = test1 + '' + teste2

console.log(juntos); Super poder
----------------------
Parece que você está tentando concatenar duas strings em JavaScript e retornar o resultado. No entanto, há um pequeno erro na sua sintaxe. Vamos corrigir isso e mostrar como você pode fazer a concatenação corretamente.

### Código Corrigido

Aqui está um exemplo correto de como concatenar as duas strings `test1` e `teste2` e retornar o resultado:

```javascript
let test1 = "super";
let teste2 = "poder";
let juntos = test1 + teste2; // Concatenando as duas strings
console.log(juntos); // Saída: "superpoder"
```

### Explicação

1. **Declaração das Variáveis**:
   - `let test1 = "super";` - Declara a variável `test1` e atribui a ela a string `"super"`.
   - `let teste2 = "poder";` - Declara a variável `teste2` e atribui a ela a string `"poder"`.

2. **Concatenação**:
   - `let juntos = test1 + teste2;` - Usa o operador `+` para concatenar as duas strings e armazena o resultado na variável `juntos`.

3. **Saída**:
   - `console.log(juntos);` - Exibe o resultado da concatenação no console.

Se você quiser adicionar um espaço entre as duas palavras, você pode fazer assim:

```javascript
let juntos = test1 + " " + teste2; // Resultado: "super poder"
```

Se precisar de mais ajuda ou tiver outras perguntas, fique à vontade para perguntar!