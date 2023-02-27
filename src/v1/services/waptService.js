const waptDb = require("../database/waptDb")
const {v4:uuid} = require("uuid")

const getLoadScenario = () => {
    try {
        return waptDb.getLoadScenario();
    } catch (error){
        throw error;
    }
};

const saveLoadScenario = (newLoadScenario) => {
    try {
        return waptDb.saveLoadScenario(newLoadScenario);
    } catch (error) {
        throw error;
    }
}

const getConfiguration = () => {
    try {
        return waptDb.getConfiguration();
    } catch (error){
        throw error;
    }
};

const saveConfiguration = (newConfiguration) => {
    try {
        return waptDb.saveConfiguration(newConfiguration);
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getLoadScenario,
    saveLoadScenario,
    getConfiguration,
    saveConfiguration
}