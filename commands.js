const fs = require("fs");

const readFile = fileName => {
  try {
    return JSON.parse(fs.readFileSync(fileName));
  } catch (e) {
    return [];
  }
};

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(content));
  } catch (e) {
    console.log(e);
  }
};

const add = (item, price) => {
    let gList = readFile("list.json")
    const whatIndex = (index => index.item === item )
    let index = gList.findIndex(whatIndex)
    if (index === -1){ // Item does not exist
        gList.push({item, price})
        }
    else { // Item exists already, replace old price with new one
        gList[index].price = price;
    }
    writeFile("list.json", gList);
}

const remove = item => {
    let gList = readFile("list.json")
    const IndexFiltered = (index => index.item !== item )
    let filteredList = gList.filter(IndexFiltered)
    writeFile("list.json", filteredList )
    }

module.exports = {
    add, remove, readFile }


