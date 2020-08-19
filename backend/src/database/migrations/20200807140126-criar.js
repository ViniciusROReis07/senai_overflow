'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('alunos', {
     id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },
     ra : {
       type : Sequelize.STRING,
       allowNull:false,
       unique:true
     },
     nome : {
      type : Sequelize.STRING,
      allowNull:false
    },
    email : {
      type : Sequelize.STRING,
      allowNull:false,
      unique:true
    },
    senha:{
      type: Sequelize.STRING,
      allowNull:false
    },
    created_at : {
      type:Sequelize.DATE,
      allowNull:false
    },
    updated_at : {
      type:Sequelize.DATE
    }

    });
  },

  down: async (queryInterface, Sequelize) => {
   queryInterface.dropTable("alunos")
  }
};
