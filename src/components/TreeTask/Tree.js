import React, { useState, useRef } from "react";
import SortableTree, {
  addNodeUnderParent,
  removeNodeAtPath,
  changeNodeAtPath,
  toggleExpandedForAll
} from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import CustomTheme from 'react-sortable-tree-theme-minimal';


const seed = [
  {
    id: "123",
    title: "Task1",
    subtitle: "lorem ipsum",
    isDirectory: true,
    expanded: true,
    children: [
      { id: "456", title: "Task1 1", subtitle: "lorem ipsum" },
      {
        id: "789",
        title: "Task1 2",
        subtitle: "lorem",
        expanded: true,
        children: [
          {
            id: "234",
            title: "Task1 2 1",
            subtitle: "ipsum"
          },
          { id: "567", title: "Task1 2 2", subtitle: "zzz" }
        ]
      }
    ]
  }
];

function Tree(props) {
  const [searchString, setSearchString] = useState("");
  const [searchFocusIndex, setSearchFocusIndex] = useState(0);
  const [searchFoundCount, setSearchFoundCount] = useState(null);
  const [treeData, setTreeData] = useState(props.data);

  const inputEl = useRef();

  // console.log(treeData);

  function createNode() {
    const value = inputEl.current.value;

    if (value === "") {
      inputEl.current.focus();
      return;
    }

    let newTree = addNodeUnderParent({
      treeData: treeData,
      parentKey: null,
      expandParent: true,
      getNodeKey,
      newNode: {
        id: "123",
        title: value
      }
    });

    setTreeData(newTree.treeData);

    inputEl.current.value = "";
  }

  function updateNode(rowInfo) {
    const { node, path } = rowInfo;
    const { children } = node;

    const value = inputEl.current.value;

    if (value === "") {
      inputEl.current.focus();
      return;
    }

    let newTree = changeNodeAtPath({
      treeData,
      path,
      getNodeKey,
      newNode: {
        children,
        title: value
      }
    });

    setTreeData(newTree);

    inputEl.current.value = "";
  }

  function addNodeChild(rowInfo) {
    let { path } = rowInfo;

    const value = inputEl.current.value;
    // const value = inputEls.current[treeIndex].current.value;

    if (value === "") {
      inputEl.current.focus();
      // inputEls.current[treeIndex].current.focus();
      return;
    }

    let newTree = addNodeUnderParent({
      treeData: treeData,
      parentKey: path[path.length - 1],
      expandParent: true,
      getNodeKey,
      newNode: {
        title: value
      }
    });

    setTreeData(newTree.treeData);

    inputEl.current.value = "";
    // inputEls.current[treeIndex].current.value = "";
  }

  function addNodeSibling(rowInfo) {
    let { path } = rowInfo;

    const value = inputEl.current.value;
    // const value = inputEls.current[treeIndex].current.value;

    if (value === "") {
      inputEl.current.focus();
      // inputEls.current[treeIndex].current.focus();
      return;
    }

    let newTree = addNodeUnderParent({
      treeData: treeData,
      parentKey: path[path.length - 2],
      expandParent: true,
      getNodeKey,
      newNode: {
        title: value
      }
    });

    setTreeData(newTree.treeData);

    inputEl.current.value = "";
    // inputEls.current[treeIndex].current.value = "";
  }

  function removeNode(rowInfo) {
    const { path } = rowInfo;
    setTreeData(
      removeNodeAtPath({
        treeData,
        path,
        getNodeKey
      })
    );
  }

  function updateTreeData(treeData) {
    setTreeData(treeData);
  }

  function expand(expanded) {
    setTreeData(
      toggleExpandedForAll({
        treeData,
        expanded
      })
    );
  }

  function expandAll() {
    expand(true);
  }

  function collapseAll() {
    expand(false);
  }

  const alertNodeInfo = ({ node, path, treeIndex }) => {
    const objectString = Object.keys(node)
      .map((k) => (k === "children" ? "children: Array" : `${k}: '${node[k]}'`))
      .join(",\n   ");

    global.alert(
      "Info passed to the icon and button generators:\n\n" +
        `node: {\n   ${objectString}\n},\n` +
        `path: [${path.join(", ")}],\n` +
        `treeIndex: ${treeIndex}`
    );
  };

  const selectPrevMatch = () => {
    setSearchFocusIndex(
      searchFocusIndex !== null
        ? (searchFoundCount + searchFocusIndex - 1) % searchFoundCount
        : searchFoundCount - 1
    );
  };

  const selectNextMatch = () => {
    setSearchFocusIndex(
      searchFocusIndex !== null ? (searchFocusIndex + 1) % searchFoundCount : 0
    );
  };

  const getNodeKey = ({ treeIndex }) => treeIndex;

  return (
    <div className="content-task-node">
      <div style={{ flex: "0 0 auto", padding: "0 15px" }}>
        {/* <h3>Test Task Drag New</h3> */}
        <input ref={inputEl} type="text" />
        {/* <TextField ref={inputEl} style={{margin: '10px 0'}}  id="value-add" label="Value" variant="standard" /> */}
        {/* <br /> */}
        <Button style={{ margin: "10px" }} variant="outlined" onClick={createNode}><LibraryAddIcon />  Task</Button>
        {/* <br /> */}
        {/* <Button style={{ marginRight: "10px" }} variant="outlined" onClick={expandAll}><ExpandMoreIcon /> </Button> */}
        {/* <Button style={{ marginRight: "10px" }} variant="outlined" onClick={collapseAll}><ExpandLessIcon /></Button> */}
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        {/* <form style={{ display: "inline-block" }} onSubmit={(event) => { event.preventDefault(); }} > */}
          {/* <label htmlFor="find-box"> */}
          
            {/* <TextField label="Search" variant="standard" id="find-box" value={searchString} onChange={(event) => setSearchString(event.target.value)} /> */}
          {/* </label> */}

          {/* <Button style={{ marginRight: "10px" }} variant="outlined" type="button" disabled={!searchFoundCount} onClick={selectPrevMatch} > &lt; </Button> */}

          {/* <Button style={{ marginRight: "10px" }} variant="outlined" type="submit" disabled={!searchFoundCount} onClick={selectNextMatch} > &gt; </Button> */}

          {/* <span> &nbsp; {searchFoundCount > 0 ? searchFocusIndex + 1 : 0} &nbsp;/&nbsp; {searchFoundCount || 0} </span> */}
        {/* </form> */}
      </div>

      <div style={{ height: "100vh" }} >
        <SortableTree
        
          treeData={treeData}
          onChange={(treeData) => updateTreeData(treeData)}
          searchQuery={searchString}
          searchFocusOffset={searchFocusIndex}
          searchFinishCallback={(matches) => {
            setSearchFoundCount(matches.length);
            setSearchFocusIndex(
              matches.length > 0 ? searchFocusIndex % matches.length : 0
            );
          }}
          // canDrag={({ node }) => !node.dragDisabled}
          canDrag={<AddIcon />}
          generateNodeProps={( rowInfo) => ({
            // title: rowInfo.node.label,
            // subtitle: rowInfo.node.subTitle,
            buttons: [
              <div>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="outlined"
                  label="Add Sibling"
                  onClick={(event) => addNodeSibling(rowInfo)}
                >
                  <AddIcon /> Sibling
                </Button>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="outlined"
                  label="Add Child"
                  onClick={(event) => addNodeChild(rowInfo)}
                >
                  <AddIcon /> Child
                </Button>
                <Button style={{ marginRight: "10px" }} variant="outlined" label="Update" onClick={(event) => updateNode(rowInfo)}>
                  <UpgradeIcon /> Update
                  
                </Button>
                <Button style={{ marginRight: "10px" }} variant="outlined" label="Delete" onClick={(event) => removeNode(rowInfo)}>
                  {/* Remove */}
                  <DeleteIcon />
                </Button>
                <Button
                  style={{ marginRight: "10px" }}
                  variant="outlined"
                  label="Alert"
                  onClick={(event) => alertNodeInfo(rowInfo)}
                >
                  <InfoIcon />
                </Button>
              </div>
            ],
            className:  `${rowInfo.node.className}`,
            style: {
              height: "50px"
            }
          })}
        />
      </div>
    </div>
  );
}

export default Tree;
