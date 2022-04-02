# Stivie Bot
## _Praticando o uso da API do Discord_


[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

A finalidade do bot é apenas para estudo,
ainda não se tem a definição de tudo que vai ter, apenas vou tendo ideia e adicionando aqui ;).


## Features

- Bot de Muisca, com todos os camndo básicos encontrados no mercado.
- Audios Meme ;D
- Ferramentas para auxiliar as jogatinas de d&d
- Estou pensando ....

## Bibliotecas

Para o desenolvimento do projeto até o momento foram utilizadas as dependencias abaixo:


- [NodeJs](https://breakdance.github.io/breakdance/) - Versão: 16.0
- [DiscordJs](https://breakdance.github.io/breakdance/) - Versão: 13.6.0
- [dotenv](https://breakdance.github.io/breakdance/) - Versão: ^10.0.0
- [erela.js](https://breakdance.github.io/breakdance/) - Versão: ^2.3.3
- [erela.js-spotify](https://breakdance.github.io/breakdance/) - Versão: ^1.2.0
- [nodemon](https://breakdance.github.io/breakdance/) - Versão: ^2.0.15

## Intalação

Requer que a versão do node instalada na máquina seja: 16.x.
Requer que a versão Java instalada na máqauina seja: 52.0 - Java 11 +

Após clonar o projeto, basta acessar o mesmo via linha de comando e executar o comando.

```sh
npm install
```
Para utilizar a biblioteca do erela.js deve-se rodar o Lavalink
para isso vá até a pasta do projeto e encontre a pasta chamada "lavalink"
acessando via linha de comando basta executar o script abaixo:

```sh
java -jar Lavalink.jar
```

Por fim para rodar o projeto, deve se criar na pasta raiz do projeto um arquivo.env 
de acordo com o exemplo abaixo, basta substituir os valores:

```sh
BOT_TOKEN=xxxxxxxxxxxxx
SPOTIFY_CLIENT_ID=xxxxxxxxxxxxx
SPOTIFY_SECRET=xxxxxxxxxxxxx
```
Esses dados serão encontrados no Dashboard de Desenvolvimento do Discord e do Spotify respectivamente.

