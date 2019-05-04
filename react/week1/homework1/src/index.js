import React from 'react';
import ReactDOM from 'react-dom';
import Task from './task.js';
//import './index.css';

//import * as serviceWorker from './serviceWorker';
class App extends React.Component {
    render(){
        const tasks = [{
            'description': 'Get out of bed',
            'deadlineDate': 'Wed Sep 13 2017'
        },
        {
            'description': 'Brush teeth',
            'deadlineDate': 'Thu Sep 14 2017'
        },
        {
            'description': 'Eat breakfast',
            'deadlineDate': 'Fri Sep 15 2017'
        }
    ];
        return(
            <div>
                <h3>To do list </h3>
                {tasks.map((task, index) => {
                    return <Task 
                    key = {index}
                    description = {task.description}
                    deadlineDate = {task.deadlineDate}
                    />
                })
                }
                
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
