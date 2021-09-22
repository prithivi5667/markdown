import React from "react";
import "./styles.css";

import Editor from "./components/Editor";
import Preview from "./components/Preview";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ph2
    };
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <Editor handleChange={this.handleChange} value={this.state.value} />
        <Preview value={this.state.value} />
      </div>
    );
  }
}
const ph2 = `
# This is header 1

## This is header 2

[Google](www.google.coom)

\`<p>This a paragraph</p>\`

\`\`\`JavaScript
function add (a, b) {
  return a + b;
}
\`\`\`

- Item one
- Item two
- Item three
  > This is a block quote

![Markdown Logo](https://markdown-here.com/img/icon256.png)

**This is a bolded text**

`;
