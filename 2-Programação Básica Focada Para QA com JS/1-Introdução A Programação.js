Linguagens mais Usadas 
JS/TS PY e JAVA C# e Ruby

Dev WEB
    Dev front - javascript typescript

    dev back - JS, Py , Java, C# php, Ruby

Dev Mobile

    Swift - IOS
    Kotlin - Android
    javascript (Ferramenta react native) - Ambos
    Dart (ferramenta flutter) - Ambos

Tipos de Desenvolvimento 

    QA
        Automação de teste 
            Automação de API 
            Automação Web 
            Automação Mobile

    Dev 
        APIs 
        Software web 
        Desenvolvimento apps



    
------------------------------

A programação básica focada em QA (Quality Assurance) com JavaScript envolve a compreensão de conceitos fundamentais de programação, bem como a aplicação de técnicas de teste automatizado. Abaixo, apresento um guia básico que pode ajudar um profissional de QA a começar a programar em JavaScript.

### 1. **Introdução ao       JavaScript**
    - **O que é JavaScript?**: JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web. É uma linguagem de script que permite adicionar interatividade às páginas web.

    - **Ambiente de Execução**: JavaScript pode ser executado em navegadores (client-side) e em servidores (server-side) usando Node.js.

### 2. **Conceitos Básicos de Programação**
    - **Variáveis**: Armazenam dados. Exemplo:

    ```javascript
  let nome = "João";
  const idade = 30;
  ```
  
    - **Tipos de Dados**: JavaScript tem tipos de dados primitivos como `string`, `number`, `boolean`, `null`, `undefined` e `object`.

    - **Estruturas de Controle**: Permitem o controle do fluxo do programa.
  ```javascript
  if (idade >= 18) {
      console.log("Adulto");
  } else {
      console.log("Menor de idade");
  }
  ```

    - **Laços (Loops)**: Permitem a repetição de um bloco de código.
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  ```

    - **Funções**: Blocos de código que realizam uma tarefa específica.

  ```javascript
  function soma(a, b) {
      return a + b;
  }
  console.log(soma(2, 3)); // 5
  ```

### 3. **Programação Orientada a Objetos (POO)**
    - **Objetos**: Estruturas que contêm propriedades e métodos.

```javascript
  const carro = {
      marca: "Fusca",
      modelo: "Clássico",
      ligar: function() {
          console.log("Carro ligado");
      }
  };
  carro.ligar(); // Carro ligado
  ```

### 4. **Testes Automatizados com JavaScript**
Para QA, é essencial saber como escrever testes automatizados. Algumas bibliotecas populares incluem:

- **Jest**: Um framework de testes para JavaScript.
  ```javascript
  test('soma de 1 + 2 deve ser 3', () => {
      expect(soma(1, 2)).toBe(3);
  });
  ```

- **Mocha**: Um framework de testes flexível que pode ser usado com diferentes bibliotecas de asserção.
- **Chai**: Uma biblioteca de asserção que pode ser usada com Mocha.
  ```javascript
  const chai = require('chai');
  const expect = chai.expect;

  describe('Teste de soma', () => {
      it('deve retornar 3', () => {
          expect(soma(1, 2)).to.equal(3);
      });
  });
  ```

- **Cypress**: Uma ferramenta para testes end-to-end que permite testar aplicações web de forma interativa.
  
### 5. **Ferramentas e Configuração do Ambiente**
- **Node.js**: Instale o Node.js para executar JavaScript fora do navegador e gerenciar pacotes com o npm.
- **Editor de Código**: Use um editor como Visual Studio Code, que possui suporte para JavaScript e extensões úteis.

### 6. **Práticas Recomendadas**
- **Escrever Testes**: Sempre escreva testes para o seu código. Isso garante que as funcionalidades estejam corretas e que alterações futuras não quebrem o código existente.
- **Automatizar Testes**: Utilize ferramentas de CI/CD (Integração Contínua/Entrega Contínua) para automatizar a execução de testes sempre que houver uma nova alteração no código.
- **Aprender sobre TDD (Test-Driven Development)**: Uma abordagem onde você escreve os testes antes de implementar a funcionalidade.

### Conclusão
A programação básica em JavaScript para QA envolve a combinação de habilidades de programação com conhecimento em testes automatizados. Com a prática e a familiarização com as ferramentas e bibliotecas mencionadas, você poderá contribuir efetivamente para a qualidade do software.