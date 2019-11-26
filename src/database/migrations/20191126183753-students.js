module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      school_id: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          Model: 'School',
          key: 'school_id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,         
        allowNull: false
      },
      marital_status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      zip_code: {
        type: Sequelize.INTEGER(8),
        allowNull: false
      },  
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false
      },
      neighborhood: {
        type: Sequelize.STRING,
        allowNull: false
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true
      },
      complement: {
        type: Sequelize.STRING,
        allowNull: true
      },      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
