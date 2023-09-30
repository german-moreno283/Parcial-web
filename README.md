# Parcial 1
# ISIS3710
## Germán Leonardo Moreno Cainaba
### Cod. 202116701

### El código al que hago mención es el corregido después de haber terminado la sesión de clase. No era posible realizar la internacionalización con un código con fallos.

## Ejecución del código
Para realizar la ejecución es necesario ejecutar npm start, el navegador no se abre automáticamente por lo que en la barra de búsqueda hay que poner `localhost:puerto`

## Decisiones de desarrollo

Para la relación entre vistas se usó el componente Link de react-bootstrap. Las rutas se definen en App.js, en este componente también se agrega state = {}, que permite enviar información de una vista a otra. Para acceder a estas variables se usa useLocation en el componente al que se llega. 

### Elementos de react usados
* Se usaron formularios para almacenar y verificar el login
* Se usó un hook de efecto para realizar una petición GET a los datos, se tenía planteado el uso de un POST para la verificación del login, pero debido al mal funcionamiento de Mockaroo en la universidad no se hizo
* Se usaron hooks de estado para poder acceder al valor de los input y dependiendo de ellos realizar verificaciones
* Para la navegación se usaron links
* Para internacionalización se usó intl, con archivos json para definir los id y el valor asignado.

Durante la realización del código fue necesario hacer que la renderización de algunos elementos fuera condicional, esto especialmente para definir si se veía un input o un párrafo en la descripción.

Debido a que el POST no estaba disponible la asignación de el tipo de usuario se hace de forma aleatoria.
