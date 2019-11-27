import Sequelize, { Model } from 'sequelize';

class File extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `https://hackathon-api-rsxp-2019.herokuapp.com/files/${this.path}`;
                    },
                },
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default File;
