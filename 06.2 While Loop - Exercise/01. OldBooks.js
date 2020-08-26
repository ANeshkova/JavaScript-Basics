function oldBooks(input) {

    let neededBook = input.shift();
    let capacity = Number(input.shift());

    let books = input.shift();

    let count = 0;

    while (capacity != 0) {

        if (books == neededBook) {
            break;
        }

        books = input.shift();
        
        capacity--;
        count++;
    }

    if (books == neededBook) {
        console.log(`You checked ${count} books and found it.`);
        
    } else {

        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`)
    }
}

oldBooks([
    "Troy",
    "8",
    "Stronger",
    "Life Style",
    "Troy"
]);
