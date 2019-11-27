import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Company from '../app/models/Company';
import School from '../app/models/School';
import Student from '../app/models/Student';
import User from '../app/models/User';
import File from '../app/models/File';

const models = [Company, School, Student, User, File];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
