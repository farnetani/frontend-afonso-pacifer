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

  
