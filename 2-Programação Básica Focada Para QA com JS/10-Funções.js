


---------------------------------
Funções em JavaScript são blocos de código reutilizáveis que podem ser executados quando chamadas. Elas são uma parte fundamental da linguagem e permitem que você organize seu código de maneira lógica e modular. Aqui estão alguns conceitos e exemplos sobre funções em JavaScript:

### Declaração de Funções

Existem várias maneiras de declarar funções em JavaScript:

1. **Função Declarada**:

```javascript
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

console.log(saudacao("Maria")); // Saída: Olá, Maria!
```

2. **Função Anônima**:

```javascript
const saudacao = function(nome) {
    return "Olá, " + nome + "!";
};

console.log(saudacao("João")); // Saída: Olá, João!
```

3. **Arrow Function (Função de Seta)**:

```javascript
const saudacao = (nome) => {
    return "Olá, " + nome + "!";
};

console.log(saudacao("Ana")); // Saída: Olá, Ana!
```

### Parâmetros e Argumentos

As funções podem receber parâmetros, que são variáveis que você pode usar dentro da função. Quando você chama a função, você passa argumentos que são atribuídos a esses parâmetros.

```javascript
function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3)); // Saída: 8
```

### Funções com Parâmetros Opcionais

Você pode definir parâmetros opcionais, que podem ter um valor padrão caso não sejam fornecidos.

```javascript
function saudacao(nome = "Visitante") {
    return "Olá, " + nome + "!";
}

console.log(saudacao()); // Saída: Olá, Visitante!
```

### Funções Retornando Valores

Uma função pode retornar um valor usando a palavra-chave `return`. Quando a função é chamada, ela executa o código até encontrar `return` e retorna o valor especificado.

```javascript
function quadrado(x) {
    return x * x;
}

console.log(quadrado(4)); // Saída: 16
```

### Funções de Ordem Superior

JavaScript permite que você passe funções como argumentos para outras funções ou que retorne funções de dentro de outras funções.

```javascript
function executar(funcao, valor) {
    return funcao(valor);
}

function dobrar(x) {
    return x * 2;
}

console.log(executar(dobrar, 5)); // Saída: 10
```

### Resumo

As funções em JavaScript são uma ferramenta poderosa para organizar e reutilizar código. Elas podem ter parâmetros, retornar valores, e até mesmo serem passadas como argumentos para outras funções. Se você tiver mais perguntas sobre funções ou qualquer outro tópico relacionado a JavaScript, fique à vontade para perguntar!


function soma(x, y) {
    return x + y
}
    console.log(soma (55,22)){
        
}


function textcreator (name,age,year){
    return 'Seu nome é ${name}, idade é ${age} e seu ano é ${year}'
} 

console.log(textcreator(felipo,27,1996))