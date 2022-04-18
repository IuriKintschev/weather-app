# Weather App

### Objetivo

O intuito do App é consumir uma API que retorna informações climáticas. Nele é possível visualizar a
previsão do tempo no atual. no desenvolvimento não foi tratado erro se o usuario recusar as permissões, 
foi focado na simplicidade para trazer o mvp.

https://user-images.githubusercontent.com/42626497/163802893-e8a403fe-7c3e-4c1b-9f15-3d7ab2dc33a0.mp4

### Executando o app

* Instalar o `Java` "precisa ser a o `JDK`, e não a `JRE`".
* Instalar o [android-studio](https://developer.android.com/studio), de preferencia tente criar um projeto e rodar para ter certeza que esta tudo OK com a instalação.
* Instale o `Node` na máquina, de preferencia a ultima verssão estavel.
* Instale o `Yarn` com o `npm` rodando o seguinte codigo..
```bash
$ npm install -g yarn
```
> Yarn é um gerenciador de dependências assim como o npm.
* Clone o repositorio do projeto na máquina e siga os comandos abaixo.
```bash
$ yarn

> Após execute o projeto

$ yarn android
```
<br/>
<br/>

> ### <b style="color: red;" >! Caso aconteça do servidor node não iniciar automaticamente</b>

- Em um novo terminal

```bash
$ yarn start
```
- E de reload no app

[//]: # ( Requirement: Weather App)

### Requisitos

 - [X] Iniciar projeto com o nome `"weather"`
 - [X] Criar um arquivo `"README.md"`
 - [X] Configurar o projeto para o `GitHub`
 - [X] Configurar `eslint`
 - [X] Criar estrutura inicial
 - [X] Criar navegação padrão do projeto
 - [X] Criar rotas de aplicação
 - [X] Criar `styleguide` do projeto
 - [ ] Configurar splash screen do projeto `ios/android`
   - [ ] Splash `android`
   - [ ] Splash `ios`
 - [ ] Configurar icon do projeto `ios/android`
   - [ ] Icon `android`
   - [ ] Icon `ios`
 - [X] Configurar fontes do projeto
 - [X] Configurar imagens do projeto
 - [X] Desenhar telas do projeto -
   - [X] Tela `Home`
   - [X] Tela `Weather`
 - [X] Recuperar localização do usuário
 - [X] Criar serviço para buscar dados do [OpenWeather](https://openweathermap.org/api)
 - [X] Integrar serviço com a tela `Weather`
 - [ ] Criar testes de validação
 - [ ] Gerar `APK` para `Android` e disponibilizar em releses do projeto no `git`

<br>
