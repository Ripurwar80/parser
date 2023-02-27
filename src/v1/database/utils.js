const fs = require("fs");
const yaml = require("js-yaml");

const saveToDatabase = (DB, fileName) => {
    fs.writeFileSync("./v1/database/"+fileName+".json", JSON.stringify(DB, null, 2), {
        encoding: "utf-8",
    });

    const yaml_data = yaml.dump(DB);

    fs.writeFile("./v1/controllers/resources/"+fileName+".yaml", yaml_data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

module.exports = { saveToDatabase };