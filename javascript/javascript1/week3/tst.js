//5,6,7 creating objects,function to display that ans some css style
/*let booksObj = {
    1: {
        "title": "",
        "language": "",
        "author": ""
    },
    2: {
        "title": "",
        "language": "",
        "author": ""
    },
    3: {
        "title": "",
        "language": "",
        "author": ""
    },
    4: {
        "title": "",
        "language": "",
        "author": ""
    },
    5: {
        "title": "",
        "language": "",
        "author": ""
    },
    6: {
        "title": "",
        "language": "",
        "author": ""
    },
    7: {
        "title": "",
        "language": "",
        "author": ""
    },
    8: {
        "title": "",
        "language": "",
        "author": ""
    },
    9: {
        "title": "",
        "language": "",
        "author": ""
    },
    10: {
        "title": "",
        "language": "",
        "author": ""
    },
};
let booksWriter = [
    "williem",
    "Leo Tolstoy",
    "Miguel de Cervantes",
    "Erminio Macario",
    "Marcel Proust",
    "D.E Stevenson",
    "Lisa",
    " ",
    " ",
    " "
];
let booksName = [
    "Romeo And Juliet",
    "war and peace",
    "Don Quixote",
    "Hamlet",
    "In search of lost time",
    "Programming foundemental",
    "Safid barfi",
    "nineteen eighty four",
    "Innevetators",
    "Basic javascript"
];
let booksImage = [
    "images/Romeo and Juliet.jpeg",
    "images/war_and_peace.jpg",
    "images/don_quixote.jpg",
    "images/hamlet.jpg",
    "images/in search of lost time.jpeg",
    "images/programming foundemental.jpg",
    "images/safid barfi.jpeg",
    "images/9984.jpg",
    "images/ ",
    "images/basicjs.png"
];
let bookslang = [
    "english", "english", "english",
    "english", "english", "english",
    "farsi", "english", "english",
    "english"
];
let index = 0;
let jIndex = -1;
for (let key in booksObj) {
    jIndex = jIndex + 1;
    index = index + 1;
    stringIndex = index.toString();
    if (key === stringIndex) {
        booksObj[key]['title'] = booksName[jIndex];
        booksObj[key]['language'] = bookslang[jIndex];
        booksObj[key]['author'] = booksWriter[jIndex];
    }
};
index = -1;
makeListBook();
function makeListBook() {
    for (let propt in booksObj) {
        index = index + 1;
        document.body.style.border = "5px solid green";
        let bookInTable = document.createElement('ul');
        let bookTitle = document.createElement('h1');
        let titleText = document.createTextNode(booksObj[propt]['title']);
        bookTitle.appendChild(titleText);
        let bookLanguage = document.createElement('li');
        let languageText = document.createTextNode(booksObj[propt]['language']);
        bookLanguage.appendChild(languageText);
        let bookAuthor = document.createElement('li');
        let authorText = document.createTextNode(booksObj[propt]['author']);
        bookAuthor.appendChild(authorText);
        bookInTable.appendChild(bookAuthor);
        bookInTable.appendChild(bookLanguage);
        let bookPic = document.createElement('li');
        let img = document.createElement('img');
        img.style.height = '150px'
        img.src = booksImage[index];
        bookPic.appendChild(img);
        bookInTable.appendChild(bookPic);
        document.body.appendChild(bookTitle);
        document.body.appendChild(bookInTable);
       
    }
};









//1. declare an array of 10 strings
let books = ["doctor_faustus", "homo_deus_brief_history", "code_the_hidden_language", "inmates_running_asylum", "buddenbrooks", "master_and_margarita", "12million_stuffed_shark", "steppenwolf", "open_veins_lat_am", "brief_answers_big_questions"];
console.log(books);

//2. make a function(s) that generate a ul with li elements for each book ID in the array using the for loop

function bookList() {
    let x = document.createElement("ul");
    document.body.appendChild(x);
for(let i = 0; i < books.length; i++) {
    let a = document.createElement("li");
    a.innerHTML = books[i];
    x.appendChild(a);
}
}
bookList();
*/