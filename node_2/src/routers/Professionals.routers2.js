const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/Professionals.controller2");

router.get("/", usersCtrl.getStart);
router.get("/professionals2", usersCtrl.getProfessionals);
router.post("/professionals2", usersCtrl.postProfessional);
router.put("/professionals2", usersCtrl.putProfessional);
router.delete("/professionals2", usersCtrl.deleteProfessional);

module.exports = router;