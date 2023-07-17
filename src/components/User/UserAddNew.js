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
  const [checked, setChecked] = React.useState([1]);
  const [ListUser, setListUser] = React.useState([1, 2, 3,4,5,6]);
  const [ListUser1, setListUser1] = React.useState(props.dataUser);
//   console.log(props)

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    // setListUser(newChecked);
    setChecked(newChecked);
    // console.log(newChecked)
    handleAddUser(value)
    // props.handleAddNewUser( newChecked);

  };

  const removeSecond = (value) => {
    setListUser1((current) =>
      current.filter((fruit) => fruit.id !== value)
    );
  };

  const handleAddUser = (userid) => {
    // let addUser = {
    //     id: userid + 10,
    //     name: "John Doe " + userid + 10,
    //     email: "johndoe@gmail.com",
    //     phone: "313-313-3130",
    //     role: "Buyer 1",
    //     role_key: "buyer_1",
    //     type: "B1",
        
    //   }
    // {ListUser1.map((value) => {
    //     console.log('value',value.id);
    //     console.log('userid',userid);
    //     if(value.id === userid) {
    //         removeSecond(userid);
    //         props.handleAddNewUser( ListUser1);
    //     } else {
            
    //         //   ListUser1.push(addUser);
    //         //   props.handleAddNewUser( ListUser1);
    //     }

    // })}

    console.log('ListUser1', ListUser1);
    
    let addUser = {
        id: userid + 10,
        name: "John Doe " + userid + 10,
        email: "johndoe@gmail.com",
        phone: "313-313-3130",
        role: "Buyer 1",
        role_key: "buyer_1",
        type: "B1",
        
      }
      ListUser1.push(addUser);
      props.handleAddNewUser( ListUser1);
    //   setListUser1(addUser.ListUser1);
  }

  return (
    <div className="user-list-card-new">
      <div onClick={() => setaddUser(handleOpen)}>
        <span className="user-list-new">+ Person</span>
      </div>
      {/* <Button  className="user-list-card-new" onClick={handleOpen}>+ Person</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
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
              {ListUser.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem
                    key={value}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={`Avatar n°${value + 1}`}
                          src={`/static/images/avatar/${value + 1}.jpg`}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        id={labelId}
                        primary={`User ${value + 1}`}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
              <div className="button-modal">
                {/* <Button variant="contained" onClick={handleClose}>Save</Button> */}
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
