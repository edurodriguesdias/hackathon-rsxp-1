module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.addColumn('companies', 'logo_id', {
            type: Sequelize.INTEGER,
            references: { model: 'files', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true,
        });
    },

    down: async queryInterface => {
        queryInterface.removeColumn('logo_id');
    },
};
