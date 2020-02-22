const path = require('path');
const fs = require('fs-extra');
const scss = require('node-sass');

const absolutePath = (relativePath) => path.resolve(`${__dirname}/${relativePath}`)
const readFile = (filePath) => fs.readFileSync(absolutePath(filePath), 'utf-8');
const writeFile = (filePath, content) => fs.outputFileSync(absolutePath(filePath), content, 'utf-8');
const compileSCSS = (content) => scss.renderSync({ data: content, outputStyle: 'compressed' }).css.toString().trim('\n');

const style = compileSCSS(readFile('./style.scss'));
const script = readFile('./script.js');
const index = readFile('./index.html').replace('/* style */', style).replace('/* script */', script);

fs.emptyDirSync(absolutePath('../dist'));
writeFile('../dist/index.html', index);