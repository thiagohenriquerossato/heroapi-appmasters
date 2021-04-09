<h2 align="center">HeroAPI</h2>

___

<p align="center">
  <img src="https://i.ibb.co/zrZKGZS/PNGIX-com-male-icon-png-6605715.png" width="300" heigth="300">
</p>
<p align="center">
  <img src="https://readme-maker.herokuapp.com/uploads/25d9d531090a876f-PNGIX.com_male-icon-png_6605715.png" width="300" heigth="300">
</p>


<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#rocket-Usabilidade">Usabilidade</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___


## :information_source: Sobre

Esse é um simples sistema que faz busca de heróis por qualquer atributo que estiver cadastrado. Ele consome os dados da superhero-api apenas na primeira busca, guardando todos os dados in memory.

## :interrobang: Motivo

Projeto desenvolvido para uma seleção da empresa App Masters.

## :seedling: Requisitos Mínimos



## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- Node
- Typescript
- Express
- Axios

## :rocket: Usabilidade

### base url: https://heroapi-appmasters.thiagorossato.repl.co

- rotas: /search
- query params: ?attribute=content
- headers: casesensitive = true/false default;
ex:
https://heroapi-appmasters.thiagorossato.repl.co/search?hairColor=blond

return list of heroes which has blond hair

- rotas: /slug
- params: /:slug

ex:
https://heroapi-appmasters.thiagorossato.repl.co/slug/149-captain-america

return Captain America profile

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.