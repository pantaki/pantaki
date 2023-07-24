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
    console.log('props ', props)
    
    const [taskData, settaskData] = useState(props.task_data); 
    function getChildren(dataChildren){
        let children = '';
        let childrenShow = '';
        if(!dataChildren.children){
            return show_html(dataChildren)
        } else {
            return dataChildren.children.map((childrenS) => {
                children += show_html(childrenS.children);

                if(childrenS.children){        
                    children += getChildren(childrenS.children);
                } 

                return children;
              
            });
            
        }  
        return children;
    }
    
    function show_html(taskNote){
        console.log("taskNote: ", taskNote);
        return (
            <div className="user-effects">
        <ul>
        <li
            className={
                taskNote.className2
            }
            style={{ "--i": 1 }}
        >
            <MdAccountCircle />
        </li>
        <li
            className={
                taskNote.className3
            }
            style={{ "--i": 2 }}
        >
            <MdCalendarMonth />
        </li>
        <li
            className={
                taskNote.className4
            }
            style={{ "--i": 3 }}
        >
            <MdAndroid />
        </li>
        <li
            className={
                taskNote.className
            }
            style={{ "--i": 4 }}
        >
            {/* <MdSettings /> */}
        </li>
        </ul>
    </div>
        );
    }

    return getChildren(taskData);
}