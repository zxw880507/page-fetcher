const request = require('request');
const [url, path] = process.argv.slice(2);
const fs = require('fs');
request(url, (error, response, body) => {
    if (error) {
        console.log('error:', error);
    }
    fs.appendFile(path, body, 'utf8', () => {
        const stats = fs.statSync(path);
        console.log(`Downloaded and saved ${parseInt(stats['size'])} bytes to ${path}`)
    });
})