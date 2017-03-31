# Passo a passo

- mkdir app && app
- Criar os arquivos padrões: .editorconfig, .gitignore,
CONTRIBUTING.md, LICENSE.md, README.md

- npm init

    - 0.1.0

    - Projeto descolado
    - entry point: index.js


- Criar a estrutura de pastas
  - src
    - assets
      - img
      - scripts
      - styles
    - index.pug
    - partials
      - footer.pug
      - header.pug
    - layouts
      - default.pug

  - out


- Instalar e configurar o gulp (processo de build)
- npm install --save-dev gulp
- npm install --save-dev gulp-stylus
- npm install --save-dev gulp-pug
- Criar e montar o arquivo gulpfile.js

  - importar os plugins
  var gulp = require('gulp')
  var pug = require('gulp-pug')
  var stylus = require('gulp-stylus')

  gulp.task('pug', function() {
    gulp.src('./src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./out'))
  })

  gulp.task('stylus', function() {
    gulp.src('./src/assets/styles/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./out/assets/styles/'))
  })

  gulp.task('build', ['pug', 'stylus'])

  - INSTALANDO o livereload
  - npm i --save-dev gulp-connect



- Open Graph

- react-pomodoro
- open graph = protocolo que o facebook criou. Tipo de especificação
que te dá algumas metatags que colocando no seu site consegue
controlar a forma que ela é exibida no facebook, linkedin.
- Exemplo:
https://github.com/afonsopacifer/react-pomodoro/blob/master/app/index.html


    <!-- Open graph -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="Pomodoro timer">
        <meta property="og:description" content="Pomodoro timer for developers.">
        <meta property="og:url" content="http://afonsopacifer.github.io/react-pomodoro/">
        <meta property="og:image" content="http://afonsopacifer.github.io/react-pomodoro/img/share.png">

        <!-- Twitter cards -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Pomodoro timer">
        <meta name="twitter:description" content="Pomodoro timer for developers.">
        <meta name="twitter:url" content="http://afonsopacifer.github.io/react-pomodoro/">
        <meta name="twitter:image" content="http://afonsopacifer.github.io/react-pomodoro/img/share.png">        


- App react exemplo: afonsopacifer.github.io/react-pomodoro/


- IMPORTANTE
- O javascript é bloqueante, por esse motivo jogamos ele no fim do html, pois se houver um erro ele todo o conteúdo do body será mostrado.

- async no carregar do script ajuda a ser carregado paralelamente.


# Normalize.css

- O normalize padroniza as tags dos elementos do html5 para evitar
que cada browser faça a sua própria estilização.

- Basta acrescentar:
link(rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css")


- fonts.google.com
