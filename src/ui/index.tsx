import {
  getDOMHeadings,
  getHeadingObject,
  getNestedObjectHeadings,
} from "./parseDOM";
import { render } from "./render";

function init() {
  const DOMHeadings = getDOMHeadings();
  if (!DOMHeadings) return;
  const objectHeadings = DOMHeadings.map((DOMHeading) =>
    getHeadingObject(DOMHeading)
  );
  const nestedObjectHeadings = getNestedObjectHeadings(objectHeadings);

  render();
}

export { init };
