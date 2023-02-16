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
    "topic":"Node JS",
    "description":"A post about Node JS",
    "postCategory":"Back End Dev"
}

{
    "topic":"Java",
    "description":"A post about Java",
    "postCategory":"Programming"
}

{
    "topic":"Python",
    "description":"A post about Python",
    "postCategory":"Programming"
}

{
    "topic":"React",
    "description":"A post about React",
    "postCategory":"Front End Dev"
}
*/