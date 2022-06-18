const router = require("express").Router();
const ktobCont = require("../controllers/ktob.controllers")

router.post("/", ktobCont.CreateKtob);
router.post("/author", ktobCont.CreateAuthor);

router.get("/", ktobCont.GetKtob);
router.get("/:idKteb", ktobCont.GetKteb);

router.delete("/:idKteb", ktobCont.DeleteKteb);
router.delete("/author/:idAuthor", ktobCont.DeleteAuthor);

router.put("/:idKteb", ktobCont.UpdateKteb);
router.put("/author/:idAuthor", ktobCont.UpdateAuthor);

module.exports = router;