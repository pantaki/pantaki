import { React, useState } from "react";
import SortableTree from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css";
import "../User/User.scss";

import Draggable from "react-draggable";
import AnimateHeight from "react-animate-height";
import Form from "react-bootstrap/Form";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tree from "../TreeTask/Tree";

import UserAddNew from "../User/UserAddNew";
import TaskBoxTop from "../User/TaskBoxTop";
import TaskDocument from "../Admin/TaskDocument";

const TaskTree = (props) => {
  const task_item = [
    {
      id: 1,
      name: "Consultation",
      task_data: [
        {
          id: 1,
          name: "task_done",
          text: "offer / em 1",
          title: "offer / em 1",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 2,
          name: "task_done",
          text: "offer / em 2",
          title: "offer / em 2",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 3,
          name: "task_done",
          text: "offer / em 3",
          title: "offer / em 3",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 4,
          name: "task_done",
          text: "offer / em 4",
          title: "offer / em 4",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 5,
          name: "task_done",
          text: "offer / em 5",
          title: "offer / em 5",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 6,
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
      id: 2,
      name: "inspection",
      task_data: [
        {
          id: 1,
          name: "task_waiting",
          text: "inspection 1",
          title: "inspection 1",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        },
        {
          id: 2,
          name: "task_done",
          text: "inspection 2",
          title: "inspection 2",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 3,
          name: "task_done",
          text: "inspection 3",
          title: "inspection 3",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 4,
          name: "task_done",
          text: "inspection 4",
          title: "inspection 4",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 5,
          name: "task_done",
          text: "inspection 5",
          title: "inspection 5",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 6,
          name: "task_done",
          text: "inspection 6",
          title: "inspection 6",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 7,
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
      id: 3,
      name: "Offer",
      task_data: [
        {
          id: 1,
          name: "task_done",
          text: "Call agent before writing PA (see if other offers, motivation, etc.)",
          title:
            "Call agent before writing PA (see if other offers, motivation, etc.)",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 2,
          name: "task_done",
          text: "Write offer and all necessary docs [DOCUSIGN]",
          title: "Write offer and all necessary docs [DOCUSIGN]",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 3,
          name: "task_done",
          text: "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
          title:
            "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 4,
          name: "task_note",
          text: "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
          title:
            "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 5,
          name: "task_note",
          text: "Call, text or email to confirm LA (listing agent) received offer and docs",
          title:
            "Call, text or email to confirm LA (listing agent) received offer and docs",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 6,
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
      id: 4,
      name: "title work",
      task_data: [
        {
          id: 1,
          name: "task_done",
          text: "title work 1",
          title: "title work 1",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 2,
          name: "task_done",
          text: "title work 2",
          title: "title work 2",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 3,
          name: "task_done",
          text: "title work 3",
          title: "title work 3",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 4,
          name: "task_done",
          text: "title work 4",
          title: "title work 4",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 5,
          name: "task_note",
          text: "title work 5",
          title: "title work 5",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 6,
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
      id: 5,
      name: "Financing",
      task_data: [
        {
          id: 1,
          name: "task_done",
          text: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
          title: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 2,
          name: "task_done",
          text: "Confirm value and condition are accepted 10 days before closing",
          title:
            "Confirm value and condition are accepted 10 days before closing",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 3,
          name: "task_note",
          text: "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
          title:
            "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
          className: "task_note",
          className2: "task_done",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 4,
          name: "task_waiting",
          text: "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
          title:
            "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        },
        {
          id: 5,
          name: "task_waiting",
          text: "Receive clear to close from lender",
          title: "Receive clear to close from lender",
          className: "task_waiting",
          className2: "task_done",
          className3: "task_note",
          className4: "task_grey",
        },
        {
          id: 6,
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
      id: 6,
      name: "Closing",
      task_data: [
        {
          id: 1,
          name: "task_done",
          text: "Ask buyer if they can close in the afternoon (2 weeks before closing)",
          title:
            "Ask buyer if they can close in the afternoon (2 weeks before closing)",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 2,
          name: "task_done",
          text: "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
          title:
            "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 3,
          name: "task_done",
          text: "Schedule closing with title company [GMAIL]",
          title: "Schedule closing with title company [GMAIL]",
          className: "task_done",
          className2: "task_note",
          className3: "task_waiting",
          className4: "task_grey",
        },
        {
          id: 4,
          name: "task_done",
          text: "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
          title:
            "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
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
      status: "yes",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      phone: "313-313-3131",
      role: "Buyer 2",
      role_key: "buyer_2",
      type: "B2",
      status: "yes",
    },
    {
      id: 3,
      name: "Jim Schotts",
      email: "jimschotts@gmail.com",
      phone: "313-313-3133",
      role: "Inspector",
      role_key: "inspector",
      type: "B1",
      status: "no",
    },
    {
      id: 4,
      name: "Grand Lyons",
      email: "grandlyons@gmail.com",
      phone: "313-313-3134",
      role: "Leader",
      role_key: "leader",
      type: "F1",
      status: "no",
    },
    {
      id: 5,
      name: "Team Lyons",
      email: "teamlyons@gmail.com",
      phone: "313-313-3135",
      role: "Leader Team",
      role_key: "leader_team",
      type: "F2",
      status: "no",
    },
    {
      id: 6,
      name: "Team Lyons",
      email: "teamlyons@gmail.com",
      phone: "313-313-3135",
      role: "Leader Team",
      role_key: "leader_team",
      type: "F2",
      status: "yes",
    },
  ];
  const user_checked = [1, 2, 6];
  const task_data1 = [
    {
      id: 1,
      name: "task_done",
      text: "offer / em 1",
      title: "offer / em 1",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 2,
      name: "task_done",
      text: "offer / em 2",
      title: "offer / em 2",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 3,
      name: "task_done",
      text: "offer / em 3",
      title: "offer / em 3",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 4,
      name: "task_done",
      text: "offer / em 4",
      title: "offer / em 4",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 5,
      name: "task_done",
      text: "offer / em 5",
      title: "offer / em 5",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 6,
      name: "task_waiting",
      text: "offer / em 6",
      title: "offer / em 6",
      className: "task_waiting",
      className2: "task_done",
      className3: "task_note",
      className4: "task_grey",
    },
  ];

  const task_data2 = [
    {
      id: 1,
      name: "task_waiting",
      text: "inspection 1",
      title: "inspection 1",
      className: "task_waiting",
      className2: "task_done",
      className3: "task_note",
      className4: "task_grey",
    },
    {
      id: 2,
      name: "task_done",
      text: "inspection 2",
      title: "inspection 2",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 3,
      name: "task_done",
      text: "inspection 3",
      title: "inspection 3",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 4,
      name: "task_done",
      text: "inspection 4",
      title: "inspection 4",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 5,
      name: "task_done",
      text: "inspection 5",
      title: "inspection 5",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 6,
      name: "task_done",
      text: "inspection 6",
      title: "inspection 6",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 7,
      name: "task_done",
      text: "inspection 7",
      title: "inspection 7",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
  ];
  const task_data3 = [
    {
      id: 1,
      name: "task_done",
      text: "Call agent before writing PA (see if other offers, motivation, etc.)",
      title:
        "Call agent before writing PA (see if other offers, motivation, etc.)",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 2,
      name: "task_done",
      text: "Write offer and all necessary docs [DOCUSIGN]",
      title: "Write offer and all necessary docs [DOCUSIGN]",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 3,
      name: "task_done",
      text: "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
      title:
        "Send buyer all docs for signatures (PA, BLC sheet, Tax sheet, Disclosures) [DOCUSIGN]",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 4,
      name: "task_note",
      text: "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
      title:
        "Share signed docs AND financing docs with listing agent [DOCUSIGN]",
      className: "task_note",
      className2: "task_done",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 5,
      name: "task_note",
      text: "Call, text or email to confirm LA (listing agent) received offer and docs",
      title:
        "Call, text or email to confirm LA (listing agent) received offer and docs",
      className: "task_note",
      className2: "task_done",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 6,
      name: "task_note",
      text: "Counter offer (if applicable) until acceptance [DOCUSIGN]",
      title: "Counter offer (if applicable) until acceptance [DOCUSIGN]",
      className: "task_note",
      className2: "task_done",
      className3: "task_waiting",
      className4: "task_grey",
    },
  ];
  const task_data4 = [
    {
      id: 1,
      name: "task_done",
      text: "title work 1",
      title: "title work 1",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 2,
      name: "task_done",
      text: "title work 2",
      title: "title work 2",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 3,
      name: "task_done",
      text: "title work 3",
      title: "title work 3",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 4,
      name: "task_done",
      text: "title work 4",
      title: "title work 4",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 5,
      name: "task_note",
      text: "title work 5",
      title: "title work 5",
      className: "task_note",
      className2: "task_done",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 6,
      name: "task_waiting",
      text: "title work 6",
      title: "title work 6",
      className: "task_waiting",
      className2: "task_done",
      className3: "task_note",
      className4: "task_grey",
    },
  ];
  const task_data5 = [
    {
      id: 1,
      name: "task_done",
      text: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
      title: "Appraisal Day mm/dd/yyyy at hh:mm am/pm [GOOGLE CAL]",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 2,
      name: "task_done",
      text: "Confirm value and condition are accepted 10 days before closing",
      title: "Confirm value and condition are accepted 10 days before closing",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 3,
      name: "task_note",
      text: "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
      title:
        "Notify buyers if appraisal is good or not (lender does it to, but we just do it to follow up with buyers)",
      className: "task_note",
      className2: "task_done",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 4,
      name: "task_waiting",
      text: "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
      title:
        "Confirm buyer signs CD (closing disclosure) 3 days before closing TRID requirement [GCAL]",
      className: "task_waiting",
      className2: "task_done",
      className3: "task_note",
      className4: "task_grey",
    },
    {
      id: 5,
      name: "task_waiting",
      text: "Receive clear to close from lender",
      title: "Receive clear to close from lender",
      className: "task_waiting",
      className2: "task_done",
      className3: "task_note",
      className4: "task_grey",
    },
    {
      id: 6,
      name: "task_waiting",
      text: "Confirm lender sends over final docs to title company",
      title: "Confirm lender sends over final docs to title company",
      className: "task_waiting",
      className2: "task_done",
      className3: "task_note",
      className4: "task_grey",
    },
  ];
  const task_data6 = [
    {
      id: 1,
      name: "task_done",
      text: "Ask buyer if they can close in the afternoon (2 weeks before closing)",
      title:
        "Ask buyer if they can close in the afternoon (2 weeks before closing)",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 2,
      name: "task_done",
      text: "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
      title:
        "Ask LA if they can close in the afternoon after buyer is good (2 weeks before closing)",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 3,
      name: "task_done",
      text: "Schedule closing with title company [GMAIL]",
      title: "Schedule closing with title company [GMAIL]",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
    {
      id: 4,
      name: "task_done",
      text: "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
      title:
        "Receive closing confirmation from title company and add to DocuSign [GMAIL] [DOCUSIGN]",
      className: "task_done",
      className2: "task_note",
      className3: "task_waiting",
      className4: "task_grey",
    },
  ];

  const document_share = [
    {
      title: "KW OFFICE POLICY",
      b1: ["documents-row-data green", ""],
      b2: ["documents-row-data green", ""],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", ""],
      f2: ["documents-row-data", ""],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "bba",
      b1: ["documents-row-data green", ""],
      b2: ["documents-row-data green", ""],
      la: ["documents-row-data", "s"],
      f1: ["documents-row-data", "s"],
      f2: ["documents-row-data", "s"],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "pa",
      b1: ["documents-row-data green", ""],
      b2: ["documents-row-data green", ""],
      la: ["documents-row-data", "s"],
      f1: ["documents-row-data", "s"],
      f2: ["documents-row-data", "s"],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "em receipt",
      b1: ["documents-row-data", ""],
      b2: ["documents-row-data", ""],
      la: ["documents-row-data", "s"],
      f1: ["documents-row-data", "s"],
      f2: ["documents-row-data", "s"],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "sd",
      b1: ["documents-row-data green", ""],
      b2: ["documents-row-data green", ""],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", "s"],
      f2: ["documents-row-data", "s"],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "tax sheet",
      b1: ["documents-row-data green", ""],
      b2: ["documents-row-data green", ""],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", "s"],
      f2: ["documents-row-data", "s"],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "blc sheet",
      b1: ["documents-row-data green", ""],
      b2: ["documents-row-data green", ""],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", "s"],
      f2: ["documents-row-data", ""],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "pre-approval",
      b1: ["documents-row-data", ""],
      b2: ["documents-row-data", ""],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", "s"],
      f2: ["documents-row-data", ""],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "bir",
      b1: ["documents-row-data green", ""],
      b2: ["documents-row-data green", ""],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", ""],
      f2: ["documents-row-data", ""],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "sir",
      b1: ["documents-row-data yellow", ""],
      b2: ["documents-row-data yellow", ""],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", "s"],
      f2: ["documents-row-data", ""],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "amend#1",
      b1: ["documents-row-data green", "s"],
      b2: ["documents-row-data green", "s"],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", ""],
      f2: ["documents-row-data", ""],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "title commit",
      b1: ["documents-row-data", "s"],
      b2: ["documents-row-data", "s"],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", ""],
      f2: ["documents-row-data", ""],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "altass",
      b1: ["documents-row-data", "s"],
      b2: ["documents-row-data", "s"],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", ""],
      f2: ["documents-row-data", ""],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
    {
      title: "closing confirm",
      b1: ["documents-row-data", ""],
      b2: ["documents-row-data", ""],
      la: ["documents-row-data", ""],
      f1: ["documents-row-data", ""],
      f2: ["documents-row-data", ""],
      ti: ["documents-row-data", ""],
      kw: ["documents-row-data", ""],
      tg: ["documents-row-data", ""],
    },
  ];

  const [disabled, setDisabled] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [userItem, setUserItem] = useState(user_item);
  const [taskItem, setTaskItem] = useState(task_item);
  const [userChecked, setUserChecked] = useState(user_checked);
  const [height, setHeight] = useState(0);
  const [height2, setHeight2] = useState(0);
  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState("panel1");
  const [addUser, setAddUser] = useState("");
  const [taskData, setTaskData] = useState(task_item);
  const [documentShare, setDocumentShare] = useState(document_share);
  const [taskDataTree1, setTaskDataTree1] = useState(task_data1);
  const [taskDataTree2, setTaskDataTree2] = useState(task_data2);
  const [taskDataTree3, setTaskDataTree3] = useState(task_data3);
  const [taskDataTree4, setTaskDataTree4] = useState(task_data4);
  const [taskDataTree5, setTaskDataTree5] = useState(task_data5);
  const [taskDataTree6, setTaskDataTree6] = useState(task_data6);

  const externalNodeType = "yourNodeType";

  const toggleDraggable = () => setDisabled((prevState) => !prevState.disabled);
  const toggleDraggable2 = () =>
    setDisabled2((prevState) => !prevState.disabled2);

  let handleAddNewUser = (dataUser, newChecked) => {
    setUserItem(dataUser);
    setUserChecked(newChecked);
  };

  
  let handleAddNewTask = (data, data_key) => {
    if (data_key == "task_data1") {
      setTaskDataTree1(data);
      setTaskData((prevState) => {
        let task_data = Object.assign({}, prevState.task_item);
        task_data[0].task_data = data;
        return { task_data };
      });
    }
    if (data_key == "task_data2") {
      setTaskDataTree2(data);
      setTaskData((prevState) => {
        let task_data = Object.assign({}, prevState.task_item);
        task_data[0].task_data = data;
        return { task_data };
      });
    }
    if (data_key == "task_data3") {
      setTaskDataTree3(data);
      setTaskData((prevState) => {
        let task_data = Object.assign({}, prevState.task_item);
        task_data[0].task_data = data;
        return { task_data };
      });
    }
    if (data_key == "task_data4") {
      setTaskDataTree4(data);
      setTaskData((prevState) => {
        let task_data = Object.assign({}, prevState.task_item);
        task_data[0].task_data = data;
        return { task_data };
      });
    }
    if (data_key == "task_data5") {
      setTaskDataTree5(data);
      setTaskData((prevState) => {
        let task_data = Object.assign({}, prevState.task_item);
        task_data[0].task_data = data;
        return { task_data };
      });
    }
    if (data_key == "task_data6") {
      setTaskDataTree6(data);
      setTaskData((prevState) => {
        let task_data = Object.assign({}, prevState.task_item);
        task_data[0].task_data = data;
        return { task_data };
      });
    }
  };

  let handleDocument = (dataUser, newChecked) => {
    // setUserItem(dataUser);
    // setUserChecked(newChecked);
  };

  return (
    <div>
      <div className="user-item">
        
        {/* <div className="user-info-drap">
          <Draggable disabled={disabled} bounds="parent">
            <div className={!disabled ? "draggable" : null}>
              <div className="user-toggle">
                <div className="user-toggle-content">
                  <AnimateHeight
                    id="example-panel"
                    duration={500}
                    height={height}
                  >
                    <div className="user-toggle-main">
                      <div className="user-add-content">
                        <div className="user-list-add">
                          {userItem.map((user_value, i) => {
                            return (
                              user_value.status === "yes" && (
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
                              )
                            );
                          })}
                        </div>

                        <UserAddNew
                          dataUser={userItem}
                          dataUserChecked={userChecked}
                          handleAddNewUser={handleAddNewUser}
                        />
                      </div>
                    </div>
                  </AnimateHeight>
                  <div className="user-toggle-button">
                    <button
                      className="btn btn-primary mb-5"
                      onClick={toggleDraggable}
                    >
                      {disabled ? "Enable" : "Disable"} Drag
                    </button>
                    <button
                      className="btn btn-primary mb-5"
                      aria-expanded={height !== 0}
                      aria-controls="example-panel"
                      onClick={() => setHeight(height === 0 ? "auto" : 0)}
                    >
                      {height === 0 ? "Open" : "Close"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Draggable>
        </div> */}

        <div className="item-content">
          <div className="item-tab-content">
            <div className="user-container ">
              <div className="item-card-table">
                <Box sx={{ width: "100%" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={(
                          event: React.SyntheticEvent,
                          newValue: String
                        ) => setValue(newValue)}
                        // variant="scrollable"
                        // scrollButtons="auto"
                        // aria-label="scrollable auto tabs example"
                      >
                        <Tab label="Full Task" value="0" />
                        {taskItem.map((task_card, i) => {
                          return (
                            <Tab label={task_card.name} value={task_card.id} />
                          );
                        })}
                      </TabList>
                    </Box>
                    <TabPanel value="0">
                      <div className="item-list">
                        {taskItem.map((task_card, i) => {
                          return (
                            <div className="item-card">
                              <div className="item-card-header">
                                <span className="item-card-title">
                                  {task_card.name}
                                </span>
                                <div className="item-card-content">
                                  {/* <span className='item-task'>{task_card.name}</span> */}
                                  {task_card.task_data.map((task_item1, index) => {
                                      console.log(
                                        "item-card-content admin full",
                                        task_item1
                                      );

                                      return (
                                        <TaskBoxTop task_data={task_item1} />
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

                                <div className="table-content">
                                  <ul className="table-list">
                                    <div>
                                      <div style={{ height: 500 }}>
                                        {task_card.id == 1 && (
                                          <SortableTree
                                            treeData={taskDataTree1}
                                            onChange={(taskDataTree1) =>
                                              setTaskDataTree1({
                                                taskDataTree1,
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
                                        )}
                                        {task_card.id == 2 && (
                                          <SortableTree
                                            treeData={taskDataTree2}
                                            onChange={(taskDataTree2) =>
                                              setTaskDataTree2({
                                                taskDataTree2,
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
                                        )}
                                        {task_card.id == 3 && (
                                          <SortableTree
                                            treeData={taskDataTree3}
                                            onChange={(taskDataTree3) =>
                                              setTaskDataTree3({
                                                taskDataTree3,
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
                                        )}
                                        {task_card.id == 4 && (
                                          <SortableTree
                                            treeData={taskDataTree4}
                                            onChange={(taskDataTree4) =>
                                              setTaskDataTree4({
                                                taskDataTree4,
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
                                        )}
                                        {task_card.id == 5 && (
                                          <SortableTree
                                            treeData={taskDataTree5}
                                            onChange={(taskDataTree5) =>
                                              setTaskDataTree5({
                                                taskDataTree5,
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
                                        )}
                                        {
                                          task_card.id == 6 && (
                                            <SortableTree
                                              treeData={taskDataTree6}
                                              onChange={(taskDataTree6) =>
                                                setTaskDataTree6({
                                                  taskDataTree6,
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
                                          // <Tree data={taskDataTree6} />
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
                    {taskItem.map((task_card, i) => {
                      return (
                        <TabPanel value={task_card.id}>
                          <div className="item-card-header">
                            <span className="item-card-title">
                              {task_card.name}
                            </span>
                            <div className="item-card-content">
                              {/* <span className='item-task'>{task_card.name}</span> */}
                              {task_card.task_data.map((task_item1, index) => {
                                return <TaskBoxTop task_data={task_item1} />;
                              })}
                            </div>
                          </div>
                          <div className="table-content">
                            <ul className="table-list">
                              <div className={task_card.className}>
                                <div style={{ height: 500 }}>
                                  {task_card.id == 1 && (
                                    <Tree
                                      data={taskDataTree1}
                                      task_key={"task_data1"}
                                      handleAddNewTask={handleAddNewTask}
                                    />
                                  )}
                                  {task_card.id == 2 && (
                                    <Tree
                                      data={taskDataTree2}
                                      task_key={"task_data2"}
                                      handleAddNewTask={handleAddNewTask}
                                    />
                                  )}
                                  {task_card.id == 3 && (
                                    <Tree
                                      data={taskDataTree3}
                                      task_key={"task_data3"}
                                      handleAddNewTask={handleAddNewTask}
                                    />
                                  )}
                                  {task_card.id == 4 && (
                                    <Tree
                                      data={taskDataTree4}
                                      task_key={"task_data4"}
                                      handleAddNewTask={handleAddNewTask}
                                    />
                                  )}
                                  {task_card.id == 5 && (
                                    <Tree
                                      data={taskDataTree5}
                                      task_key={"task_data5"}
                                      handleAddNewTask={handleAddNewTask}
                                    />
                                  )}
                                  {task_card.id == 6 && (
                                    <Tree
                                      data={taskDataTree6}
                                      task_key={"task_data6"}
                                      handleAddNewTask={handleAddNewTask}
                                    />
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
        {/* <TaskDocument data={documentShare} handleDocument={handleDocument} /> */}
        
      </div>
    </div>
  );
};

export default TaskTree;
