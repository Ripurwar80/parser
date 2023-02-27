const express = require("express");
const router = express.Router();

const waptController = require("../controllers/waptController")

router.get("/loadscenario",waptController.getLoadScenario)
router.post("/loadscenario",waptController.saveLoadScenario)

router.get("/config", waptController.getConfiguration)
router.post("/config", waptController.saveConfiguration)

router.get("/file/:name", waptController.download)


module.exports = router;