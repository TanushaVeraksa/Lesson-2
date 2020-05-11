// task 1
let fruitsArr = [{
        name: 'banana',
        count: 10
    }, {
        name: 'apple',
        count: 5
    }, {
        name: 'peach',
        count: 15
    }, {
        name: 'orange',
        count: 8
    }, {
        name: 'grapefruit',
        count: 13
}];

function arrWithOneProperty(arr, paramName) {
    let s =  arr.map(arr => arr[paramName]);
    return s;
}

let arrayOfFruitsName = arrWithOneProperty(fruitsArr, 'name');
let arrayOfFruitsCount = arrWithOneProperty(fruitsArr, 'count');

console.log(arrayOfFruitsName);
console.log(arrayOfFruitsCount);

// task 2

let readers = [{
    name: 'Anna',
    books: ['Harry Potter', 'War and Peace'],
}, {
    name: 'Tanya',
    books: ['Harry Potter', 'Sherlock Holmes', 'Jane Eyre'],
}, {
    name: 'Sasha',
    books: ['To Kill a Mockingbird', 'Diary of a Pilgrimage', 'Harry Potter'],
}, {
    name: 'Lena',
    books: ['The Cat in the Hat', 'Jane Eyre', 'Dracula'],
}, {
    name: 'Misha',
    books: ['Dracula', 'Diary of a Pilgrimage', 'The Million Pound Bank Note'],
}];


function getBooks(arr) {
    return arr.reduce((acc, arrItem) => {
        let books = arrItem.books;
        for(let i = 0; i< books.length; i++) 
            if(acc.indexOf(books[i]) === -1) 
                acc.push(books[i]);
            
        return acc;
    }, []);
}


console.log(getBooks(readers));