


let users = ['SQasemi','Sanahayat','Afshinrommel'];



let usersPending = users.map(user => {
    return fetch('https://api.github.com/search/repositories?q=user:' + user).then(r => r.json());
})


Promise.all(usersPending) 
    .then((responses) => {

        responses.forEach(response => {
         console.log('-items belonging to user login:' + response.items[0].owner.login + '-')
          response.items.forEach((r,i)=> console.log('name of item: ' + i + ' is: ' + r.name));
   
            
            
        });
    })
