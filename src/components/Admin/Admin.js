import React, { Component } from 'react';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css';
import { MdSettings, MdAccountCircle, MdCalendarMonth, MdAndroid, MdFlutterDash } from "react-icons/md";

import test1 from '../../assets/images/test1.jpeg';
import test2 from '../../assets/images/test2.jpeg';
import test3 from '../../assets/images/test3.jpeg';
import test4 from '../../assets/images/test1.jpeg';

// const Admin = (props) => {
//     return (
//         <div>Admin components</div>
//     )
// }
// export default Admin;


export default class Admin extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        treeData1: [
          { title: 'node1', children: [{ title: 'Child node' }] },
          { title: 'node2' },
        ],
        treeData2: [{ title: 'node3' }, { title: 'node4' }],
        // shouldCopyOnOutsideDrop: false,
      };
    }
  
    render() {
      // Both trees need to share this same node type in their
      // `dndType` prop
      const externalNodeType = 'yourNodeType';
      const { shouldCopyOnOutsideDrop } = this.state;
      return (
        <div>
            
            <div className='homepage-effects1'>
                <ul>
                    <li>
                        <img src={test1} />
                        <div className='content'>
                            <h4>test 1</h4>
                            <p>test photo. <br /> <span> test day</span></p>
                        </div>
                    </li>
                    <li>
                        <img src={test2} />
                        <div className='content'>
                            <h4>test 2</h4>
                            <p>test photo 2. <br /> <span> test day</span></p>
                        </div>
                    </li>
                    <li>
                        <img src={test3} />
                        <div className='content'>
                            <h4>test 3</h4>
                            <p>test photo 3. <br /> <span> test day</span></p>
                        </div>
                    </li>
                    <li>
                        <img src={test4} />
                        <div className='content'>
                            <h4>test 4</h4>
                            <p>test photo 4. <br /> <span> test day</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      );
    }
  }