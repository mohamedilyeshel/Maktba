const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    authorName : {type : String}
});

module.exports = mongoose.model("Author", AuthorSchema);