import React, { Component, useState } from 'react';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css';
// import { Draggable } from 'drag-react';
import Draggable from 'react-draggable';
import AnimateHeight from 'react-animate-height';
import Form from 'react-bootstrap/Form';

const task_item = [
  {
    id: '1',
    name: 'offer / em',
    task_data: [
      { id: '1', name: 'task_done', text: 'offer / em 1', title: 'offer / em 1', className:"task_done" },
      { id: '2', name: 'task_done', text: 'offer / em 2', title: 'offer / em 2', className:"task_done" },
      { id: '3', name: 'task_done', text: 'offer / em 3', title: 'offer / em 3', className:"task_done" },
      { id: '4', name: 'task_done', text: 'offer / em 4', title: 'offer / em 4', className:"task_done" },
      { id: '5', name: 'task_done', text: 'offer / em 5', title: 'offer / em 5', className:"task_done" },
      { id: '6', name: 'task_waiting', text: 'offer / em 6', title: 'offer / em 6', className:"task_waiting" },

    ],
  },
  {
    id: '2',
    name: 'inspection',
    task_data: [
      { id: '1', name: 'task_waiting', text: 'inspection 1', title: 'inspection 1', className:"task_waiting" },
      { id: '2', name: 'task_done', text: 'inspection 2', title: 'inspection 2', className:"task_done"  },
      { id: '3', name: 'task_done', text: 'inspection 3', title: 'inspection 3', className:"task_done"  },
      { id: '4', name: 'task_done', text: 'inspection 4', title: 'inspection 4', className:"task_done"  },
      { id: '5', name: 'task_done', text: 'inspection 5', title: 'inspection 5', className:"task_done"  },
      { id: '6', name: 'task_done', text: 'inspection 6', title: 'inspection 6', className:"task_done"  },
      { id: '7', name: 'task_done', text: 'inspection 7', title: 'inspection 7', className:"task_done"  },

    ],
  },
  {
    id: '3',
    name: 'financing',
    task_data: [
      { id: '1', name: 'task_done', text: 'financing 1', title: 'financing 1', className:"task_done"  },
      { id: '2', name: 'task_done', text: 'financing 2', title: 'financing 2', className:"task_done"  },
      { id: '3', name: 'task_done', text: 'financing 3', title: 'financing 3', className:"task_done"  },
      { id: '4', name: 'task_note', text: 'financing 4', title: 'financing 4', className:"task_note"  },
      { id: '5', name: 'task_note', text: 'financing 5', title: 'financing 5', className:"task_note"  },
    ],
  },
  {
    id: '4',
    name: 'title work',
    task_data: [
      { id: '1', name: 'task_done', text: 'title work 1', title: 'title work 1', className:"task_done"  },
      { id: '2', name: 'task_done', text: 'title work 2', title: 'title work 2', className:"task_done"  },
      { id: '3', name: 'task_done', text: 'title work 3', title: 'title work 3', className:"task_done"  },
      { id: '4', name: 'task_done', text: 'title work 4', title: 'title work 4', className:"task_done"  },
      { id: '5', name: 'task_note', text: 'title work 5', title: 'title work 5', className:"task_note"  },
      { id: '6', name: 'task_waiting', text: 'title work 6', title: 'title work 6', className:"task_waiting"  },
    ],
  },
  {
    id: '5',
    name: 'closing',
    task_data: [
      { id: '1', name: 'task_done', text: 'closing 1', title: 'closing 1', className:"task_done"  },
      { id: '2', name: 'task_done', text: 'closing 21', title: 'closing 2', className:"task_done"  },
      { id: '3', name: 'task_note', text: 'closing 3', title: 'closing 3', className:"task_note"  },
      { id: '4', name: 'task_waiting', text: 'closing 4', title: 'closing 4', className:"task_waiting"  },
    ],
  },
  {
    id: '6',
    name: 'extras',
    task_data: [
      { id: '1', name: 'task_done', text: 'extras 1', title: 'extras 1', className:"task_done"   },
      { id: '2', name: 'task_done', text: 'extras 2', title: 'extras 2', className:"task_done"   },
      { id: '3', name: 'task_done', text: 'extras 3', title: 'extras 3', className:"task_done"   },
      { id: '4', name: 'task_done', text: 'extras 4', title: 'extras 6', className:"task_done"   },
    ],
  },
];
const user_item = [
  {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '313-313-3130',
    role: 'Buyer 1',
    role_key: 'buyer_1',
    type: 'B1' 
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'janedoe@gmail.com',
    phone: '313-313-3131',
    role: 'Buyer 2',
    role_key: 'buyer_2',
    type: 'B2' 
  },
  {
    id: '3',
    name: 'Jim Schotts',
    email: 'jimschotts@gmail.com',
    phone: '313-313-3133',
    role: 'Inspector',
    role_key: 'inspector',
    type: 'B1' 
  },
  {
    id: '4',
    name: 'Grand Lyons',
    email: 'grandlyons@gmail.com',
    phone: '313-313-3134',
    role: 'Leader',
    role_key: 'leader',
    type: 'F1' 
  },
  {
    id: '5',
    name: 'Team Lyons',
    email: 'teamlyons@gmail.com',
    phone: '313-313-3135',
    role: 'Leader Team',
    role_key: 'leader_team',
    type: 'F2' 
  },
  
];
export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = { scale: null };

    this.state = {
      task_data1: [
          { id: '1', name: 'task_done', text: 'offer / em 1', title: 'offer / em 1', className:"task_done" },
          { id: '2', name: 'task_done', text: 'offer / em 2', title: 'offer / em 2', className:"task_done" },
          { id: '3', name: 'task_done', text: 'offer / em 3', title: 'offer / em 3', className:"task_done" },
          { id: '4', name: 'task_done', text: 'offer / em 4', title: 'offer / em 4', className:"task_done" },
          { id: '5', name: 'task_done', text: 'offer / em 5', title: 'offer / em 5', className:"task_done" },
          { id: '6', name: 'task_waiting', text: 'offer / em 6', title: 'offer / em 6', className:"task_waiting" },
    
        ],
      task_data2: [
        { id: '1', name: 'task_waiting', text: 'inspection 1', title: 'inspection 1', className:"task_waiting" },
        { id: '2', name: 'task_done', text: 'inspection 2', title: 'inspection 2', className:"task_done"  },
        { id: '3', name: 'task_done', text: 'inspection 3', title: 'inspection 3', className:"task_done"  },
        { id: '4', name: 'task_done', text: 'inspection 4', title: 'inspection 4', className:"task_done"  },
        { id: '5', name: 'task_done', text: 'inspection 5', title: 'inspection 5', className:"task_done"  },
        { id: '6', name: 'task_done', text: 'inspection 6', title: 'inspection 6', className:"task_done"  },
        { id: '7', name: 'task_done', text: 'inspection 7', title: 'inspection 7', className:"task_done"  },
  
      ],
      task_data3: [
        { id: '1', name: 'task_done', text: 'financing 1', title: 'financing 1', className:"task_done"  },
        { id: '2', name: 'task_done', text: 'financing 2', title: 'financing 2', className:"task_done"  },
        { id: '3', name: 'task_done', text: 'financing 3', title: 'financing 3', className:"task_done"  },
        { id: '4', name: 'task_note', text: 'financing 4', title: 'financing 4', className:"task_note"  },
        { id: '5', name: 'task_note', text: 'financing 5', title: 'financing 5', className:"task_note"  },
      ],
      task_data4: [
        { id: '1', name: 'task_done', text: 'title work 1', title: 'title work 1', className:"task_done"  },
        { id: '2', name: 'task_done', text: 'title work 2', title: 'title work 2', className:"task_done"  },
        { id: '3', name: 'task_done', text: 'title work 3', title: 'title work 3', className:"task_done"  },
        { id: '4', name: 'task_done', text: 'title work 4', title: 'title work 4', className:"task_done"  },
        { id: '5', name: 'task_note', text: 'title work 5', title: 'title work 5', className:"task_note"  },
        { id: '6', name: 'task_waiting', text: 'title work 6', title: 'title work 6', className:"task_waiting"  },
      ],
      task_data5: [
        { id: '1', name: 'task_done', text: 'closing 1', title: 'closing 1', className:"task_done"  },
        { id: '2', name: 'task_done', text: 'closing 21', title: 'closing 2', className:"task_done"  },
        { id: '3', name: 'task_note', text: 'closing 3', title: 'closing 3', className:"task_note"  },
        { id: '4', name: 'task_waiting', text: 'closing 4', title: 'closing 4', className:"task_waiting"  },
      ],
      task_data6: [
        { id: '1', name: 'task_done', text: 'extras 1', title: 'extras 1', className:"task_done"   },
        { id: '2', name: 'task_done', text: 'extras 2', title: 'extras 2', className:"task_done"   },
        { id: '3', name: 'task_done', text: 'extras 3', title: 'extras 3', className:"task_done"   },
        { id: '4', name: 'task_done', text: 'extras 4', title: 'extras 4', className:"task_done"   },
      ],
      // shouldCopyOnOutsideDrop: false,
      height: 0,
      height2: 0
    };
    
  }
  


  state = {
    disabled: false
  };
  toggleDraggable = () => this.setState(prevState => ({ disabled: !prevState.disabled }));
  toggleDraggable2 = () => this.setState(prevState => ({ disabled2: !prevState.disabled2 }));


  render = () => {
    // const [height, setHeight] = useState(0);
    const { disabled, disabled2 } = this.state;
    // const [listTask, setListTask] = useState('task_data');

    const externalNodeType = 'yourNodeType';
    const { shouldCopyOnOutsideDrop } = this.state;

    
// const User = (props) => {

  return (
    <div className="user-container">
      <div className='user-content'>
        <div className='user-item'>
          <div className='item-title'>

            <h5>(B) T&N Lorem orem Ipsum </h5>

            <span className='item-title-number'>10</span>


          </div>

          <div className='user-info-drap'>
            <Draggable disabled={disabled} bounds="parent">
              <div className={!disabled ? "draggable" : null}>
                
                
                <div className='user-toggle'>
                  {/* <div className="content">
                    <h2>🤟 Click on the circle to toggle animations 🤟</h2>
                    <div id="circle" className={"circle-button " + this.renderClass(this.state.scale)}
                      onClick={() => this.toggle()}
                      >CLICK</div>
                  </div> */}

                  <div className='user-toggle-content'>
                  
                    <AnimateHeight
                      id="example-panel"
                      duration={500}
                      height={this.state.height} // see props documentation below
                    >
                      <div className='user-toggle-main'>
                        <div className='user-list-add'>
                          {user_item.map((user_value, i ) => {
                            return (
                              <div className='user-list-card'>
                                <div className='user-type'><span>{user_value.type}: {user_value.name}</span></div>
                                <div className='user-email'><span>{user_value.email}</span></div>
                                <div className='user-phone'><span>{user_value.phone}</span></div>
                                <div className='user-role'>
                                  <span>Role </span> 
                                  <select disabled>
                                    <option value={user_value.role_key}>{user_value.role}</option>
                                  </select>
                                </div>
                              </div> 
                              )
                            })
              
                          }
                          
                          <div className='user-list-card-new'>
                            <span className='user-list-new'>+ Person</span>
                          </div>                  
                          
                        </div>
                        
                      </div>
                    </AnimateHeight>
                    <div className='user-toggle-button'>
                      <button className="btn btn-primary mb-5" onClick={this.toggleDraggable}>
                        {disabled ? "Enable" : "Disable"} Drag
                      </button>
                      <button
                        className='btn btn-primary mb-5'
                        aria-expanded={this.state.height !== 0}
                        aria-controls="example-panel"
                        onClick={() => this.setState({height: this.state.height === 0 ? 'auto' : 0})}
                      >
                        {this.state.height === 0 ? 'Open' : 'Close'}
                      </button>
                    </div>
                    
                  </div>
                  
                  
                </div>

                 
              </div>
            </Draggable>
          </div>

          <div className='item-content'>
            <div className='item-list'>
              {task_item.map((task_card, i ) => {
                return (

                  
                    <div className='item-card'>
                      <div className='item-card-header'>
                        <span className='item-card-title'>{task_card.name}</span>
                        <div className='item-card-content'>
                          {/* <span className='item-task'>{task_card.name}</span> */}
                          {task_card.task_data.map((task_item1, index) => {
                            return (
                              <div className='item-task' >
                                <span className={task_item1.name}></span>
                              </div>

                            )

                          })}
                      

                        </div>
                      </div>
                      <div className='item-card-table'>
                        <h3 className='table-title'>{task_card.name}</h3>
                        <div className='table-content'>
                          <ul className='table-list'>
                            <div>
                              <div style={{ height: 500 }}>
                                {
                                  task_card.id == 1 &&
                                  <SortableTree
                                  treeData={this.state.task_data1}
                                  onChange={task_data1 => this.setState({ task_data1 })}
                                  dndType={externalNodeType}
                                  // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                  generateNodeProps={({ node, path }) => {
                                    return {
                                      className:  `${node.className}`,
                                    };
                                  }}
                                />
                                }
                                {
                                  task_card.id == 2 &&
                                  <SortableTree
                                  treeData={this.state.task_data2}
                                  onChange={task_data2 => this.setState({ task_data2 })}
                                  dndType={externalNodeType}
                                  // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                  generateNodeProps={({ node, path }) => {
                                    return {
                                    className:  `${node.className}`,
                                    };
                                  }}
                                />
                                }
                                {
                                  task_card.id == 3 &&
                                  <SortableTree
                                  treeData={this.state.task_data3}
                                  onChange={task_data3 => this.setState({ task_data3 })}
                                  dndType={externalNodeType}
                                  // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                  generateNodeProps={({ node, path }) => {
                                    return {
                                    className:  `${node.className}`,
                                    };
                                  }}
                                />
                                }
                                {
                                  task_card.id == 4 &&
                                  <SortableTree
                                  treeData={this.state.task_data4}
                                  onChange={task_data4 => this.setState({ task_data4 })}
                                  dndType={externalNodeType}
                                  // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                  generateNodeProps={({ node, path }) => {
                                    return {
                                    className:  `${node.className}`,
                                    };
                                  }}
                                />
                                }
                                {
                                  task_card.id == 5 &&
                                  <SortableTree
                                  treeData={this.state.task_data5}
                                  onChange={task_data5 => this.setState({ task_data5 })}
                                  dndType={externalNodeType}
                                  // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                  generateNodeProps={({ node, path }) => {
                                    return {
                                    className:  `${node.className}`,
                                    };
                                  }}
                                />
                                }
                                {
                                  task_card.id == 6 &&
                                  <SortableTree
                                  treeData={this.state.task_data6}
                                  onChange={task_data6 => this.setState({ task_data6 })}
                                  dndType={externalNodeType}
                                  // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                  generateNodeProps={({ node, path }) => {
                                    return {
                                    className:  `${node.className}`,
                                    };
                                  }}
                                />
                                }
                                
                              </div>
                            </div>

                          

                          {/* {task_card.task_data.map((task_table) => {
                            return (
                              <li className='table-list-li'>
                                <div className='table-task-status'>
                                  <span className={task_table.name}></span>
                                </div>
                                
                                <p className='table-task-text'>{task_table.text}</p>
                              </li>

                            )

                          })} */}
                            
                           
                            
                            
                          </ul>
                        </div>
                      </div>
                    </div>

                )
              })

              }

            </div>

            
          </div>
          <div className='documents-info-drap'>
            <Draggable disabled={disabled2} bounds="parent">
              <div className={!disabled2 ? "draggable" : null}>
                
                
                <div className='documents-toggle'>
                  {/* <div className="content">
                    <h2>🤟 Click on the circle to toggle animations 🤟</h2>
                    <div id="circle" className={"circle-button " + this.renderClass(this.state.scale)}
                      onClick={() => this.toggle()}
                      >CLICK</div>
                  </div> */}

                  <div className='documents-toggle-content'>
                      <div className='documents-toggle-button'>
                        <button className="btn btn-primary mb-5" onClick={this.toggleDraggable2}>
                          {disabled2 ? "Enable" : "Disable"} Drag
                        </button>
                        <button
                          className='btn btn-primary mb-5'
                          aria-expanded={this.state.height2 !== 0}
                          aria-controls="example-panel"
                          onClick={() => this.setState({height2: this.state.height2 === 0 ? 'auto' : 0})}
                        >
                          {this.state.height2 === 0 ? 'Open' : 'Close'}
                        </button>
                      </div>
                      <div className='documents-toggle-data-main'>
                      <AnimateHeight
                      id="documents-panel"
                      duration={500}
                      height={this.state.height2} // see props documentation below
                    >

                      <div className='documents-toggle-main'>
                        
                        <div className='documents-list-left'>
                          <h4>Share Selected</h4>

                            <Form.Check // prettier-ignore
                              type="checkbox"
                              id="select-all-checkbox"
                              label="Select All"
                            />

                            <Form.Check // prettier-ignore
                              type="checkbox"
                              id="kq-office-policy-checkbox"
                              label="KW Office policy"
                            />
                            <Form.Check // prettier-ignore
                              type="checkbox"
                              id="baa-checkbox"
                              label="BAA"
                            />

                            <Form.Check
                              disabled
                              type="checkbox"
                              id="disabled-pa-checkbox"
                              label="PA"
                            />

                          {/* <Form>
                            {['checkbox'].map((type) => (
                              <div key={`default-${type}`} className="mb-3">
                                <Form.Check // prettier-ignore
                                  type={type}
                                  id={`default-${type}`}
                                  label={`default ${type}`}
                                />

                                <Form.Check
                                  disabled
                                  type={type}
                                  label={`disabled ${type}`}
                                  id={`disabled-default-${type}`}
                                />
                              </div>
                            ))}
                          </Form>   */}
                          
                        </div>
                        <div className='documents-list-right'>
                            <div className='documents-row-title'>
                              <span className='documents-row-name'>B1</span>
                              <span className='documents-row-name'>B2</span>
                              <span className='documents-row-name'>LA</span>
                              <span className='documents-row-name'>F1</span>
                              <span className='documents-row-name'>F2</span>
                              <span className='documents-row-name'>TI</span>
                              <span className='documents-row-name'>KW</span>
                              <span className='documents-row-name'>TG</span>
                            </div>
                            <div className='documents-row-content'>
                              <span className='documents-row-data green'></span>
                              <span className='documents-row-data green'></span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                            </div>
                            <div className='documents-row-content'>
                              <span className='documents-row-data green'>S</span>
                              <span className='documents-row-data green'></span>
                              <span className='documents-row-data'>S</span>
                              <span className='documents-row-data'>S</span>
                              <span className='documents-row-data'>S</span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                            </div>
                            <div className='documents-row-content'>
                              <span className='documents-row-data green'></span>
                              <span className='documents-row-data green'></span>
                              <span className='documents-row-data'>S</span>
                              <span className='documents-row-data'>S</span>
                              <span className='documents-row-data'>S</span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                            </div>
                            <div className='documents-row-content'>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'>S</span>
                              <span className='documents-row-data'>S</span>
                              <span className='documents-row-data'>S</span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                              <span className='documents-row-data'></span>
                            </div>
                        </div>
                      </div>
                    </AnimateHeight>
                      </div>
                    
                    
                    
                  </div>
                  
                  
                </div>

                 
              </div>
            </Draggable>
            </div>
          
        </div>
      </div>
    </div>
  );
// }
// export default User;

  }
}