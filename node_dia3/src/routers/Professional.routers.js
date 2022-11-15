const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/Professional.controller");

router.get("/", usersCtrl.getStart);
router.get("/professionals", usersCtrl.getProfessionals);
router.post("/professional", usersCtrl.postProfessional);
router.put("/professional", usersCtrl.putProfessional);
router.delete("/professional", usersCtrl.deleteProfessional);

module.exports = router;