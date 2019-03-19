import React, { Component } from 'react';
import MenuIndex from "./components/MenuIndex";
import { Container, } from "bloomer";
import axios from "axios";
import MenuForm from "./components/MenuForm";

class App extends Component {
  state = { menus: [], foods: [], };

  componentDidMount() {
    axios.get("/api/menus")
      .then( res => {
        this.setState({ menus: res.data, });
      })
  }

  addMenu = (name) => {
    axios.post("/api/menus", { name })
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: [...menus, res.data], });
      })
  }

  render() {
    return (
      <Container style={{ textAlign: "center", marginTop: 10 }}>
        <MenuIndex
          menus={this.state.menus}
          foods={this.state.foods}
        />
        <br />
        <br />
        <MenuForm
          addMenu={this.addMenu}
        />
      </Container>
    );
  }
}

export default App;
