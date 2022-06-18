const router = require("express").Router();
const ktobCont = require("../controllers/ktob.controllers")

router.post("/", ktobCont.CreateKtob);
router.post("/author", ktobCont.CreateAuthor);
router.get("/", ktobCont.GetKtob);
router.get("/:idKteb", ktobCont.GetKteb);

module.exports = router;