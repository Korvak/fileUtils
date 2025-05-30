
const fs = require('fs');


const IoC = require("../lib/IoC");

function registerCommands(args) {

    let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

    pkg.contributes.commands = []; //we clear the commands

    for (let service of IoC.services) {
        //we get all the commands we want to register from the service
        for (let command of service.commands) {
            //we add the commands from each
            pkg.contributes.commands.push({
            command: `${IoC.extensionName}.${command.name}`,
            title: `${command.title}`
            });
        }

    }

    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

}



module.exports = {
    registerCommands
}