const fs = require('fs');
// Write file w/ data 
const writeFile = (template) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', template, err => {
            // if error occurs
            if (err) {
                reject(err);
                return;
            }
            // Otherwise
            resolve({
                ok: true,
                message: 'index.html succesfully created'
            });
        });
    });
};


// Copy file
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet copied successfully.'
            });
        });
    });
};



// Export
module.exports = { writeFile, copyFile };