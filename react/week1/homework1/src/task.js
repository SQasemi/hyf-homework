import React from 'react';

class Task extends React.Component {
    render(){
        return(
            <div>
               {this.props.description}, {this.props.deadlineDate}
            </div>
        );
    }
}

export default Task;