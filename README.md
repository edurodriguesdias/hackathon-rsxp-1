A simple boilerplate for Node.js using relational database

### List of Packages

-   ESlint
-   Express
-   Mariadb
-   Nodemon
-   Prettier
-   Sequelize
-   Sucrase
-   Yup

### Usage

Install packages
`$ yarn install`

Run server on port 3333
`$ yarn dev`

Create a new migration
`$ yarn sequelize migration:create --name=[NAME-MIGRATION]`

Run migrations
`$ yarn sequelize db:migrate`

Undo migration
`$ yarn sequelize db:migrate`
