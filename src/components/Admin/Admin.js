import React, { Component, useState } from "react";
import SortableTree from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css";
import "./Admin.scss";
import {
  MdSettings,
  MdAccountCircle,
  MdCalendarMonth,
  MdAndroid,
  MdFlutterDash,
} from "react-icons/md";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


import TaskTree from "./TaskTree";


const Admin = (props) => {
  
    const task_item = [
        {
          id: 1,
          task_title: "(B) T&N Lorem orem Ipsum",
          task_number: 1,
          task_email: 3,
          task_docs: 3,
          task_note: 2,
          span: 4,
          width: "250px",
          style: 'block',
          style_hide: 'none',
          task_data: [
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
                  title:
                    "Counter offer (if applicable) until acceptance [DOCUSIGN]",
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
          ],
        },
        {
          id: 2,
          task_title: "(B) T&N Lorem orem Ipsum 1",
          task_number: 2,
          task_email: 2,
          task_docs: 2,
          task_note: 5,
          span: 4,
          style: 'block',
          style_hide: 'none',
          width: "250px",
          task_data: [
            {
              id: 1,
              name: "Consultation 2",
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
                  title:
                    "Counter offer (if applicable) until acceptance [DOCUSIGN]",
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
          ],
        },
        {
          id: 3,
          task_title: "(B) T&N Lorem orem Ipsum 2",
          task_number: 3,
          task_email: 1,
          task_docs: 4,
          task_note: 2,
          span: 4,
          style: 'block',
          style_hide: 'none',
          width: "250px",
          task_data: [
            {
              id: 1,
              name: "Consultation 3",
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
                  title:
                    "Counter offer (if applicable) until acceptance [DOCUSIGN]",
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
          ],
        },
        {
          id: 4,
          task_title: "(B) T&N Lorem orem Ipsum 3",
          task_number: 4,
          task_email: 4,
          task_docs: 5,
          task_note: 5,
          span: 4,
          sstyle: 'block',
          style_hide: 'none',
          width: "250px",
          task_data: [
            {
              id: 1,
              name: "Consultation 4",
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
                  title:
                    "Counter offer (if applicable) until acceptance [DOCUSIGN]",
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
          ],
        },
        {
          id: 5,
          task_title: "(B) T&N Lorem orem Ipsum 4",
          task_number: 5,
          task_email: 6,
          task_docs: 6,
          task_note: 3,
          span: 4,
          style: 'block',
          style_hide: 'none',
          width: "250px",
          task_data: [
            {
              id: 1,
              name: "Consultation 5",
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
                  title:
                    "Counter offer (if applicable) until acceptance [DOCUSIGN]",
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
          ],
        },
      ];

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

    let handleUpdateTask = (data, data_key) =>  {
        // if (data_key == "task_data1") {
        //   this.setState({ task_data1: data });
        //   this.setState((prevState) => {
        //     let task_data = Object.assign({}, prevState.task_item);
        //     task_data[0].task_data = data;
        //     return { task_data };
        //   });
        // }
        
      };


  const [taskData, setTaskData] = useState(task_item);
  


  const updateState = (data, index) => (e) => {
    console.log("newArray1", data);
    const newArray = taskData.map((item, i) => {
      console.log("newArray2", item.id);
      if (data === item.id) {
        if (item.span === 4) {
          return { ...item, span: 12, width: "100%", style: "none", style_hide: "block" };
        } else {
          return { ...item, span: 4, style: "block", style_hide: "none" };
        }
      }
      return item;
    });

    setTaskData(newArray);
    
  };
  return (
    <div className="container container-lg">
      <div className="admin-page">
        <Box  style={{  transition: "0.5s" }} display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          {taskData.map((taskData_value, i) => {
            return (
              <Box
                style={{  transition: "0.5s" }}
                gridColumn={taskData_value.span === 4 ? "span 4" : "span 12"}
                
              >
                <Card sx={{ minWidth: 275 }}>
                  <CardContent  className="task-content-custom" style={{ padding: 0 }}>
                    <div className="task-header" onClick={updateState(taskData_value.id)} style={{ cursor: "pointer", transition: "0.5s" }}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        <div
                          className="task-title"
                          style={{ width: taskData_value.width }}
                        >
                          {taskData_value.task_title}
                        </div>
                      </Typography>
                      <Typography variant="h5" component="div">
                        <div className="task-title-number">
                          {taskData_value.task_number}
                        </div>
                      </Typography>
                    </div>
                    <div className="task-content" style={{ display: taskData_value.style, transition: "0.5s" }}>
                        <div className="task-content-header">
                            <Typography variant="body2">
                            <div className="task-email task-header-sub">
                                <span className="task-email-text">email</span>
                                <span className="task-email-number task-header-sub-number">
                                {taskData_value.task_email}
                                </span>
                            </div>
                            </Typography>
                            <Typography variant="body2">
                            <div className="task-docs task-header-sub">
                                <span className="task-docs-text">wf docs</span>
                                <span className="task-docs-number task-header-sub-number">
                                {taskData_value.task_docs}
                                </span>
                            </div>
                            </Typography>
                            <Typography variant="body2">
                            <div className="task-notes task-header-sub">
                                <span className="task-notes-text">notes</span>
                                <span className="task-notes-number task-header-sub-number">
                                {taskData_value.task_note}
                                </span>
                            </div>
                            </Typography>
                        </div>
                        <div className="task-content-group">
                        {taskData_value.task_data.map((taskData_value_sub, i) => {
                            return (
                            <div className="task-group-item">
                            <div className="task-item-title"> {taskData_value_sub.name} </div>
                            <div className="task-item-content">

                            {taskData_value_sub.task_data.map((taskData_value_color, i) => {
                                return (
                                    <div className={taskData_value_color.name} style={{ width: '15px', height: "15px" }}>
                                        <span></span>
                                    </div>
                                )
                            })}
                                
                            </div>
                        </div>
                            )
                        })}
                        </div>
                     
                    </div>
                    {/* task Container */}
                    <div className="task-content-full" style={{ display: taskData_value.style_hide, transition: "0.5s" }}>
                        
                        <TaskTree 
                        data={taskData_value}
                        handleUpdateTask={
                            handleUpdateTask
                          }
                         />
                    </div>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                </Card>
              </Box>
            );
          })}
        </Box>
      </div>
    </div>
  );
};
export default Admin;
