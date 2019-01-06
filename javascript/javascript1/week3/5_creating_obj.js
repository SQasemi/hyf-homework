

// make an object with info for each book
let bookInfo = [{
        id: "romeo_and_juliet",
        title: "Romeo And Juliet",
        language: "english",
        author :"williem"
    },
    {
        id: "war_and_peace",
        title: "War and Peace",
        language: "english",
        author :"Leo Tolstoy" 
    },
    {
        id: "don_quixote",
        title: "Don Quixote",
        language: "english",
        author :"Miguel de Cervantes"
    },
    {
        id: "hamlet",
        title: "Hamlet",
        language: "english",
        author :"Erminio Macario"
    },
    {
        id: "in_search_of_lost_time",
        title: "In search of lost time",
        language: "english",
        author :" Marcel Proust"
    },
    {
        id: "programming_foundemental",
        title: "Programming foundemental",
        language: "english",
        author :"D.E Stevenson" 
    },
    {
        id: "safid_barfi",
        title: "Safid barfi",
        language: "farsi",
        author :"Lisa" 
    },
    {
        id: "nineteen_eighty_four",
        title: "nineteen eighty four",
        language: "english",
        author :"" 
    },
    {
        id: "innevetators",
        title: "Innevetators",
        language: "english",
        author :"" 
    },
    {
        id: "basic_javascript",
        title: "Basic javascript",
        language: "english",
        author :"" 
    }
]

//5.  to take actual information from the object and display it
function bookList() {
    document.body.style.border = "5px solid green";
    let x = document.createElement("ul");
    document.body.appendChild(x);
    for (let i = 0; i < books.length; i++) {
        let list = document.createElement("li");
        x.appendChild(list);
        list.setAttribute("id", books[i]); 
        let title = document.createElement("h1");
        title.innerHTML = bookInfo[i].title;
        list.appendChild(title);
        let author = document.createElement("p");
        author.innerHTML = bookInfo[i].author;
        list.appendChild(author);
        let language = document.createElement("p");
        language.innerHTML = bookInfo[i].language;
        list.appendChild(language);
        
    }
}
bookList();

//new object with book covers
let booksImage = {
    "romeo_and_juliet": "./images/Romeo and Juliet.jpeg",
    "war_and_peace":"images/war_and_peace.jpg",
    "don_quixote":"images/don_quixote.jpg",
    "hamlet":"images/hamlet.jpg",
    "in_search_of_lost_time":"images/in search of lost time.jpeg",
    "programming_foundemental":"images/programming foundemental.jpg",
    "safid_barfi":"images/safid barfi.jpeg",
    "nineteen_eighty_four":"images/9984.jpg",
    "innevetators":"images/ ",
    "basic_javascript":"images/basicjs.png"
}




