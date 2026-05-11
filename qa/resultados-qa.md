EJECUCÓN ANÁLISIS LINT:
$ npm run lint

RESULTADOS OBTENIDOS:
> lab3-guia2@1.0.0 lint
> eslint src/**/*.js
D:\labo calidad\lab03-guia2\src\products.js
   3:1   warning  Unexpected var, use let or const instead  no-var
  11:1   warning  Unexpected var, use let or const instead  no-var
  12:6   warning  Unexpected var, use let or const instead  no-var
  14:20  error    Expected '===' and instead saw '=='       eqeqeq
  24:1   warning  Unexpected var, use let or const instead  no-var

✖ 5 problems (1 error, 4 warnings)
  0 errors and 4 warnings potentially fixable with the `--fix` option.

EJECUCÓN ANÁLISIS LINT:FIX
$ npm run lint:fix

RESULTADOS OBTENIDOS:
> lab3-guia2@1.0.0 lint:fix
> eslint src/**/*.js --fix

D:\labo calidad\lab03-guia2\src\products.js
  14:20  error  Expected '===' and instead saw '=='  eqeqeq

✖ 1 problem (1 error, 0 warnings)
