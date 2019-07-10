'use string';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'avatar_id',

      {
        type: Sequelize.INTEGER,
        refences: { model: 'files', key: 'id' },
        onUpdate: 'CASCATE',
        onDelete: 'SET NULL',
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
