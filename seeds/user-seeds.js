const { User } = require('../models');

const userData = [{
        username: 'Batman',
        password: 'Batman'

    },
    {
        username: 'Superman',
        password: 'Superman'
    },
    {
        username: 'Wonder Woman',
        password: 'WonderWoman'
    },
    {
        username: 'Batgirl',
        password: 'Batgirl'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;