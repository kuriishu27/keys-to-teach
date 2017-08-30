var mongoose = require('mongoose');

var keysSchema = new mongoose.Schema({
    title: String,
    description: String,
    sourceAuthor: String,
    link: String,
    contributor: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    tags: [String],
    isPublic: Boolean
});

module.exports = mongoose.model("Key", keysSchema);