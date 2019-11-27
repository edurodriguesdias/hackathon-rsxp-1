import Sequelize, { Model } from 'sequelize';

class Company extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                cnpj: Sequelize.STRING,
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

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'logo_id', as: 'logo' });
    }
}

export default Company;
