const {Router} = require ("express");
const router = Router();
const usersCtrl = require("../controller/Professionals.controller");

router.get("/", usersCtrl.getStart);
router.get("/professionals", usersCtrl.getProfessionals);
router.post("/professionals", usersCtrl.postProfessional);
router.put("/professionals", usersCtrl.putProfessional);
router.delete("/professionals", usersCtrl.deleteProfessional);

module.exports = router;