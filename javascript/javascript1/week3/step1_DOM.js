//1:an array to show the list of books which I read them
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
            //2:confirm box 
            let choice_to_display = confirm("Do you want to show the books?");
            if(choice_to_display)
            {
            document.getElementById('book').innerHTML = books;
            }
            else
            {
              document.getElementById('book').innerHTML = ("nothing to display!!")
            }

            
            //2: oto display array
           //	console.log(books);
           
                         
           //3:funtion to create ul with li by using for loop
           function bookList(){
            let bookItems = document.createElement("ul");
            document.body.appendChild(bookItems);
             for (let i = 0; i <books.length; i++) {
              let booklists = document.createElement("li");
              let showBookInList = document.createTextNode(books[i]);
              booklists.appendChild(showBookInList);
              bookItems.appendChild(booklists);              
              //console.log(books[i]);
             }
                                             
           }
            bookList();
           
          
