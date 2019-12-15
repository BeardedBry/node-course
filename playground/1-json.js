const book = {
    title: 'Deep Work',
    author: 'Cal Newport',
}

const bookJSON = JSON.stringify(book);
console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);
console.log(parsedData);