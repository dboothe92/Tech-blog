const { Comment } = require('../models');

const commentData = [{
        comment_text: "Maybe they have better prisons in metroplis. I catch him evertime :(",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Just saying I don't have a creepy asylum in my city...",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "For real tho.",
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: "Sorry @Batman",
        user_id: 3,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;