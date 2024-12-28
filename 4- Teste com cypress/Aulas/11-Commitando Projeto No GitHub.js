//Criar um novo Repositório no Github e nomeie ele 
Exemplo: https://github.com/FelipoB/Estudos

//Deixe ele publico ou privado 

//Navegue até o diretório do seu projeto
cd /caminho/para/seu/projeto

//Inicialize um repositório Git local
git init  ---- Irá criar uma pasta .git dizendo que iniciou o git repository (comando ls -a para ver a pasta .git) 

// o que indentifica que a pasta é um repositório git é a pasta .git e tambem a (master) no final do caminho

//Linkar o repositório que está no Github com o repositório local
git remote add origin "https://github.com/FelipoB/Estudos"
// (exemplo do link do repositório sem as aspas)

git branch -M main  //Irá mudar o nome da branch master para main, porem pode dar qualquer nome para a branch

git status //Verificar o status do repositório mostrando os arquivos que foram modificados e que não foram commitados

//Adicione os arquivos modificados ao commit
git add .

//Verifique novamente o status do repositório
git status //Mostra os arquivos que foram adicionados ao commit

//Faça o commit com uma mensagem
git commit -m "Sua mensagem de commit"

//Envie as mudanças para o repositório remoto
git push origin main ou git push 

//Um arquivo README é um documento que geralmente acompanha um projeto de software e fornece informações essenciais sobre o projeto. Ele é normalmente escrito em Markdown e nomeado como README.md. Aqui estão alguns pontos importantes sobre o arquivo README:

//Descrição do Projeto: Explica o propósito do projeto, o que ele faz e por que foi criado.
//Instruções de Instalação: Orienta os usuários sobre como instalar e configurar o projeto.
//Como Usar: Fornece exemplos de uso e instruções sobre como executar o projeto.
//Contribuição: Informa como outros desenvolvedores podem contribuir para o projeto.
//Licença: Especifica a licença sob a qual o projeto é distribuído.



//Aqui está um exemplo básico de um arquivo README.md:

//Nome do Projeto

//Descrição
Uma breve descrição do que o projeto faz e por que ele é útil.

## Instalação
Instruções sobre como instalar e configurar o projeto.

```bash
# Clone o repositório
git clone https://github.com/usuario/projeto.git

# Navegue até o diretório do projeto
cd projeto

# Instale as dependências
npm install   