const url = require('url');
const fs = require('fs');
const path = require('path');
//const cats = require('../data/cats.json');

module.exports = (req, res) => {
    
    if (req.url === '/' && req.method === 'GET') {
        // let filePath = path.normalize(
        //     path.join(__dirname, './views/home/index.html')
        // );


        fs.readFile('./views/home/index.html', (err, data) => {

            if (err) {
                console.log(err);
                res.writeHead(404,{
                    'Content-Type':'text.plain'
                });
                res.write('404 Not Found');
                res.end();
                return;
            } 
                res.writeHead(200,{
                    'Contetnt-Type':'text.html'
                });
                res.write(data);
                res.end();
            
        } )
    } else {
        return true;
    }
}