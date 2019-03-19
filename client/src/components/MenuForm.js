import React from "react";
import { Field, Control, Label, Input, Button, } from "bloomer";

class MenuForm extends React.Component {
  state = { name: "",};

  handleChange = (e) => {
      this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMenu(this.state.name);
    this.setState({ name: "", });
  }

  render() {
    return(
      <Field>
        <Label>Menu</Label>
        <Input
          type="text"
          placeholder="Name"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Control>
          <Button onSubmit={this.handleSubmit} isColor='primary'>Submit</Button>
        </Control>
      </Field>
    )
  }
}

export default MenuForm;
