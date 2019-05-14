import React from "react";

class List extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}

export default List;
