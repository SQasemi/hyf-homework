class Quiz {
    constructor(name){
        this.name = name;
    }
    fetchQuestion(){
       return fetch('https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/9468c385bfb422620676b3669509b0a59b326c42/quiz-questions.json')
        .then((response) => response.json())
        // .then((questions) => {
        //     console.log(questions);
        // })

    }
    renderQuestion( questions){
        console.log(questions);
        let ul = document.querySelector('ul');
        questions.forEach((question) => {
            let li = document.createElement('li');
            li.innerHTML = question.title+ question.content;
           
            
            //use select 
            let select = document.createElement('select');
            question.options.forEach((answerOption)=>{
               // console.log(answerOption);
                let option = document.createElement('option');
                option.innerHTML = answerOption.content;

                if(answerOption.correct){
                    option.setAttribute('data-is-answer', 'true');
                    console.log(option);
                }
                else
                {
                    option.setAttribute('data-is-answer', 'false');
                    console.log(option);
                }


                select.appendChild(option);
            });
           li.appendChild(select);
           ul.appendChild(li);

        })
        
        
        
        
    }
    //method 3 (Show the score)
    getScore(){
        return document.querySelectorAll('option:checked[data-is-answer = true]').length;
        // let pos = 0;
      
        //     let test = questions.forEach((question) => {
        //         console.log(question); 
        //     let resultMsg = document.createElement('h5');
        //     let p = document.querySelector('p');
        //      p.appendChild(resultMsg);
        //     // resultMsg.innerHTML = "congertulation "
        //     resultMsg.innerHTML = "question "+ (pos+1) +"of " +question.length;
        //     //question = questions[pos][0];

        // })
        // console.log(test);
  
    }
   renderScore(quizScore){
    document.querySelector('.result').innerHTML = quizScore;
    if (quizScore > 0) {
        let setConfetti = { target: 'confetti' };
        let confetti = new ConfettiGenerator(setConfetti);
        confetti.render();
        let audio = new Audio('careless-whisper.mp3');
        audio.play();
    }
   } 
    

}
//instance
let quiz = new Quiz("helper");
console.log(quiz);
quiz.fetchQuestion()
    .then((questions) => {
        document.querySelector('.loading').remove();
        quiz.renderQuestion(questions);
    })
    .then(() => {
        let button = document.querySelector('button');
        button.addEventListener('click',() => {
        
       console.log(quiz.getScore()) ;
       let showresultScore = quiz.getScore();
       quiz.renderScore(showresultScore);
         });
    
        })
//quiz.renderQuestion();
