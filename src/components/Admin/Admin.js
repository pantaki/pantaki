import React, { Component } from 'react';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css';
import { MdSettings, MdAccountCircle, MdCalendarMonth, MdAndroid, MdFlutterDash } from "react-icons/md";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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


const task_item = [
    {
        id: '1',
        name: 'offer / em',
        task_data: [
            {id: '1', name: 'task_done'},
            {id: '2', name: 'task_done'},
            {id: '3', name: 'task_done'},
            {id: '4', name: 'task_done'},
            {id: '5', name: 'task_done'},
            {id: '6', name: 'task_note'},
            
        ],
    },
    {
        id: '2',
        name: 'inspection',
        task_data: [
            {id: '1', name: 'task_done'},
            {id: '2', name: 'task_done'},
            {id: '3', name: 'task_done'},
            {id: '4', name: 'task_done'},
            {id: '5', name: 'task_done'},
            {id: '6', name: 'task_done'},
            {id: '7', name: 'task_done'},
            
        ],
    },
    {
        id: '3',
        name: 'financing',
        task_data: [
            {id: '1', name: 'task_done'},
            {id: '2', name: 'task_done'},
            {id: '3', name: 'task_done'},
            {id: '4', name: 'task_note'},
            {id: '5', name: 'task_note'},
        ],
    },
    {
        id: '4',
        name: 'title work',
        task_data: [
            {id: '1', name: 'task_done'},
            {id: '2', name: 'task_done'},
            {id: '3', name: 'task_done'},
            {id: '4', name: 'task_done'},
            {id: '5', name: 'task_note'},
            {id: '6', name: 'task_waiting'},   
        ],
    },
    {
        id: '5',
        name: 'closing',
        task_data: [
            {id: '1', name: 'task_done'},
            {id: '2', name: 'task_done'},
            {id: '3', name: 'task_note'},
            {id: '4', name: 'task_waiting'},   
        ],
    },
    {
        id: '6',
        name: 'extras',
        task_data: [
            {id: '1', name: 'task_done'},
            {id: '2', name: 'task_done'},
            {id: '3', name: 'task_done'},
            {id: '4', name: 'task_done'},   
        ],
    },
    ]
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
        span : 3,
        span2 : 3,
        span3 : 3,
        span4 : 3,
        span5 : 3,
      };
      
      
    }
    
  
    render() {
      // Both trees need to share this same node type in their
      // `dndType` prop
      const externalNodeType = 'yourNodeType';
      const { shouldCopyOnOutsideDrop } = this.state;

      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
    //   const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
        
    //   }
      

      return (
        <div className='container admin-page'>

            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box style={{ cursor: 'pointer', transition: '0.5s' }} gridColumn={this.state.span === 3 ? 'span 3' : 'span 12'} onClick={() => this.setState({span: this.state.span === 3 ? 12 : 3})}>
                    <div className='page-content'>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                (B) T&N Lorem orem Ipsum
                                </Typography>
                                <Typography variant="h5" component="div">
                                    10
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    emails 3
                                </Typography>
                                <Typography variant="body2">
                                    wf docs 2
                                </Typography>
                                <Typography variant="body2">
                                    notes 2
                                </Typography>
                                
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                    
                </Box>
                <Box style={{ cursor: 'pointer', transition: '0.5s' }} gridColumn={this.state.span2 === 3 ? 'span 3' : 'span 12'} onClick={() => this.setState({span2: this.state.span2 === 3 ? 12 : 3})}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            (B) T&N Lorem orem Ipsum
                            </Typography>
                            <Typography variant="h5" component="div">
                                10
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                emails 3
                            </Typography>
                            <Typography variant="body2">
                                wf docs 2
                            </Typography>
                            <Typography variant="body2">
                                notes 2
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box style={{ cursor: 'pointer', transition: '0.5s' }} gridColumn={this.state.span3 === 3 ? 'span 3' : 'span 12'} onClick={() => this.setState({span3: this.state.span3 === 3 ? 12 : 3})}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            (B) T&N Lorem orem Ipsum
                            </Typography>
                            <Typography variant="h5" component="div">
                                10
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                emails 3
                            </Typography>
                            <Typography variant="body2">
                                wf docs 2
                            </Typography>
                            <Typography variant="body2">
                                notes 2
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box style={{ cursor: 'pointer', transition: '0.5s' }} gridColumn={this.state.span4 === 3 ? 'span 3' : 'span 12'} onClick={() => this.setState({span4: this.state.span4 === 3 ? 12 : 3})}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            (B) T&N Lorem orem Ipsum
                            </Typography>
                            <Typography variant="h5" component="div">
                                10
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                emails 3
                            </Typography>
                            <Typography variant="body2">
                                wf docs 2
                            </Typography>
                            <Typography variant="body2">
                                notes 2
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
                <Box style={{ cursor: 'pointer', transition: '0.5s' }} gridColumn={this.state.span5 === 3 ? 'span 3' : 'span 12'} onClick={() => this.setState({span5: this.state.span5 === 3 ? 12 : 3})}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            (B) T&N Lorem orem Ipsum
                            </Typography>
                            <Typography variant="h5" component="div">
                                10
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                emails 3
                            </Typography>
                            <Typography variant="body2">
                                wf docs 2
                            </Typography>
                            <Typography variant="body2">
                                notes 2
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
            
            {/* <div className='homepage-effects1'>
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
            </div> */}
        </div>
      );
    }
  }