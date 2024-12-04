





-----------------------------------------------------
O Node.js possui vários módulos nativos que facilitam o desenvolvimento de aplicações. Aqui estão alguns dos principais módulos nativos:

1. **http**: Permite criar servidores web e fazer requisições HTTP.
   ```javascript
   const http = require('http');
   const server = http.createServer((req, res) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Olá, mundo!\n');
   });
   server.listen(3000, () => {
       console.log('Servidor rodando na porta 3000');
   });
   ```

2. **fs**: Manipula o sistema de arquivos, permitindo ler e escrever arquivos.
   ```javascript
   const fs = require('fs');
   fs.readFile('arquivo.txt', 'utf8', (err, data) => {
       if (err) throw err;
       console.log(data);
   });
   ```

3. **path**: Manipula e transforma caminhos de arquivos.
   ```javascript
   const path = require('path');
   const caminhoCompleto = path.join(__dirname, 'pasta', 'arquivo.txt');
   console.log(caminhoCompleto);
   ```

4. **os**: Fornece informações sobre o sistema operacional.
   ```javascript
   const os = require('os');
   console.log(`Plataforma: ${os.platform()}`);
   console.log(`Arquitetura: ${os.arch()}`);
   ```

5. **events**: Implementa um padrão de eventos, permitindo que objetos emitam e escutem eventos.
   ```javascript
   const EventEmitter = require('events');
   const meuEmitter = new EventEmitter();
   meuEmitter.on('evento', () => {
       console.log('Um evento ocorreu!');
   });
   meuEmitter.emit('evento');
   ```

6. **util**: Fornece funções utilitárias, como formatação de strings e herança de classes.
   ```javascript
   const util = require('util');
   const formatado = util.format('Olá, %s!', 'mundo');
   console.log(formatado);
   ```

7. **crypto**: Permite a implementação de criptografia.
   ```javascript
   const crypto = require('crypto');
   const hash = crypto.createHash('sha256').update('minhaSenha').digest('hex');
   console.log(hash);
   ```

Esses são apenas alguns dos muitos módulos nativos disponíveis no Node.js. Você pode consultar a [documentação oficial](https://nodejs.org/dist/latest-v18.x/docs/api/) para uma lista completa e mais detalhes sobre cada módulo.