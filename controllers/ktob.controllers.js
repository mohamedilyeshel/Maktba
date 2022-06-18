const ktobModels = require("../models/ktob.models");
const author = require("../models/author.models");

const GetKteb = async (req, res) =>
{
    const id = req.params.idKteb;
    try
    {
        const getKtebb = await ktobModels.findById(id);
        const getAuthor = await author.findById(getKtebb.authorId);
        res.status(200).json(
            {
                title : getKtebb.title,
                author : getAuthor.authorName,
                releaseDate : getKtebb.releaseDate
            }
        );
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}

const GetKtob = async (req, res) =>
{
    try
    {
        const getKtobb = await ktobModels.find();

        for(let i = 0; i < getKtobb.length; i++)
        {
            const getAuthor  = await author.findById(getKtobb[i].authorId);
            console.log(
                    `title : ${getKtobb[i].title}
                    description : ${getKtobb[i].decsription}
                    authorName : ${getAuthor.authorName}`
            );
        }

        res.status(200).json(getKtobb);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}

const CreateAuthor = async (req, res) =>
{
    const newAuthor = new author({
        authorName : req.body.authorName
    });

    try
    {
        const saveAuthor = await newAuthor.save();
        res.status(200).json(saveAuthor);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
};

const CreateKtob = async (req, res) =>
{
    const newKteb = new ktobModels({
        title : req.body.title,
        description : req.body.decsription,
        releaseDate : req.body.releaseDate,
        authorId : req.body.authorId
    });

    try
    {
        const saveKteb = await newKteb.save();
        res.status(200).json(saveKteb);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
};

module.exports.CreateKtob = CreateKtob;
module.exports.CreateAuthor = CreateAuthor;
module.exports.GetKteb = GetKteb;
module.exports.GetKtob = GetKtob;