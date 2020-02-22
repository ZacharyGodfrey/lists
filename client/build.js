const path = require('path');
const fs = require('fs-extra');
const scss = require('node-sass');

const readFile = (filePath) => fs.readFileSync(path.resolve(filePath), 'utf-8');
const writeFile = (filePath, content) => fs.outputFileSync(path.resolve(filePath), content, 'utf-8');
const compileSCSS = (content) => scss.renderSync({ data: content, outputStyle: 'compressed' }).css.toString().trim('\n');

const index = readFile('./index.html');
const style = readFile('./style.scss');
const script = readFile('./script.js');

fs.emptyDirSync(path.resolve('../dist'));
writeFile('../dist/index.html', index.replace('/* style */', compileSCSS(style)).replace('/* script */', script));