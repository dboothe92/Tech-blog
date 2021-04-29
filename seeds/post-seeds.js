const { Post } = require('../models');

const postData = [{
        title: 'Can Batman save Gotham',
        content: 'Gotham was attacked today by "The Penguin" Does Gotham have hope, or should I head over there?',
        user_id: 2
    },
    {
        title: 'Metropolis sucks XD',
        content: 'Am I right or am I right?',
        user_id: 4
    },
    {
        title: "Who has seen Supermans's abs?",
        content: 'OMG',
        user_id: 3
    },
    {
        title: "Non of this belongs on a tech blog",
        content: "For real none of this has anything to do with tech. Come on @JL",
        user_id: 1 
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;