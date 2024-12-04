//Piramide de Teste 

//Base - teste unitário (devs)
//Meio - teste de integração (devs também para QA) 
//Ponta - Teste End 2 End 

//Base - menos custo e menos "risco" emais rápido 
//Ponta - Mais custo e mais risco e mais tempo 


// Função soma
function soma(a, b) {
    return a + b; 
}

// Teste unitário
let resultado = soma(1, 2);
console.log(resultado); // Para verificar o resultado
expect(resultado).to.equal(3); // Certifique-se de que a biblioteca de testes está importada