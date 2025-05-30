const scripts = require("./scripts");
const [,, fnName, arg] = process.argv;

if (scripts[fnName]) {
    scripts[fnName](arg);
} else {
    console.log('Function not found');
}
