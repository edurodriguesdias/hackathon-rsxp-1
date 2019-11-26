import Sequelize, { Model } from 'sequelize';

class Student extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                phone: Sequelize.STRING,
                gender: Sequelize.STRING,
                marital_status: Sequelize.STRING,
                birth_date: Sequelize.STRING,
                zip_code: Sequelize.STRING,
                birth_date: Sequelize.STRING,
                zip_code: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                address: Sequelize.STRING,
                address_number: Sequelize.STRING,
                city: Sequelize.STRING,
                neighborhood: Sequelize.STRING,
                school_level: Sequelize.STRING
            },
            {
                sequelize,
            }
        );
    }
}

export default Student;