// [Parent-name] [Parent-surname] has [count] children and they names are: [Child-name], [Child-name], [Child-name].


const fs = require('fs/promises');
const path = require('path');

// console.log(path);

console.log(__dirname);
console.log(__filename);

(async () => {

    const fullPath = path.join(__dirname, './country.json');
    const countryContent = await fs.readFile(fullPath, 'utf-8');

    console.log(countryContent);

    const personInfo = JSON.parse(countryContent);
    console.log(personInfo);
    

})();