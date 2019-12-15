const fs = require('fs');


const dataBuffer = fs.readFileSync('1-json.json');
const dataString = dataBuffer.toString();
const data = JSON.parse(dataBuffer);

data.name = "Brian";
data.age = 29;

const jsonData = JSON.stringify(data);

fs.writeFileSync('1-json.json', jsonData);