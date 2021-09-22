import React, { Component } from "react";

export default class Editor extends Component {
  render() {
    return (
      <div>
        <h1 id="ehead">MarkDown Editor</h1>
        <textarea
          id="editor"
          cols="70"
          rows="10"
          value={this.props.value}
          onChange={this.props.handleChange}
        ></textarea>
      </div>
    );
  }
}
