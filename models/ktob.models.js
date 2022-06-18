const mongoose = require("mongoose");

const KtobSchema = new mongoose.Schema({
    title : {type : String},
    decsription : {type : String},
    releaseDate : {type : Date},
    authorId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Author"
    }
});

module.exports = mongoose.model("Ktob", KtobSchema);