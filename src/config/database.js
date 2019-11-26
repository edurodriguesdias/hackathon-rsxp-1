module.exports = {
    dialect: 'mariadb',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'meetapp',
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
