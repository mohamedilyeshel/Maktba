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
        decsrip : req.body.decsrip,
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

const DeleteKteb = async (req, res) =>
{
    const id = req.params.idKteb;
    try
    {
        const delKteb = await ktobModels.findByIdAndDelete(id);
        res.status(200).json(delKteb);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}

const DeleteAuthor = async (req, res) =>
{
    const id = req.params.idAuthor;
    try
    {
        const delAuthor = await author.findByIdAndDelete(id);
        res.status(200).json(delAuthor);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}

const UpdateKteb = async (req, res) =>
{
    const id = req.params.idKteb;
    try
    {
        const upKteb = await ktobModels.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(upKteb);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}

const UpdateAuthor = async (req, res) =>
{
    const id = req.params.idAuthor;
    try
    {
        const upAuthor = await author.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(upAuthor);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}

module.exports.CreateKtob = CreateKtob;
module.exports.CreateAuthor = CreateAuthor;
module.exports.GetKteb = GetKteb;
module.exports.GetKtob = GetKtob;
module.exports.DeleteKteb = DeleteKteb;
module.exports.DeleteAuthor = DeleteAuthor;
module.exports.UpdateKteb = UpdateKteb;
module.exports.UpdateAuthor = UpdateAuthor;