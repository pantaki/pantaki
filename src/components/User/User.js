import * as React from "react";
import { Component, useState } from "react";
import SortableTree from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css";
import './User.scss';
// import { Draggable } from 'drag-react';
import Draggable from "react-draggable";
import AnimateHeight from "react-animate-height";
import Form from "react-bootstrap/Form";
import {
  MdSettings,
  MdAccountCircle,
  MdCalendarMonth,
  MdAndroid,
  MdFlutterDash,
} from "react-icons/md";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tree from "../TreeTask/Tree";
// import ListTask from '../ListTask';

import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from '@mui/material/styles';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

// components User
import UserDrag from "./UserDrag";
import UserAddNew from "./UserAddNew";

const task_item = [
  {
    id: "1",
    name: "Consultation",
    task_data: [
      {
        id: "1",
        name: "task_done",
        text: "offer / em 1",
        title: "offer / em 1",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "2",
        name: "task_done",
        text: "offer / em 2",
        title: "offer / em 2",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "3",
        name: "task_done",
        text: "offer / em 3",
        title: "offer / em 3",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "4",
        name: "task_done",
        text: "offer / em 4",
        title: "offer / em 4",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "5",
        name: "task_done",
        text: "offer / em 5",
        title: "offer / em 5",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "6",
        name: "task_waiting",
        text: "offer / em 6",
        title: "offer / em 6",
        className: "task_waiting",
        className2: "task_done",
        className3: "task_note",
        className4: "task_grey",
      },
    ],
  },
  {
    id: "2",
    name: "inspection",
    task_data: [
      {
        id: "1",
        name: "task_waiting",
        text: "inspection 1",
        title: "inspection 1",
        className: "task_waiting",
        className2: "task_done",
        className3: "task_note",
        className4: "task_grey",
      },
      {
        id: "2",
        name: "task_done",
        text: "inspection 2",
        title: "inspection 2",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "3",
        name: "task_done",
        text: "inspection 3",
        title: "inspection 3",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "4",
        name: "task_done",
        text: "inspection 4",
        title: "inspection 4",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "5",
        name: "task_done",
        text: "inspection 5",
        title: "inspection 5",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "6",
        name: "task_done",
        text: "inspection 6",
        title: "inspection 6",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "7",
        name: "task_done",
        text: "inspection 7",
        title: "inspection 7",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
    ],
  },
  {
    id: "3",
    name: "Offer",
    task_data: [
      {
        id: "1",
        name: "task_done",
        text: "Call agent before writing PA (see if other offers, motivation, etc.)",
        title: "Call agent before writing PA (see if other offers, motivation, etc.)",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "2",
        name: "task_done",
        text: "Write offer and all necessary docs [DOCUSIGN]",
        title: "Write offer and all necessary docs [DOCUSIGN]",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "3",
        name: "task_done",
        text: "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
        title: "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "4",
        name: "task_note",
        text: "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
        title: "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
        className: "task_note",
        className2: "task_done",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "5",
        name: "task_note",
        text: "Call, text or email to confirm LA (listing agent) received offer and docs",
        title: "Call, text or email to confirm LA (listing agent) received offer and docs",
        className: "task_note",
        className2: "task_done",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "6",
        name: "task_note",
        text: "Counter offer (if applicable) until acceptance [DOCUSIGN]",
        title: "Counter offer (if applicable) until acceptance [DOCUSIGN]",
        className: "task_note",
        className2: "task_done",
        className3: "task_waiting",
        className4: "task_grey",
      },
    ],
  },
  {
    id: "4",
    name: "title work",
    task_data: [
      {
        id: "1",
        name: "task_done",
        text: "title work 1",
        title: "title work 1",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "2",
        name: "task_done",
        text: "title work 2",
        title: "title work 2",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "3",
        name: "task_done",
        text: "title work 3",
        title: "title work 3",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "4",
        name: "task_done",
        text: "title work 4",
        title: "title work 4",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "5",
        name: "task_note",
        text: "title work 5",
        title: "title work 5",
        className: "task_note",
        className2: "task_done",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "6",
        name: "task_waiting",
        text: "title work 6",
        title: "title work 6",
        className: "task_waiting",
        className2: "task_done",
        className3: "task_note",
        className4: "task_grey",
      },
    ],
  },
  {
    id: "5",
    name: "Financing",
    task_data: [
      {
        id: "1",
        name: "task_done",
        text: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
        title: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "2",
        name: "task_done",
        text: "Confirm value and condition are accepted 10 days before closing",
        title: "Confirm value and condition are accepted 10 days before closing",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "3",
        name: "task_note",
        text: "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
        title: "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
        className: "task_note",
        className2: "task_done",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "4",
        name: "task_waiting",
        text: "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
        title: "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
        className: "task_waiting",
        className2: "task_done",
        className3: "task_note",
        className4: "task_grey",
      },
      {
        id: "5",
        name: "task_waiting",
        text: "Receive clear to close from lender",
        title: "Receive clear to close from lender",
        className: "task_waiting",
        className2: "task_done",
        className3: "task_note",
        className4: "task_grey",
      },
      {
        id: "6",
        name: "task_waiting",
        text: "Confirm lender sends over final docs to title company",
        title: "Confirm lender sends over final docs to title company",
        className: "task_waiting",
        className2: "task_done",
        className3: "task_note",
        className4: "task_grey",
      },
    ],
  },
  {
    id: "6",
    name: "Closing",
    task_data: [
      {
        id: "1",
        name: "task_done",
        text: "Ask buyer if they can close in the afternoon (2 weeks before closing)",
        title: "Ask buyer if they can close in the afternoon (2 weeks before closing)",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "2",
        name: "task_done",
        text: "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
        title: "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "3",
        name: "task_done",
        text: "Schedule closing with title company [GMAIL]",
        title: "Schedule closing with title company [GMAIL]",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
      {
        id: "4",
        name: "task_done",
        text: "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
        title: "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
        className: "task_done",
        className2: "task_note",
        className3: "task_waiting",
        className4: "task_grey",
      },
    ],
  },
];
const user_item = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "313-313-3130",
    role: "Buyer 1",
    role_key: "buyer_1",
    type: "B1",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    phone: "313-313-3131",
    role: "Buyer 2",
    role_key: "buyer_2",
    type: "B2",
  },
  {
    id: 3,
    name: "Jim Schotts",
    email: "jimschotts@gmail.com",
    phone: "313-313-3133",
    role: "Inspector",
    role_key: "inspector",
    type: "B1",
  },
  {
    id: 4,
    name: "Grand Lyons",
    email: "grandlyons@gmail.com",
    phone: "313-313-3134",
    role: "Leader",
    role_key: "leader",
    type: "F1",
  },
  {
    id: 5,
    name: "Team Lyons",
    email: "teamlyons@gmail.com",
    phone: "313-313-3135",
    role: "Leader Team",
    role_key: "leader_team",
    type: "F2",
  },
];


export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task_data1: [
        {
          id: "1",
          name: "task_done",
          text: "offer / em 1",
          title: "offer / em 1",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "2",
          name: "task_done",
          text: "offer / em 2",
          title: "offer / em 2",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "3",
          name: "task_done",
          text: "offer / em 3",
          title: "offer / em 3",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "4",
          name: "task_done",
          text: "offer / em 4",
          title: "offer / em 4",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "5",
          name: "task_done",
          text: "offer / em 5",
          title: "offer / em 5",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "6",
          name: "task_waiting",
          text: "offer / em 6",
          title: "offer / em 6",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        },
      ],
      task_data2: [
        {
          id: "1",
          name: "task_waiting",
          text: "inspection 1",
          title: "inspection 1",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        },
        {
          id: "2",
          name: "task_done",
          text: "inspection 2",
          title: "inspection 2",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "3",
          name: "task_done",
          text: "inspection 3",
          title: "inspection 3",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "4",
          name: "task_done",
          text: "inspection 4",
          title: "inspection 4",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "5",
          name: "task_done",
          text: "inspection 5",
          title: "inspection 5",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "6",
          name: "task_done",
          text: "inspection 6",
          title: "inspection 6",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "7",
          name: "task_done",
          text: "inspection 7",
          title: "inspection 7",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
      ],
      task_data3: [
        {
          id: "1",
          name: "task_done",
          text: "Call agent before writing PA (see if other offers, motivation, etc.)",
          title: "Call agent before writing PA (see if other offers, motivation, etc.)",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "2",
          name: "task_done",
          text: "Write offer and all necessary docs [DOCUSIGN]",
          title: "Write offer and all necessary docs [DOCUSIGN]",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "3",
          name: "task_done",
          text: "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
          title: "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "4",
          name: "task_note",
          text: "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
          title: "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "5",
          name: "task_note",
          text: "Call, text or email to confirm LA (listing agent) received offer and docs",
          title: "Call, text or email to confirm LA (listing agent) received offer and docs",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "6",
          name: "task_note",
          text: "Counter offer (if applicable) until acceptance [DOCUSIGN]",
          title: "Counter offer (if applicable) until acceptance [DOCUSIGN]",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        },
      ],
      task_data4: [
        {
          id: "1",
          name: "task_done",
          text: "title work 1",
          title: "title work 1",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "2",
          name: "task_done",
          text: "title work 2",
          title: "title work 2",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "3",
          name: "task_done",
          text: "title work 3",
          title: "title work 3",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "4",
          name: "task_done",
          text: "title work 4",
          title: "title work 4",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "5",
          name: "task_note",
          text: "title work 5",
          title: "title work 5",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "6",
          name: "task_waiting",
          text: "title work 6",
          title: "title work 6",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        },
      ],
      task_data5: [
        {
          id: "1",
          name: "task_done",
          text: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
          title: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "2",
          name: "task_done",
          text: "Confirm value and condition are accepted 10 days before closing",
          title: "Confirm value and condition are accepted 10 days before closing",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "3",
          name: "task_note",
          text: "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
          title: "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "4",
          name: "task_waiting",
          text: "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
          title: "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        },
        {
          id: "5",
          name: "task_waiting",
          text: "Receive clear to close from lender",
          title: "Receive clear to close from lender",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        },
        {
          id: "6",
          name: "task_waiting",
          text: "Confirm lender sends over final docs to title company",
          title: "Confirm lender sends over final docs to title company",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        },
      ],
      task_data6: [
        {
          id: "1",
          name: "task_done",
          text: "Ask buyer if they can close in the afternoon (2 weeks before closing)",
          title: "Ask buyer if they can close in the afternoon (2 weeks before closing)",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "2",
          name: "task_done",
          text: "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
          title: "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "3",
          name: "task_done",
          text: "Schedule closing with title company [GMAIL]",
          title: "Schedule closing with title company [GMAIL]",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: "4",
          name: "task_done",
          text: "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
          title: "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        }
      ],

      user_item: [
        {
          id: 1,
          name: "John Doe",
          email: "johndoe@gmail.com",
          phone: "313-313-3130",
          role: "Buyer 1",
          role_key: "buyer_1",
          type: "B1",
          status: "yes"
        },
        {
          id: 2,
          name: "Jane Doe",
          email: "janedoe@gmail.com",
          phone: "313-313-3131",
          role: "Buyer 2",
          role_key: "buyer_2",
          type: "B2",
          status: "yes"
        },
        {
          id: 3,
          name: "Jim Schotts",
          email: "jimschotts@gmail.com",
          phone: "313-313-3133",
          role: "Inspector",
          role_key: "inspector",
          type: "B1",
          status: "no"
        },
        {
          id: 4,
          name: "Grand Lyons",
          email: "grandlyons@gmail.com",
          phone: "313-313-3134",
          role: "Leader",
          role_key: "leader",
          type: "F1",
          status: "no"
        },
        {
          id: 5,
          name: "Team Lyons",
          email: "teamlyons@gmail.com",
          phone: "313-313-3135",
          role: "Leader Team",
          role_key: "leader_team",
          type: "F2",
          status: "no"
        },
        {
          id: 6,
          name: "Team Lyons",
          email: "teamlyons@gmail.com",
          phone: "313-313-3135",
          role: "Leader Team",
          role_key: "leader_team",
          type: "F2",
          status: "no"
        },
      ],

      task_item: [
        {
          id: "1",
          name: "Consultation",
          task_data: [
            {
              id: "1",
              name: "task_done",
              text: "offer / em 1",
              title: "offer / em 1",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "2",
              name: "task_done",
              text: "offer / em 2",
              title: "offer / em 2",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "3",
              name: "task_done",
              text: "offer / em 3",
              title: "offer / em 3",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "4",
              name: "task_done",
              text: "offer / em 4",
              title: "offer / em 4",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "5",
              name: "task_done",
              text: "offer / em 5",
              title: "offer / em 5",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "6",
              name: "task_waiting",
              text: "offer / em 6",
              title: "offer / em 6",
              className: "task_waiting",
              className2: "task_done",
              className3: "task_note",
              className4: "task_grey",
            },
          ],
        },
        {
          id: "2",
          name: "inspection",
          task_data: [
            {
              id: "1",
              name: "task_waiting",
              text: "inspection 1",
              title: "inspection 1",
              className: "task_waiting",
              className2: "task_done",
              className3: "task_note",
              className4: "task_grey",
            },
            {
              id: "2",
              name: "task_done",
              text: "inspection 2",
              title: "inspection 2",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "3",
              name: "task_done",
              text: "inspection 3",
              title: "inspection 3",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "4",
              name: "task_done",
              text: "inspection 4",
              title: "inspection 4",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "5",
              name: "task_done",
              text: "inspection 5",
              title: "inspection 5",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "6",
              name: "task_done",
              text: "inspection 6",
              title: "inspection 6",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "7",
              name: "task_done",
              text: "inspection 7",
              title: "inspection 7",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
          ],
        },
        {
          id: "3",
          name: "Offer",
          task_data: [
            {
              id: "1",
              name: "task_done",
              text: "Call agent before writing PA (see if other offers, motivation, etc.)",
              title: "Call agent before writing PA (see if other offers, motivation, etc.)",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "2",
              name: "task_done",
              text: "Write offer and all necessary docs [DOCUSIGN]",
              title: "Write offer and all necessary docs [DOCUSIGN]",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "3",
              name: "task_done",
              text: "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
              title: "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "4",
              name: "task_note",
              text: "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
              title: "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
              className: "task_note",
              className2: "task_done",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "5",
              name: "task_note",
              text: "Call, text or email to confirm LA (listing agent) received offer and docs",
              title: "Call, text or email to confirm LA (listing agent) received offer and docs",
              className: "task_note",
              className2: "task_done",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "6",
              name: "task_note",
              text: "Counter offer (if applicable) until acceptance [DOCUSIGN]",
              title: "Counter offer (if applicable) until acceptance [DOCUSIGN]",
              className: "task_note",
              className2: "task_done",
              className3: "task_waiting",
              className4: "task_grey",
            },
          ],
        },
        {
          id: "4",
          name: "title work",
          task_data: [
            {
              id: "1",
              name: "task_done",
              text: "title work 1",
              title: "title work 1",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "2",
              name: "task_done",
              text: "title work 2",
              title: "title work 2",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "3",
              name: "task_done",
              text: "title work 3",
              title: "title work 3",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "4",
              name: "task_done",
              text: "title work 4",
              title: "title work 4",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "5",
              name: "task_note",
              text: "title work 5",
              title: "title work 5",
              className: "task_note",
              className2: "task_done",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "6",
              name: "task_waiting",
              text: "title work 6",
              title: "title work 6",
              className: "task_waiting",
              className2: "task_done",
              className3: "task_note",
              className4: "task_grey",
            },
          ],
        },
        {
          id: "5",
          name: "Financing",
          task_data: [
            {
              id: "1",
              name: "task_done",
              text: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
              title: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "2",
              name: "task_done",
              text: "Confirm value and condition are accepted 10 days before closing",
              title: "Confirm value and condition are accepted 10 days before closing",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "3",
              name: "task_note",
              text: "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
              title: "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
              className: "task_note",
              className2: "task_done",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "4",
              name: "task_waiting",
              text: "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
              title: "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
              className: "task_waiting",
              className2: "task_done",
              className3: "task_note",
              className4: "task_grey",
            },
            {
              id: "5",
              name: "task_waiting",
              text: "Receive clear to close from lender",
              title: "Receive clear to close from lender",
              className: "task_waiting",
              className2: "task_done",
              className3: "task_note",
              className4: "task_grey",
            },
            {
              id: "6",
              name: "task_waiting",
              text: "Confirm lender sends over final docs to title company",
              title: "Confirm lender sends over final docs to title company",
              className: "task_waiting",
              className2: "task_done",
              className3: "task_note",
              className4: "task_grey",
            },
          ],
        },
        {
          id: "6",
          name: "Closing",
          task_data: [
            {
              id: "1",
              name: "task_done",
              text: "Ask buyer if they can close in the afternoon (2 weeks before closing)",
              title: "Ask buyer if they can close in the afternoon (2 weeks before closing)",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "2",
              name: "task_done",
              text: "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
              title: "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "3",
              name: "task_done",
              text: "Schedule closing with title company [GMAIL]",
              title: "Schedule closing with title company [GMAIL]",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
            {
              id: "4",
              name: "task_done",
              text: "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
              title: "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
              className: "task_done",
              className2: "task_note",
              className3: "task_waiting",
              className4: "task_grey",
            },
          ],
        },
      ],
    
      height: 0,
      height2: 0,
      value: "0",
      expanded: 'panel1',
      addUser: '',
    };

  }

  state = {
    disabled: false,
    
  };
  toggleDraggable = () =>
    this.setState((prevState) => ({ disabled: !prevState.disabled }));
  toggleDraggable2 = () =>
    this.setState((prevState) => ({ disabled2: !prevState.disabled2 }));

  handleAddNewTask = (data, data_key) => {
    
    if(data_key == 'task_data1'){
      this.setState({ task_data1: data});
      this.setState(prevState => {
        let task_data = Object.assign({}, prevState.task_item); 
        task_data[0].task_data = data;                                  
        return { task_data };                                
      })
    } 
    if(data_key == 'task_data2'){
      this.setState({ task_data2: data});
      this.setState(prevState => {
        let task_data = Object.assign({}, prevState.task_item); 
        task_data[1].task_data = data;                                
        return { task_data };      
      })                         
    } 
    if(data_key == 'task_data3'){
      this.setState({ task_data3: data});
      this.setState(prevState => {
        let task_data = Object.assign({}, prevState.task_item);  
        task_data[2].task_data = data;                                 
        return { task_data };                         
      })
    } 
    if(data_key == 'task_data4'){
      this.setState({ task_data4: data});
      this.setState(prevState => {
        let task_data = Object.assign({}, prevState.task_item); 
        task_data[3].task_data = data;                                    
        return { task_data };                              
      })
    } 
    if(data_key == 'task_data5'){
      this.setState({ task_data5: data});
      this.setState(prevState => {
        let task_data = Object.assign({}, prevState.task_item); 
        task_data[4].task_data = data;                                   
        return { task_data };                                
      })
    } 
    if(data_key == 'task_data6'){
      this.setState({ task_data6: data});
      this.setState(prevState => {
        let task_data = Object.assign({}, prevState.task_item); 
        task_data[5].task_data = data;                                      
        return { task_data };                                
      })
    } 

  }

  handleAddNewUser = (newChecked) => {
    this.setState({ user_item: newChecked});
    console.log(newChecked);
  }
  
  render = () => {
    // const [height, setHeight] = useState(0);
    const { disabled, disabled2, task_item } = this.state;
    // const [listTask, setListTask] = useState('task_data');

    const externalNodeType = "yourNodeType";
    const { shouldCopyOnOutsideDrop } = this.state;

    
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        this.setState({ expanded: isExpanded ? panel : false });
      };

    
    return (
      <div className="user-container">
        <div className="user-content">
          <div className="user-item">
            <div className="item-title">
              <h5>(B) T&N Lorem orem Ipsum </h5>
              <span className="item-title-number">10</span>
            </div>

            <div className="user-info-drap">
              {/* <UserDrag user_item={this.state.user_item}/> */}

              <Draggable disabled={disabled} bounds="parent">
                <div className={!disabled ? "draggable" : null}>
                  <div className="user-toggle">
                    <div className="user-toggle-content">
                      <AnimateHeight
                        id="example-panel"
                        duration={500}
                        height={this.state.height} // see props documentation below
                      >
                        <div className="user-toggle-main">
                          <div className="user-add-content">
                            <div className="user-list-add">
                              {this.state.user_item.map((user_value, i) => {
                                return (
                                  <div className="user-list-card">
                                    <div className="user-type">
                                      <span>
                                        {user_value.type}: {user_value.name}
                                      </span>
                                    </div>
                                    <div className="user-email">
                                      <span>{user_value.email}</span>
                                    </div>
                                    <div className="user-phone"> 
                                      <span>{user_value.phone}</span>
                                    </div>
                                    <div className="user-role">
                                      <span>Role </span>
                                      <select disabled>
                                        <option value={user_value.role_key}>
                                          {user_value.role}
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            <UserAddNew dataUser={this.state.user_item} handleAddNewUser={this.handleAddNewUser} />

                            {/* <div className="user-list-card-new" 
                              onClick={() =>
                              this.setState({
                                addUser: console.log('user new'),
                              })
                            }>
                                <span className="user-list-new">+ Person</span>
                            </div> */}
                          </div>
                          
                        </div>
                      </AnimateHeight>
                      <div className="user-toggle-button">
                        <button
                          className="btn btn-primary mb-5"
                          onClick={this.toggleDraggable}
                        >
                          {disabled ? "Enable" : "Disable"} Drag
                        </button>
                        <button
                          className="btn btn-primary mb-5"
                          aria-expanded={this.state.height !== 0}
                          aria-controls="example-panel"
                          onClick={() =>
                            this.setState({
                              height: this.state.height === 0 ? "auto" : 0,
                            })
                          }
                        >
                          {this.state.height === 0 ? "Open" : "Close"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Draggable>
            </div>

            <div className="item-content">
              <div className="item-tab-content">
                <div className="user-container ">
                  <div className="item-card-table">
                    <Box sx={{ width: "100%" }}>
                      <TabContext value={this.state.value}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <TabList
                            onChange={(
                              event: React.SyntheticEvent,
                              newValue: String
                            ) => this.setState({ value: newValue })}
                            // variant="scrollable"
                            // scrollButtons="auto"
                            // aria-label="scrollable auto tabs example"
                          >
                            <Tab label="Full Task" value="0" />
                            {this.state.task_item.map((task_card, i) => {
                              return (
                                <Tab
                                  label={task_card.name}
                                  value={task_card.id}
                                />
                              );
                            })}
                          </TabList>
                        </Box>
                        <TabPanel value="0">
                          <div className="item-list">
                            {this.state.task_item.map((task_card, i) => {
                              return (
                                <div className="item-card">
                                  <div className="item-card-header">
                                    <span className="item-card-title">
                                      {task_card.name}
                                    </span>
                                    <div className="item-card-content">
                                      {/* <span className='item-task'>{task_card.name}</span> */}
                                      {task_card.task_data.map(
                                        (task_item1, index) => {
                                          return (
                                            <div className="user-effects">
                                              <ul>
                                                <li
                                                  className={
                                                    task_item1.className2
                                                  }
                                                  style={{ "--i": 1 }}
                                                >
                                                  <MdAccountCircle />
                                                </li>
                                                <li
                                                  className={
                                                    task_item1.className3
                                                  }
                                                  style={{ "--i": 2 }}
                                                >
                                                  <MdCalendarMonth />
                                                </li>
                                                <li
                                                  className={
                                                    task_item1.className4
                                                  }
                                                  style={{ "--i": 3 }}
                                                >
                                                  <MdAndroid />
                                                </li>
                                                <li
                                                  className={
                                                    task_item1.className
                                                  }
                                                  style={{ "--i": 4 }}
                                                >
                                                  {/* <MdSettings /> */}
                                                </li>
                                              </ul>
                                            </div>

                                            // <div className='item-task' >
                                            //   <span className={task_item1.name}></span>
                                            // </div>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                  <div className="item-card-table">
                                    {/* <Tab label={task_card.name} value={task_card.id} /> */}
                                    <h3 className="table-title">
                                      {task_card.name}
                                    </h3>
                                    {/* <ListTask task_card={task_card} data_state={this.state}/> */}
                                    <div className="table-content">
                                      <ul className="table-list">
                                        <div>
                                          <div style={{ height: 500 }}>
                                            {task_card.id == 1 && (
                                              <SortableTree
                                                treeData={this.state.task_data1}
                                                onChange={(task_data1) =>
                                                  this.setState({ task_data1 })
                                                }
                                                dndType={externalNodeType}
                                                // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                                generateNodeProps={({
                                                  node,
                                                  path,
                                                }) => {
                                                  return {
                                                    className: `${node.className}`,
                                                  };
                                                }}
                                              />
                                            )}
                                            {task_card.id == 2 && (
                                              <SortableTree
                                                treeData={this.state.task_data2}
                                                onChange={(task_data2) =>
                                                  this.setState({ task_data2 })
                                                }
                                                dndType={externalNodeType}
                                                // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                                generateNodeProps={({
                                                  node,
                                                  path,
                                                }) => {
                                                  return {
                                                    className: `${node.className}`,
                                                  };
                                                }}
                                              />
                                            )}
                                            {task_card.id == 3 && (
                                              <SortableTree
                                                treeData={this.state.task_data3}
                                                onChange={(task_data3) =>
                                                  this.setState({ task_data3 })
                                                }
                                                dndType={externalNodeType}
                                                // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                                generateNodeProps={({
                                                  node,
                                                  path,
                                                }) => {
                                                  return {
                                                    className: `${node.className}`,
                                                  };
                                                }}
                                              />
                                            )}
                                            {task_card.id == 4 && (
                                              <SortableTree
                                                treeData={this.state.task_data4}
                                                onChange={(task_data4) =>
                                                  this.setState({ task_data4 })
                                                }
                                                dndType={externalNodeType}
                                                // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                                generateNodeProps={({
                                                  node,
                                                  path,
                                                }) => {
                                                  return {
                                                    className: `${node.className}`,
                                                  };
                                                }}
                                              />
                                            )}
                                            {task_card.id == 5 && (
                                              <SortableTree
                                                treeData={this.state.task_data5}
                                                onChange={(task_data5) =>
                                                  this.setState({ task_data5 })
                                                }
                                                dndType={externalNodeType}
                                                // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                                generateNodeProps={({
                                                  node,
                                                  path,
                                                }) => {
                                                  return {
                                                    className: `${node.className}`,
                                                  };
                                                }}
                                              />
                                            )}
                                            {
                                              task_card.id == 6 && (
                                                <SortableTree
                                                  treeData={
                                                    this.state.task_data6
                                                  }
                                                  onChange={(task_data6) =>
                                                    this.setState({
                                                      task_data6,
                                                    })
                                                  }
                                                  dndType={externalNodeType}
                                                  // shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
                                                  generateNodeProps={({
                                                    node,
                                                    path,
                                                  }) => {
                                                    return {
                                                      className: `${node.className}`,
                                                    };
                                                  }}
                                                />
                                              )
                                              // <Tree data={this.state.task_data6} />
                                            }
                                          </div>
                                        </div>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </TabPanel>
                        {this.state.task_item.map((task_card, i) => {
                          return (
                            <TabPanel value={task_card.id}>
                              <div className="item-card-header">
                                <span className="item-card-title">
                                  {task_card.name}
                                </span>
                                <div className="item-card-content">
                                  {/* <span className='item-task'>{task_card.name}</span> */}
                                  {task_card.task_data.map(
                                    (task_item1, index) => {
                                      return (
                                        <div className="user-effects">
                                          <ul>
                                            <li
                                              className={task_item1.className2}
                                              style={{ "--i": 1 }}
                                            >
                                              <MdAccountCircle />
                                            </li>
                                            <li
                                              className={task_item1.className3}
                                              style={{ "--i": 2 }}
                                            >
                                              <MdCalendarMonth />
                                            </li>
                                            <li
                                              className={task_item1.className4}
                                              style={{ "--i": 3 }}
                                            >
                                              <MdAndroid />
                                            </li>
                                            <li
                                              className={task_item1.className}
                                              style={{ "--i": 4 }}
                                            >
                                              {/* <MdSettings /> */}
                                            </li>
                                          </ul>
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                              <div className="table-content">
                                <ul className="table-list">
                                  <div className={task_card.className}>
                                    <div style={{ height: 500 }}>
                                      {task_card.id == 1 && (
                                        <Tree data={this.state.task_data1} task_key={'task_data1'} handleAddNewTask={this.handleAddNewTask} />
                                      )}
                                      {task_card.id == 2 && (
                                        <Tree data={this.state.task_data2} task_key={'task_data2'} handleAddNewTask={this.handleAddNewTask} />
                                      )}
                                      {task_card.id == 3 && (
                                        <Tree data={this.state.task_data3} task_key={'task_data3'} handleAddNewTask={this.handleAddNewTask} />
                                      )}
                                      {task_card.id == 4 && (
                                        <Tree data={this.state.task_data4} task_key={'task_data4'} handleAddNewTask={this.handleAddNewTask} />
                                      )}
                                      {task_card.id == 5 && (
                                        <Tree data={this.state.task_data5} task_key={'task_data5'} handleAddNewTask={this.handleAddNewTask} />
                                      )}
                                      {task_card.id == 6 && (
                                        <Tree data={this.state.task_data6} task_key={'task_data6'} handleAddNewTask={this.handleAddNewTask} />
                                      )}
                                    </div>
                                  </div>
                                </ul>
                              </div>
                            </TabPanel>
                          );
                        })}
                      </TabContext>
                    </Box>

                    
                  </div>
                </div>
              </div>
            </div>
            <div className="documents-info-drap">
              <Draggable disabled={disabled2} bounds="parent">
                <div className={!disabled2 ? "draggable" : null}>
                  <div className="documents-toggle">
                    <div className="documents-toggle-content">
                      <div className="documents-toggle-button">
                        <button
                          className="btn btn-primary mb-5"
                          onClick={this.toggleDraggable2}
                        >
                          {disabled2 ? "Enable" : "Disable"} Drag
                        </button>
                        <button
                          className="btn btn-primary mb-5"
                          aria-expanded={this.state.height2 !== 0}
                          aria-controls="example-panel"
                          onClick={() =>
                            this.setState({
                              height2: this.state.height2 === 0 ? "auto" : 0,
                            })
                          }
                        >
                          {this.state.height2 === 0 ? "Open" : "Close"}
                        </button>
                      </div>
                      <div className="documents-toggle-data-main">
                        <AnimateHeight
                          id="documents-panel"
                          duration={500}
                          height={this.state.height2} // see props documentation below
                        >
                          <div className="documents-toggle-main">
                            <div className="documents-list-left">
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

                            <div className="documents-list-right">
                              <div className="documents-row-title">
                                <span className="documents-row-name">B1</span>
                                <span className="documents-row-name">B2</span>
                                <span className="documents-row-name">LA</span>
                                <span className="documents-row-name">F1</span>
                                <span className="documents-row-name">F2</span>
                                <span className="documents-row-name">TI</span>
                                <span className="documents-row-name">KW</span>
                                <span className="documents-row-name">TG</span>
                              </div>
                              <div className="documents-row-content">
                                <span className="documents-row-data green"></span>
                                <span className="documents-row-data green"></span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                              </div>
                              <div className="documents-row-content">
                                <span className="documents-row-data green">
                                  S
                                </span>
                                <span className="documents-row-data green"></span>
                                <span className="documents-row-data">S</span>
                                <span className="documents-row-data">S</span>
                                <span className="documents-row-data">S</span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                              </div>
                              <div className="documents-row-content">
                                <span className="documents-row-data green"></span>
                                <span className="documents-row-data green"></span>
                                <span className="documents-row-data">S</span>
                                <span className="documents-row-data">S</span>
                                <span className="documents-row-data">S</span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                              </div>
                              <div className="documents-row-content">
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data">S</span>
                                <span className="documents-row-data">S</span>
                                <span className="documents-row-data">S</span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
                                <span className="documents-row-data"></span>
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
  };
}
