// import React, { Component } from 'react';
import "./User.scss";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
 
export default function UserAddNew(props) {
  const [open, setOpen] = React.useState(false);
  const [addUser, setaddUser] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = React.useState(props.dataUserChecked);
  const [ListUser, setListUser] = React.useState([1, 2, 3,4,5,6]);
  const [ListUser1, setListUser1] = React.useState(props.dataUser);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    var taskSave = '';
    console.log('currentIndex: ', currentIndex)
    if (currentIndex === -1) {
  
      newChecked.push(value);
      taskSave = handleAddUser(value)
    } else {
      newChecked.splice(currentIndex, 1);
     
      taskSave = deleteById(value);
    }
    console.log('taskSave: ', taskSave)
    setChecked(newChecked);
    setListUser1(taskSave); 

  };

  const deleteById = id => {
    const newListUser1 = [...ListUser1];
    // const newListUser2 = oldValues => {
    //   return oldValues.filter(newListUser1 => newListUser1.id !== id)
    // }
    // return newListUser2;

    if(id){
      const newListUser2 = newListUser1.map((newListUserValue) => {
        if(id === newListUserValue.id) {

          return { ...newListUserValue, 
            status: 'no',
          };
        
        }
        return newListUserValue;
        
      });
      return newListUser2;

    }
  }

  

  const handleAddUser = (userid) => {
    const newListUser1 = [...ListUser1];
    console.log('newListUser1', newListUser1);
  
    // let addUser = {
    //   id: userid + 10,
    //   name: "John Doe " + userid + 10,
    //   email: "johndoe@gmail.com",
    //   phone: "313-313-3130",
    //   role: "Buyer 1",
    //   role_key: "buyer_1",
    //   type: "B1",
    //   status: "yes"
      
    // }
    // newListUser1.push(addUser);
    // return newListUser1;

    if(userid){
      const dataReturn = newListUser1.map((newListUserValue) => {
        if(userid === newListUserValue.id) {

          return { ...newListUserValue, 
            status: 'yes',
          };
        
        }
        return newListUserValue;
        
      });
      return dataReturn;

    }
      

  }

  const handleSave = () => {
    props.handleAddNewUser( ListUser1, checked);
    handleClose();
  }

  return (
    <div className="user-list-card-new">
      <div onClick={() => setaddUser(handleOpen)}>
        <span className="user-list-new">+ Person</span>
      </div>
      {/* <Button  className="user-list-card-new" onClick={handleOpen}>+ Person</Button> */}
      <Modal
        open={open}
        onClose={handleSave}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            List User
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <List
              dense
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {ListUser1.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value.id}`;
                
                return (
                  <ListItem
                    key={value.id}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(value.id)}
                        checked={checked.indexOf(value.id) !== -1 }
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={`Avatar n°${value.id + 1}`}
                          src={`/static/images/avatar/${value.id + 1}.jpg`}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        id={labelId}
                        primary={`${value.name}`}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
              <div className="button-modal">
                <Button variant="contained" onClick={handleSave}>Save</Button>
                <Button variant="contained" onClick={handleClose}>Close</Button>
              </div>
            </List>
            
            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// export default class UserAddNew extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         addUser: props.addUser
//       };

//     }

//     render() {

//       return (
//             <div className="user-list-card-new"
//                 onClick={() =>
//                     this.setState({
//                     addUser: console.log('user new'),
//                 })
//                 }>
//                 <span className="user-list-new">+ Person</span>
//             </div>

//       );
//     }
//   }
