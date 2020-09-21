Comandos

Este es el comando para crear un ambiente para una librería. Es el spacio de trabajo
ng new my-workspace --create-application=false

Este comando es usado para crear una librería DENTRO de un work
ng generate library my-lib --prefix=XXX

ng generate application my-first-app

ng g c components/atoms/button

ng g c components/atoms/title --project=vc-components --skip-import
ng g c components/atoms/button --project=vc-components --skip-import
ng g c components/atoms/alert --project=vc-components --skip-import
ng g c components/atoms/avatar --project=vc-components --skip-import

ng g c components/molecules/player-item --project=vc-components --skip-import
ng g c components/molecules/game-panel --project=vc-components --skip-import
Prefijo por defect lib

Flags de creación de librearía

Estructura dle angular json

NO se agrega el prefijo a las clases ni a las carpetas
