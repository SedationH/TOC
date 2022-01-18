import React, { useState, useEffect } from "react";
import { Tree, Button } from "antd";
import { RightOutlined, LeftOutlined, DownOutlined } from "@ant-design/icons";

// import { getKeyArray, getHeadingObserve } from "../adapt2Tree";
import { Fragment } from "react";

// const TOC = ({ node2Key, treeData, nestedHeadings }) => {
//   const [selectedKeys, setSelectedKeys] = useState([]);
//   const [expandedKeys, setExpandedKeys] = useState([]);
//   const [show, setShow] = useState(true);

//   const handleInHelp = (key) => {
//     setSelectedKeys(getKeyArray(key));
//     setExpandedKeys(getKeyArray(key));
//   };

//   const handleIn = ({ target }) => {
//     handleInHelp(node2Key.get(target));
//   };

//   const handleOut = (entry) => {};

//   useEffect(() => {
//     const headingObserve = getHeadingObserve(
//       nestedHeadings,
//       handleIn,
//       handleOut
//     );
//   }, []);

//   const onSelect = (selectedKeys, info) => {
//     const { node, key } = info.node;
//     node.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   const onExpand = (expandedKeys) => {
//     setExpandedKeys(expandedKeys);
//   };

//   return (
//     <Tree
//       defaultExpandedKeys={["0"]}
//       onSelect={onSelect}
//       treeData={treeData}
//       defaultExpandAll={false}
//       selectedKeys={selectedKeys}
//       expandedKeys={expandedKeys}
//       multiple
//       onExpand={onExpand}
//     />
//   );
// };

class Demo extends React.Component {
  onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  render() {
    return (
      <Tree
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={["0-0-0"]}
        onSelect={this.onSelect}
        treeData={[
          {
            title: "parent 1",
            key: "0-0",
            children: [
              {
                title: "parent 1-0",
                key: "0-0-0",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-0-0",
                  },
                  {
                    title: "leaf",
                    key: "0-0-0-1",
                  },
                  {
                    title: "leaf",
                    key: "0-0-0-2",
                  },
                ],
              },
              {
                title: "parent 1-1",
                key: "0-0-1",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-1-0",
                  },
                ],
              },
              {
                title: "parent 1-2",
                key: "0-0-2",
                children: [
                  {
                    title: "leaf",
                    key: "0-0-2-0",
                  },
                  {
                    title: "leaf",
                    key: "0-0-2-1",
                  },
                ],
              },
            ],
          },
        ]}
      />
    );
  }
}

export { Demo };
