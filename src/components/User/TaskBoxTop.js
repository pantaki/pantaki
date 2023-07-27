import { React, useState } from "react";

import PropTypes from "prop-types";

// @material-ui/core components
import {
  MdSettings,
  MdAccountCircle,
  MdCalendarMonth,
  MdAndroid,
  MdFlutterDash,
} from "react-icons/md";

export default function TaskBoxTop(props) {
  console.log("props ", props);
  let childrenShow = [];
  const [taskData, settaskData] = useState(props.task_data);
 
  let dataTop = props.task_data;
  function getChildren(dataChildren, childrenShow) {

    let children = "";
    let children1 = "";
    
    childrenShow.push(show_html(dataChildren));
   
    if(dataChildren.children) {
        dataChildren.children.map((childrenS) => {
            if(childrenS)
            children1 = childrenS
            getChildren(children1, childrenShow)
        })
  
        
    } 
    
    // childrenShow.join('')

    children = childrenShow;
    childrenShow = [];
    return children;
  }

  function show_html(htmlData) {
    let taskNote = '';
    taskNote = htmlData;

    return htmlData != '' && (
      <div className="user-effects">
        <ul>
          <li className={taskNote.className2} style={{ "--i": 1 }}>
            <MdAccountCircle />
          </li>
          <li className={taskNote.className3} style={{ "--i": 2 }}>
            <MdCalendarMonth />
          </li>
          <li className={taskNote.className4} style={{ "--i": 3 }}>
            <MdAndroid />
          </li>
          <li className={taskNote.className} style={{ "--i": 4 }}>
            {/* <MdSettings /> */}
          </li>
        </ul>
      </div>
    );
  }

  return getChildren(dataTop, childrenShow);
}
