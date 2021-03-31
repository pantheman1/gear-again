'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'demo@user.io',
          username: 'Demo',
          name: 'Demo Boss',
          photo: 'https://i.postimg.cc/W1RQGDyh/faceless-profile1.jpg',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser1',
          name: 'Harry Potter',
          photo: '',
          hashedPassword: bcrypt.hashSync(faker.internet.password())
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser2',
          name: 'Dementor',
          photo: 'https://i.postimg.cc/ZY7KZLMp/male-profile6.jpg',
          hashedPassword: bcrypt.hashSync(faker.internet.password())
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser3',
          name: 'Hillary Someone',
          photo: 'https://i.postimg.cc/ydrGkW96/female-profile2.jpg',
          hashedPassword: bcrypt.hashSync(faker.internet.password())
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser4',
          name: 'Stud Muffin',
          photo: 'https://i.postimg.cc/BQjZv1ry/male-profile5.jpg',
          hashedPassword: bcrypt.hashSync(faker.internet.password())
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser5',
          name: 'Jimmy John',
          photo: 'https://i.postimg.cc/ydN510Dr/male-profile4.jpg',
          hashedPassword: bcrypt.hashSync(faker.internet.password())
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser6',
          name: 'Susie Derkins',
          photo: 'https://i.postimg.cc/tCnKnd2K/female-profile1.jpg',
          hashedPassword: bcrypt.hashSync(faker.internet.password())
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo', 'FakeUser1', 'FakeUser2'] }
      },
      {}
    );
  }
};
