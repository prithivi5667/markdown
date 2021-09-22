import React, { Component } from "react";

export default class Preview extends Component {
  render() {
    const marked = require("marked");
    return (
      <div id="pdiv">
        <h1 id="phead">MarkDown Previwer</h1>
        <div
          dangerouslySetInnerHTML={{ __html: marked(this.props.value) }}
          id="preview"
        ></div>
      </div>
    );
  }
}
