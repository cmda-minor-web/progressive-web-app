const ejs  = require('ejs');
const fs   = require('fs');
const path = require("path");


function render(data){
    // const template = fs.readFileSync(path.resolve(__dirname,'../views/detail-page.ejs'),  'utf-8')

    const template = fs.readFileSync('views/detail-page.ejs',  'utf-8')

    const html = ejs.render ( template , data )

    console.log(data)

    writeHTML(data, html)
    
}

function writeHTML(data, html){
    fs.writeFileSync(path.resolve(__dirname,`html/detail-${1}.html`), html, 'utf8');
}

module.exports = render