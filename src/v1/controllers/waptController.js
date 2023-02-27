const waptService = require("../services/waptService")
global.__basedir = __dirname

const getLoadScenario = (req,res) => {
    try{
        const loadScenario = waptService.getLoadScenario();
        res.send({status: "OK", data: loadScenario});
    } catch (error){
        res.status(error?.status || 500).send({status: "FAILED", data: {error: error?.message || error}})
    }

};

const saveLoadScenario = (req,res) => {
    const {body} = req;
    console.log(body)

    try {
        const savedLoadScenario = waptService.saveLoadScenario(body);
        res.status(201).send({ status: "OK", data: savedLoadScenario });
    } catch (error){
        res.status(error?.status || 500)
            .send({status: "FAILED", data: {error: error?.message || error}});
    }

};

const getConfiguration = (req,res) => {
    try{
        const loadScenario = waptService.getConfiguration();
        res.send({status: "OK", data: loadScenario});
    } catch (error){
        res.status(error?.status || 500).send({status: "FAILED", data: {error: error?.message || error}})
    }

};

const saveConfiguration = (req,res) => {
    const {body} = req;
    console.log(body)

    try {
        const savedConfiguration = waptService.saveConfiguration(body);
        res.status(201).send({ status: "OK", data: savedConfiguration });
    } catch (error){
        res.status(error?.status || 500)
            .send({status: "FAILED", data: {error: error?.message || error}});
    }

};

const download = (req, res) => {
    const fileName = req.params.name;  // define uploads folder path
    const directoryPath = __basedir + "/resources/";
    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "There was an issue in downloading the file. " + err,
            });
        }
    });
};

module.exports = {
    getLoadScenario,
    saveLoadScenario,
    getConfiguration,
    saveConfiguration,
    download
};