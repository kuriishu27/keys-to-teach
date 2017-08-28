var mongoose = require('mongoose');

var keysSchema = new mongoose.Schema({
    title: String,
    description: String,
    sourceAuthor: String,
    link: String,
    contributor: String,
    comments: [
        {
            text: String,
            author: String,
            date: Date
        }
    ],
    tags: [String],
    isPublic: Boolean
});

module.exports = mongoose.model("Key", keysSchema);