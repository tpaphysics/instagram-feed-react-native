# Feed do instagram com React-Native

---

## Introdução

No intuito de desenvolver minhas habilidades no React Native, desenvolvi um clone do feed de postagens do instagram. Utilizamos a ajuda de outros posts sobre o tema na internet.

<center>
	<img src=".assetsForGit/previewApp.gif" alt="Preview App" width="200px"/>
</center>


---
## Tecnologias utilizadas

- React Native
- styled-components
- Expo
- Typescript

## Getting Started

Antes de iniciar o expo,  certifique-se de ter o nvm instalado e de usar a versão lts do NodeJ

```bash
nvm use lts
```

Foi criada uma api fake utilizando o json-server, para isso utilizamos o arquivo ./src/server.js.

Para iniciar a api, execute o camando:

```bash
yarn api
```

Abra outro terminal e digite:

```bash
yarn start
```
## Observações ...

O script api e start foram definidos no package.json

```json
"scripts":{
...,
	start: ./src/ip.sh
	api:" yarn json-server server.json -H 0.0.0.0 -d 1000 -w"
}
```

A flag  -H  foi definida pois é necessária para acessar a aplicação no dispositivo físico com expo

<aside>
💡 -H 0.0.0.0

</aside>

O script [ip.sh]() descobre seu ip atual e cria o arquivo .env com a variável MY_IP

```bash
#! /bin/bash
ip=$(hostname -I | awk '{print $1}')
echo "MY_IP=$ip" >.env
expo start
```

Isto é necessário para acessar a aplicação do dispositivo físico mobile.
