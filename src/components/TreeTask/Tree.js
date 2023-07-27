import React, { useState, useRef } from "react";
import SortableTree, {
  addNodeUnderParent,
  removeNodeAtPath,
  changeNodeAtPath,
  toggleExpandedForAll,
} from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Radio from '@mui/material/Radio';
// import Textarea from '@mui/joy/Textarea';
// import CustomTheme from 'react-sortable-tree-theme-minimal';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Tree.scss";

import {
  MdSettings,
  MdAccountCircle,
  MdCalendarMonth,
  MdAndroid,
  MdFlutterDash,
} from "react-icons/md";

function Tree(props) {
  const [searchString, setSearchString] = useState("");
  const [searchFocusIndex, setSearchFocusIndex] = useState(0);
  const [searchFoundCount, setSearchFoundCount] = useState(null);
  const [editTask, setEditTask] = useState(null);
  const [treeData, setTreeData] = useState(props.data);
  const inputEl = useRef();
  
  const handleNewTask = props;
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [noteStatus, setNoteStatus] = React.useState(["task_waiting"]);
  const [selectedValue, setSelectedValue] = React.useState();
  const [inputEditTask, setInputEditTask] = React.useState('');
  const [dataRowInfo, setDataRowInfo] = React.useState('');
  const [colorCurrent, setColorCurrent] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenEdit = (rowInfo) => {
    
    setDataRowInfo(rowInfo)
    setOpenEdit(true)
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    // bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    backgroundColor: "#fff5c7",
  };
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    // bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    backgroundColor: "#fff5c7",
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  function handleReply() {
    // setNoteStatus();
    handleClose();
  }
  function handleReplyEdit() {
    console.log('rowInfo open popup: ', selectedValue)
    console.log('rowInfo open popup: ', dataRowInfo)
    setInputEditTask(inputEditTask);
    
    let keyClass1 = sortClass(selectedValue);
    let editedTreeData = updateStatusNode(dataRowInfo, keyClass1);
    setTreeData(editedTreeData);
    handleNewTask.handleAddNewTask(editedTreeData, handleNewTask.task_key);

    handleCloseEdit();
  }
  function handleChangeStatus(data1, key) {
    setSelectedValue(key);
    const keyClass = sortClass(key);
    const editedTreeData = updateStatusNode(data1, keyClass);
    setTreeData(editedTreeData);
    handleNewTask.handleAddNewTask(editedTreeData, handleNewTask.task_key);
  }

  function updateStatusNode(rowInfo, dataUpdate) {
    const { node, path } = rowInfo;
    const { children } = node;

    let newTree = changeNodeAtPath({
      treeData,
      path,
      getNodeKey,
      newNode: {
        id: node.id,
        title: node.title,
        text: node.title,
        children,
        name: dataUpdate.name,
        className: dataUpdate.className,
        className2: dataUpdate.className2,
        className3: dataUpdate.className3,
        className4: dataUpdate.className4,
      },
    });

    return newTree;
    // handleNewTask.handleAddNewTask(newTree.treeData, handleNewTask.task_key);
    // setTreeData(newTree);
  }

  function sortClass(className) {
    switch (className) {
      case "task_done":
        return {
          name: "task_done",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        };
        break;
      case "task_note":
        return {
          name: "task_note",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        };
        break;
      case "task_waiting":
        return {
          name: "task_waiting",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        };
      default:
        return {
          name: "task_grey",
          className: "task_grey",
          className2: "task_done",
          className3: "task_note",
          className4: "task_waiting",
        };
    }
  }

  function updateStateTreeData(data1) {
    const editedTreeData = treeData.map((task) => {
      // if this task has the same ID as the edited task
      if (data1.node.id === task.id) {
        //
        return { ...task, text: "newName", name: "task_waiting" };
      }
      return task;
    });
    setTreeData(editedTreeData);
  }

  function createNode(props) {
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
        id: treeData.length + 1,
        title: value,
        name: "task_grey",
        className: "task_grey",
        className2: "task_done",
        className3: "task_note",
        className4: "task_waiting",
      },
    });

    handleNewTask.handleAddNewTask(newTree.treeData, handleNewTask.task_key);
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
        title: value,
      },
    });
    handleNewTask.handleAddNewTask(newTree.treeData, handleNewTask.task_key);
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
        title: value,
      },
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
        title: value,
      },
    });

    setTreeData(newTree.treeData);

    inputEl.current.value = "";
    // inputEls.current[treeIndex].current.value = "";
  }

  function removeNode(rowInfo) {
    const { path } = rowInfo;
    if (window.confirm("Are you sure you wish to delete this item?"))
      setTreeData(
        removeNodeAtPath({
          treeData,
          path,
          getNodeKey,
        })
      );
  }

  function updateTreeData(treeData) {
    setTreeData(treeData);
    handleNewTask.handleAddNewTask(treeData, handleNewTask.task_key);
  }

  function expand(expanded) {
    setTreeData(
      toggleExpandedForAll({
        treeData,
        expanded,
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

  const handleAddNewTask1 = () => {
    this.props.handleAddNewTask();
  };

  return (
    <div>
    
      {props.type == "showfull" && (
        <div className="content-task-node">
          <div style={{ height: "50vh" }}>
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
              generateNodeProps={({ node, path }) => {
                return {
                  className: `${node.className}`,
                };
              }}
            />
          </div>
        </div>
      )}
      {/* {props.type == 'show1' && ( */}
      <div className="content-task-node">
        <div style={{ height: "50vh" }}>
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
            generateNodeProps={(rowInfo) => ({
              title: rowInfo.node.label,
              subtitle: [
                rowInfo.node.name === "task_note" && (
                  <div className="note-subtitle">
                    {/* <p>' rowInfo.node.subTitle'</p> */}

                    <span
                      className="note-change-status"
                      onClick={handleOpen}
                    >
                      Info Comment
                    </span>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          07/19/2023: TakiNote :
                          
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {inputEditTask}
                        </Typography>
                        <div className="button-modal">
                          <Button variant="contained" onClick={handleReply}>
                            + Reply
                          </Button>
                          <div className="status-note-status">
                            {noteStatus == "task_waiting" && (
                              <p>
                                <span className="status-note-status"></span>I
                                read this comment
                              </p>
                            )}
                          </div>
                        </div>
                      </Box>
                    </Modal>
                  </div>
                ),
                (
                  <div className="note-subtitle-edit-task">
                    {/* <p>' rowInfo.node.subTitle'</p> */}

                    <span
                      className="note-change-status"
                      onClick={() => handleOpenEdit(rowInfo)}
                    >
                      Edit Task
                    </span>
                    <Modal
                      open={openEdit}
                      onClose={handleCloseEdit}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style2}>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Edit Task Detail
                          
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Task name goes here and it doesn't matter if the text, name is long because the text will wrap 
                        </Typography>

                        <div className="edit-task-status">
                          {noteStatus == "task_waiting" && (
                            <div className="edit-task-main">
                              <div className="edit-task-item">
                              <span className="edit-note-status edit-task_grey"></span>
                                <Radio
                                  {...selectedValue === 'task_grey'
                                  ? 'disabled' : ''}
                                
                                  {...controlProps('task_grey')}
                                  sx={{
                                    color: '#ababab',
                                    '&.Mui-checked': {
                                      color: '#ababab',
                                    },
                                  }}
                                />  Not Done
                              </div>
                              <div className="edit-task-item">
                              <span className="edit-note-status edit-task_done"></span>
                                <Radio
                                
                                  {...selectedValue === 'task_done'
                                  ? 'disabled' : ''}
                                  {...controlProps('task_done')}
                                  sx={{
                                    color: '#01b10a',
                                    '&.Mui-checked': {
                                      color: '#01b10a',
                                    },
                                  }}
                                />
                              </div>
                              <div className="edit-task-item">
                              <span className="edit-note-status edit-task_donena">x</span>
                                <Radio
                                disabled
                                  {...controlProps('task_donena')}
                                  sx={{
                                    color: '#01b10a',
                                    '&.Mui-checked': {
                                      color: '#01b10a',
                                    },
                                  }}
                                />  Done NA
                              </div>
                              <div className="edit-task-item">
                              <span className="edit-note-status edit-task_waiting"></span>
                                <Radio
                                  {...controlProps('task_waiting')}
                                  sx={{
                                    color: '#f5c916',
                                    '&.Mui-checked': {
                                      color: '#f5c916',
                                    },
                                  }}
                                />  Wait for
                              </div>
                              <div className="edit-task-item">
                                <span className="edit-note-status edit-task_note"></span>
                                  <Radio
                                    {...controlProps('task_note')}
                                    sx={{
                                      color: '#d10101',
                                      '&.Mui-checked': {
                                        color: '#d10101',
                                      },
                                    }}
                                  />  Note for
                              </div>

                              {/* <div className="edit-task-item"><span className="edit-note-status edit-task_grey"></span>Not Done</div>
                              <div className="edit-task-item"><span className="edit-note-status edit-task_done"></span></div>
                              <div className="edit-task-item"><span className="edit-note-status edit-task_donena">x</span>Done NA</div>
                              <div className="edit-task-item"><span className="edit-note-status edit-task_waiting"></span>Wait for</div> */}
                            </div>
                            
                          )}
                        </div>
                        <div className="edit-task-field">
                          {/* <input ref={inputEditTask} type="text" /> */}
                          {/* <Textarea placeholder="Type anything…" />; */}
                          <TextField
                            id="outlined-multiline-static"
                            label="Type note here"
                            multiline
                            rows={4}
                            onChange={(v) => setInputEditTask(v.target.value) }
                            defaultValue={inputEditTask}
                          />
                        </div>
                        <div className="button-modal">
                          <Button variant="contained" onClick={handleReplyEdit}>
                            Save Note
                          </Button>
                          
                        </div>
                      </Box>
                    </Modal>
                  </div>
                ),
                
              ],
              buttons: [
                //   <div>
                //     <Button
                //       style={{ marginRight: "10px" }}
                //       variant="outlined"
                //       label="Add Sibling"
                //       onClick={(event) => addNodeSibling(rowInfo)}
                //     >
                //       <AddIcon /> Sibling
                //     </Button>
                //     <Button
                //       style={{ marginRight: "10px" }}
                //       variant="outlined"
                //       label="Add Child"
                //       onClick={(event) => addNodeChild(rowInfo)}
                //     >
                //       <AddIcon /> Child
                //     </Button>
                //     <Button style={{ marginRight: "10px" }} variant="outlined" label="Update" onClick={(event) => updateNode(rowInfo)}>
                //       <UpgradeIcon /> Update

                //     </Button>
                //     <Button style={{ marginRight: "10px" }} variant="outlined" label="Delete" onClick={(event) => removeNode(rowInfo)}>
                //       {/* Remove */}
                //       <DeleteIcon />
                //     </Button>
                //     <Button
                //       style={{ marginRight: "10px" }}
                //       variant="outlined"
                //       label="Alert"
                //       onClick={(event) => alertNodeInfo(rowInfo)}
                //     >
                //       <InfoIcon />
                //     </Button>
                //   </div>
                <div className="user-effects">
                  <ul>
                    {/* {rowInfo.node.className2 == 'task_note' && (
                    <li>

                    </li>
                  )} */}
                    <li
                      onClick={() =>
                        handleChangeStatus(rowInfo, rowInfo.node.className2)
                      }
                      className={rowInfo.node.className2}
                      style={{ "--i": 1 }}
                    >
                      <MdAccountCircle />
                    </li>
                    <li
                      onClick={() =>
                        handleChangeStatus(rowInfo, rowInfo.node.className3)
                      }
                      className={rowInfo.node.className3}
                      style={{ "--i": 2 }}
                    >
                      <MdCalendarMonth />
                    </li>
                    <li
                      onClick={() =>
                        handleChangeStatus(rowInfo, rowInfo.node.className4)
                      }
                      className={rowInfo.node.className4}
                      style={{ "--i": 3 }}
                    >
                      <MdAndroid />
                    </li>
                    <li className={rowInfo.node.className} style={{ "--i": 4 }}>
                      {/* <MdSettings /> */}
                    </li>
                  </ul>
                </div>,
              ],
              className: `${rowInfo.node.className}`,
              style: {
                height: "50px",
              },
            })}
          />

          <div style={{ flex: "0 0 auto", padding: "0 15px" }}>
            <input ref={inputEl} type="text" />
            <Button
              style={{ margin: "10px" }}
              variant="outlined"
              onClick={createNode}
            >
              <LibraryAddIcon /> Task
            </Button>
          </div>
        </div>
      </div>
      {/* // )} */}
    </div>
  );
}

export default Tree;
