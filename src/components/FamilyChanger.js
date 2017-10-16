import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
      
    };
  }

  // componentWillReceiveProps
  componentWillReceiveProps(props) {
    this.setState({ allowEdit: props.allowEdit });
  }

  render() {
    return (
      <select className="dropDownContainer" onChange={ (event) => this.props.update(event.target.value) }
      disabled={!this.state.allowEdit}>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}