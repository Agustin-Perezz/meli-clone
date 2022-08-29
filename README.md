# Meli Clone App.
 
*Aplicación inicializada con:*  [Create React App](https://create-react-app.dev/).
 
Este proyecto tiene como finalidad copiar la ui de Mercado Libre. 

Link Deploy: https://agustin-perezz.github.io/meli-clone/

Permite al usuario buscar productos, visualizar la vista completa de un producto en específico, aplicar filtros y ordenamiento a la búsqueda.
 
**Nota:** Todos los datos de la aplicación son extraídos de la [API](https://developers.mercadolibre.com.ar/es_ar/api-docs-es) oficial de Mercado Libre.
## Instalación

1. Clonar el proyecto.
2. Instalar las dependencias ejecutando el comando `npm install`.
3. Crear una archivo `.env` con la siguiente variable: `REACT_APP_BASE_URL=http://localhost:3080`.
4. Clonar, instalar e inicializar la API de esta aplicación [aqui](https://github.com/Agustin-Perezz/meli-clone-back-end).
5. Verificar el correcto funcionamiento de la app con el comando `npm run test`.
6. Levantar la app con `npm start`.
     
## Estructuración del proyecto
 
* **/src**
  * **/assets** --> Contenido multimedia utilizado en la app.
  * **/components** --> Componentes funcionales de React.
  * **/context** --> Contexts que tienen como finalidad esparcir la información consumida por la app.
  * **/hooks** --> Custom Hooks.
  * **/models** --> Types de la información proporcionada por la api.
  * **/pages** --> Pages Components.
  * **/routes** --> Enrutamiento de la app.
  * **/services** -->  Conector de la aplicación con la api.
  * **/styles** -->  Styles de la app.
  * **/test** -->  Test de la app.
  
## Construido con

* [React](https://es.reactjs.org/)
* [React Router DOM](https://reactrouter.com/) 
* [Sass](https://sass-lang.com/)
* [TypeScript](https://www.typescriptlang.org/)
* Test unitarios y E2E: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - [Cypress](https://www.cypress.io/)

## Autor

Agustin Nicolas Perez - [Linkedin](https://www.linkedin.com/in/agustinperez-front-end-developer/).

