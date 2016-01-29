# ionic-soundboard-app

Esta es la plantilla inicial del curso de [Programo x Comida](http://programoxcomida.github.io/) sobre desarrollo mobile de aplicaciones usando el [Ionic Framework](http://ionicframework.com/).

## Como usar esta plantilla

*Esta plantilla no funciona por si sola*. No contiene las librerias de Ionic & angular.

Para usar esto, hay que crear un nuevo proyecto de Ionic usando el CLI de ionic via node.js, o copiando y pegando todo el contenido del branch master dentro de un proyecto existente de Ionic o con Cordova pero tendrias que descargar las librerias necesarias.

### Usandolo con el CLI de Ionic:

Debemos agregar la URL de este repositorio al final del comando `ionic start`:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myApp https://github.com/ProgramoxComida/ionic-soundboard-app
```

Entonces:
```bash
$ cd myApp
$ ionic platform add android
$ ionic build android
$ ionic emulate android
```

Si deseas crear el app en otra plataforma como ios, solo cambia android por ios, recuerda para crear aplicaciones de iOS se requiere de una Mac y una licencia de desarrollador en caso de que probar la aplicacion en dispositivos Apple.

## Extra
A lo largo del curso de Ionic estaremos usando [Typescript](http://www.typescriptlang.org/) para generar nuestra aplicacion, y para la parte de las plantillas estaremos usando [jade](http://jade-lang.com/), usaremos tsd para agregar las definiciones de Ionic y Angular. Para la parte del CSS usaremos Sass, por lo que habra que usar `ionic setup sass`, previo a eso debemos hacer lo siguiente:

```bash
$ npm install
$ npm install gulp-tsc gulp-jade --save
$ npm install -g tsd
$ tsd install angular angular-ui-router cordova cordova-ionic ionic --save
```
> si llegase a salir un error en el npm install con la libreria node-sass, ejecutar `npm install gulp-sass --save` , este error ocurre debido a la compatiblidad con algunas versiones de node.


Modificaremos nuestro gulpfile a nuestras necesidades:
``` javascript
var typescript = require('gulp-tsc')
var jade = require('gulp-jade')

var paths = {
  sass: ['./scss/**/*.scss'],
  src: ['./src/**/*.ts'],
  jade: ['./jade/**/*.jade']
}

gulp.task('default', ['sass', 'compile', 'jade'])

gulp.task('jade', function (done) {
  gulp.src(paths.jade)
  .pipe(jade())
  .pipe(gulp.dest('./www/templates'))
  .on('end', done)
})

gulp.task('compile', function () {
  gulp.src(paths.src)
  .pipe(typescript({
    emitError: false
  }))
  .pipe(gulp.dest('./www/js/'))
})

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass'])
  gulp.watch(paths.src, ['compile'])
  gulp.watch(paths.jade, ['jade'])
})
```
Y para la conversion de ts a js ocupamos un tsconfig.json con la siguiente estructura:
``` json
{
  "compilerOptions": {
    "target": "es5",
    "allowNonTsExtensions": true,
    "module": "commonjs",
    "sourceMap": true,
    "isolatedModules": true,
    "noEmitOnError": false,
    "rootDir": ".",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  "compileOnSave": false
}
```


## Contact
Email: kiramishima@outlook.com

Twitter: @kiramishima


