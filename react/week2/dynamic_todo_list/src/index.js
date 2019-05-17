import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import List from "./List";
//import './index.css';

//import * as serviceWorker from './serviceWorker';
class App extends React.Component {
  state = {
    items: ["pen", "book", "pencil"]
  };

  addNewItems = newVal => {
    const newVlaues = this.state.items.concat(newVal);
    this.setState({ items: newVlaues });
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <h3>Dynamic to do list </h3>
        <Header clickhandler={this.addNewItems} />
        <List items={items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
