require('dotenv').config({
    path:
        process.env.NODE_ENV === 'production'
            ? '.env'
            : `.env.${process.env.NODE_ENV}`,
});

const environment = {
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USER: process.env.MYSQL_USER,
    
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_USER: process.env.POSTGRES_USER,

    SEND_GRIND_KEY: process.env.SEND_GRIND_KEY,
};

module.exports = environment;