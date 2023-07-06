import React, { Component } from 'react';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css';

import test1 from '../../assets/images/test1.jpeg';
import test2 from '../../assets/images/test2.jpeg';
import test3 from '../../assets/images/test3.jpeg';

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
            
            <div className='homepage-effects'>
                <ul>
                    <li style={{'--i':1}}>
                        
                       
                    </li>
                    <li style={{'--i':2}}>
                       
                    </li>
                    <li style={{'--i':3}}>
                        
                    </li>
                    <li style={{'--i':4}}>
                        
                    </li>
                </ul>
            </div>
        </div>
      );
    }
  }