var gulp = require('gulp'); /* Importando o gulp que baixamos no PowerShell digitando: "npm install --save-dev gulp"*/
var sass = require('gulp-sass')(require('sass')); /* importando os pacotes que instalamos (gulp-sass: resposavel por integrar o sass com o gulp)*/
var sourcemaps = require('gulp-sourcemaps'); /* importando o pacote que instalamos (npm install --save-dev gulp-sourcemaps) */
var uglify = require('gulp-uglify'); /* importando o pacote que ira comprimir os arquivos JavaScript */
var imagemin = require('gulp-imagemin'); /* Importando o pacote que irá comprimir as imagens  */

function comprimeImagens(){
    return gulp.src('./source/images/*') /* Indicando a pasta que o gulp irá observar gulp.src('./source/images/*') */
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))  /* Pasta de dstino das imagens já comprimidas */
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify()) /* dentro do pipe estamos executando o plugin do gulp */
    .pipe(gulp.dest('./build/scripts')) /* pipe para chamar a função gulp.dest, colocando a pasta de destino dos arquivos comprimidos */
}

function compilaSass(){
    return gulp.src('./source/styles/*scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps')) /* Criando o arquivo de mapeamento para o css*/
    .pipe(gulp.dest('./build/styles')) /* pasta de destino dos arquivos "css" */
}

exports.default = function(){ /* Executando automaticamente o gulp sem precisar digitar no terminal (npm run gulp sass) */
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass)); /* Compilar o sass */
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript)); /* Exportando a função "comprimeJavaScript" */
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens)); /* Exportando a função "comprimeImagens" */
}