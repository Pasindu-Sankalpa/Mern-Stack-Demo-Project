const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    postCategory:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Posts',postSchema);

/*
{
    "topic":"MERN",
    "description":"A post about MERN",
    "postCategory":"Web Dev"
}

{
    "topic":"MERN stack",
    "description":"A post about MERN stack for web development",
    "postCategory":"Web Dev"
}
*/