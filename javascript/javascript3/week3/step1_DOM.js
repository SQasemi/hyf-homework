//an array to show the list of books which I read them
let books = ["romeo_and_juliet",
             "war_and_peace", 
             "don_quixote", 
             "hamlet", 
             "in_search_of_lost_time", 
             "programming_foundemental",
             "safid_barfi",
             "nineteen_eighty_four", 
             "innevetators",
             "basic_javascript"
            ]; 
            //confirm box 
            let choice_to_display =confirm("Do you want to show the books?");
            if(choice_to_display)
            {
              document.getElementById('book').innerHTML = books;
            }
            else
            {
              document.getElementById('book').innerHTML = ("nothing to display!!");
            }

            
           // for (let i = 0; i<books.length; i++)
           //{
           //	console.log(books[i]);
           //}

           //funtion to create ul with li by using for loop
           function bookList(){
            let bookItems = document.createElement("ul");
             for (let i = 0; i <books.length; i++) {
              let bookLists = document.createElement("li");
              books[i];
             }
           }