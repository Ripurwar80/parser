const loadScenario = require("./load-scenario.json");
const configuration = require("./configuration.json");

const {saveToDatabase} = require("./utils");

const getLoadScenario = () =>{
    try{
        return loadScenario;
    } catch (error){
        throw {
            status: 500,
            message: error,
        }
    }
};

const saveLoadScenario = (newLoadScenario) =>{
    try{
        saveToDatabase(newLoadScenario,"load-scenario")
        return newLoadScenario;
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error,
        };
    }

}

const getConfiguration  = () =>{
    try{
        return configuration;
    } catch (error){
        throw {
            status: 500,
            message: error
        }
    }
}

const saveConfiguration = (newConfiguration) =>{
    try{
        saveToDatabase(newConfiguration,"configuration")
        return newConfiguration;
    } catch (error){
        throw {
            status: 500,
            message: error?.message || error,
        }
    }
}


module.exports = {
    getLoadScenario,
    saveLoadScenario,
    getConfiguration,
    saveConfiguration
}