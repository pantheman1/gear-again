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
          profileImageUrl: 'https://www.ecoparent.ca/sites/default/files/styles/max_width_800px/public/2019-08/canstockphoto27315421.jpg?itok=AuG50amW',
          bio: "I'm a super happy person who loves to shop and sell.",
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser1',
          name: 'Harry Potter',
          bio: "Sometimes I just feel like someone is out to get me.",
          profileImageUrl: '',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser2',
          name: 'Dementor',
          bio: "I really care about people. People mean a lot to me. I see them from the inside out.",
          profileImageUrl: 'https://i.postimg.cc/ZY7KZLMp/male-profile6.jpg',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser3',
          name: 'Hillary Someone',
          bio: "Buy from me and save the planet!",
          profileImageUrl: 'https://i.postimg.cc/ydrGkW96/female-profile2.jpg',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser4',
          name: 'Stud Muffin',
          bio: "Everything I own is from this fantastic shop. I love it.",
          profileImageUrl: 'https://i.postimg.cc/BQjZv1ry/male-profile5.jpg',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser5',
          name: 'Jimmy John',
          bio: "I'm really hungry right now. I have a cat and I see her eat all day long and all I want to do is eat. But not sandwiches. I've had enough sandwiches to last a lifetime.",
          profileImageUrl: 'https://i.postimg.cc/ydN510Dr/male-profile4.jpg',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser6',
          name: 'Susie Derkins',
          bio: "I am super successful because I didn't cheat off of Calvin. He's not here is he?",
          profileImageUrl: 'https://i.postimg.cc/tCnKnd2K/female-profile1.jpg',
          hashedPassword: bcrypt.hashSync('password')
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
