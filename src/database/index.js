import Sequelize from 'sequelize';

import Company from '../app/models/Company';
import School from '../app/models/School';

import databaseConfig from '../config/database';

const models = [Company, School];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
