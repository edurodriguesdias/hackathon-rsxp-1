module.exports = {
    dialect: 'mariadb',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'temp',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
    dialectOptions: {
        useUTC: true,
    },
    timezone: '-03:00',
};
