import React from "react";

class Header extends React.Component {
  state = {
    newInputVlaue: ""
  };

  //method to get changes and store it
  changeHandlerValues = e => {
    const newVal = e.target.value;
    this.setState({ newInputVlaue: newVal });
  };

  clickhandler = () => {
    const inputvalue = this.state.newInputVlaue;
    this.props.clickhandler(inputvalue);
  };

  render() {
    // const { addByClickHandler } = this.props;
    const { newInputVlaue } = this.state;
    return (
      <div>
        <input value={newInputVlaue} onChange={this.changeHandlerValues} />
        <button onClick={this.clickhandler}>Add</button>
      </div>
    );
  }
}

export default Header;
