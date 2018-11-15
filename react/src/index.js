import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

// import "./styles.css";

const ListItem = props => {
  return (
    <div className="row">
      <span>AAA </span>
      <span>BBB </span>
      <span>CCC </span>
      <span>DDD </span>
      <span>EEE </span>
    </div>
  );
};

const List = ({}) => {
  const items = []
  for (let i = 0; i < 50000; i++) {
    items.push( <ListItem key={i} />);
  }
  return items;
};

/* const createItems = count => {
  return Array.from({ length: count }, () => {
    return {
      id: faker.random.uuid(),
      a: faker.name.findName(),
      b: faker.address.streetAddress(),
      c: faker.address.city(),
      d: faker.address.state(),
      e: faker.address.zipCode()
    };
  });
}; */

class App extends React.Component {
  state = {
    items: false
  };

  addItem = () => {
    /*const newItem = {
      id: faker.random.uuid(),
      a: faker.name.findName(),
      b: faker.address.streetAddress(),
      c: faker.address.city(),
      d: faker.address.state(),
      e: faker.address.zipCode()
    };
    this.setState(prevState => ({ items: [newItem, ...prevState.items] })); */
  };

  addList = () => {
    this.setState({
      items: true
    })
  };

  render() {
    return (
      <div className="App">
        <div>TEST PERFORMANCE: REACT</div>
        <button onClick={this.addList}>Click me</button>
        {this.state.items ? <List items={this.state.items} /> : undefined}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
