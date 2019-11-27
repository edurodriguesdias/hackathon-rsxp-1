import Sequelize, { Model } from 'sequelize';

class School extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                phone: Sequelize.STRING,
                email: Sequelize.STRING,
                street: Sequelize.STRING,
                number: Sequelize.INTEGER,
                district: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                zip_code: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default School;
