const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/Professional.controller")
router.get("/", usersCtrl.getStart);
router.get("/professional", usersCtrl.getUser);
router.get("/professional/:id", usersCtrl.getUserParams);
router.post("/professional", usersCtrl.postUser);
router.put("/professional", usersCtrl.putUser);
router.delete("/professional", usersCtrl.deleteUser);

module.exports = router;