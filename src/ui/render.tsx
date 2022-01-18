import ReactDOM from "react-dom";
import { Demo } from "./table-of-content";
import "antd/dist/antd.css";

function render() {
  const TOCEle = document.createElement("nav");
  TOCEle.style.position = "fixed";
  TOCEle.style.top = "20px";
  TOCEle.style.right = "40px";

  document.body.append(TOCEle);
  ReactDOM.render(<Demo />, TOCEle);
}

export { render };
