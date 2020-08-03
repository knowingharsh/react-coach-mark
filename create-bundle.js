const fs = require('fs');
const path = require('path');

const packageJsonFilePath = path.resolve(__dirname + "/package.json");
const bundleFilePath = path.resolve(__dirname + "/build/bundle.js");
const jsDirectoryPath = path.resolve(__dirname, './build/static/js');
const cssDirectoryPath = path.resolve(__dirname, './build/static/css');

let homepage = "/";
console.log(__dirname);

if (fs.existsSync(packageJsonFilePath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonFilePath));
    if (packageJson.homepage) {
        homepage = packageJson.homepage;
    }
}

console.log(`Building bundle with homepage: ${homepage}`)

if (!fs.existsSync(jsDirectoryPath)) {
    console.error('./build/static/js does not exist. Build failed!');
    process.exit(-1);
}
if (!fs.existsSync(cssDirectoryPath)) {
    console.error('./build/static/css does not exist. Build failed!');
    process.exit(-1);
}

const jsLinks = [];
fs.readdirSync(jsDirectoryPath).forEach(file => {
    if (path.extname(file) === '.js') {
        jsLinks.push(`${homepage}static/js/${file}`);
    }
});

const cssLinks = [];
fs.readdirSync(cssDirectoryPath).forEach(file => {
    if (path.extname(file) === '.css') {
        cssLinks.push(`${homepage}static/css/${file}`);
    }
});

let bundleFileContent = `
const polyfillScriptElement = document.createElement('script');
polyfillScriptElement.src = "https://cdn.polyfill.io/v3/polyfill.min.js?features=default,es6,Array.prototype.includes,Object.entries,Object.values,Array.prototype.flatMap";
document.head.appendChild(polyfillScriptElement);

${JSON.stringify(jsLinks)}.forEach(function(scriptLink){
    const scriptElement = document.createElement('script');
    scriptElement.src = hostOrigin + scriptLink;
    document.body.appendChild(scriptElement);
});

${JSON.stringify(cssLinks)}.forEach(function(styleLink){
    const styleElement = document.createElement('link');
    styleElement.href = hostOrigin + styleLink;
    styleElement.rel = 'stylesheet';
    document.head.appendChild(styleElement);
});
`;
fs.writeFileSync(bundleFilePath, bundleFileContent);

console.log(`Bundle file created!`);