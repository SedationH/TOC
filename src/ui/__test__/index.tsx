import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import ReactDOM from "react-dom";

import { init } from "../index";

const MarkdownToHtml = ({ text }) => {
  return (
    <div
      className="article"
      style={{
        textAlign: "center",
      }}
    >
      <ReactMarkdown children={text} />
    </div>
  );
};

const initialText = `# 0
## 0-0
## 0-1
### 0-1-0
### 0-1-1
## 0-2
# 1
`;

const initialText2 = `# 0
## 0-0
## 0-1
#### 0-1-0-0
### 0-1-1
## 0-2
# 1
`;

const App = () => {
  const [text, setText] = useState(initialText2);

  return (
    <>
      <MarkdownToHtml text={text} />
      <textarea
        style={{
          position: "fixed",
          top: 0,
          left: 0,
        }}
        onChange={(evt) => {
          setText(evt.target.value);
        }}
        value={text}
        cols="40"
        rows="20"
      ></textarea>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

init();
