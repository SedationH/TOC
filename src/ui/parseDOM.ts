interface ObjectHeading {
  // The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.
  headingLevel: number;
  textContent: string;
  node: Element;
  children: Array<ObjectHeading>;
  key?: string;
}

const options = {
  contentSelector: ".article",
  headingSelector: "h1,h2,h3,h4,h5",
};

function getHeadingLevel(heading: Element) {
  return +heading.nodeName.split("H").join("");
}

function getHeadingObject(DOMHeading: Element): ObjectHeading {
  return {
    headingLevel: getHeadingLevel(DOMHeading),
    textContent: DOMHeading.textContent.trim(),
    node: DOMHeading,
    children: [],
  };
}

function getDOMHeadings(
  contentSelector = options.contentSelector,
  headingSelector = options.headingSelector
): Array<Element> | undefined {
  try {
    // 理论前提 querySelectorAll 的进行时DFS的
    const nodeList = document
      .querySelector(contentSelector)
      .querySelectorAll(headingSelector);
    return Array.from(nodeList);
  } catch (error) {
    console.warn("Element not found with option: ", options);
  }
}

function getLastItem(array) {
  return array[array.length - 1];
}
function getLastItemIndex(array) {
  return array.length - 1;
}

function addNode(
  objectHeading: ObjectHeading,
  nestedObjectHeadings: Array<ObjectHeading>
) {
  let children = nestedObjectHeadings;
  let lastItem = getLastItem(children);
  let lastItemIndex = getLastItemIndex(children);
  const lastItemLevel = lastItem ? lastItem.headingLevel : Infinity;
  const currentLevel = objectHeading.headingLevel;
  let cnt = currentLevel - lastItemLevel;
  const keyArray = [];
  // 最终定位到要进行添加的children
  while (cnt > 0) {
    lastItem = getLastItem(children);
    lastItemIndex = getLastItemIndex(children);
    if (!lastItem) break;
    keyArray.push(lastItemIndex);
    children = lastItem.children;
    cnt--;
  }
  children.push(objectHeading);
  lastItemIndex = getLastItemIndex(children);
  keyArray.push(lastItemIndex);
  objectHeading.key = keyArray.join("-");
}

function getNestedObjectHeadings(
  objectHeadings: Array<ObjectHeading> | undefined
): Array<ObjectHeading> | undefined {
  try {
    return Array.prototype.reduce.call(
      objectHeadings,
      (prev, currHeadingObj) => {
        addNode(currHeadingObj, prev);
        return prev;
      },
      []
    );
  } catch (error) {
    console.log("getNestedObjectHeadings", error);
  }
}

export { getDOMHeadings, getHeadingObject, getNestedObjectHeadings };
