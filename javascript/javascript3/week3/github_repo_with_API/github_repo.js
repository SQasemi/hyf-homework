

let userURLs = [
    'https://api.github.com/search/repositories?q=user:SQasemi',
    'https://api.github.com/search/repositories?q=user:Sanahayat',
     'https://api.github.com/search/repositories?q=user:Afshinrommel'
];


let users = userURLs.map((users) => {
    fetch(users);
    console.log(users)
})


Promise.all(users) 
    .then((responses) => {
        responses.forEach(response => {
            console.log(response)
            
            
        });
    })
