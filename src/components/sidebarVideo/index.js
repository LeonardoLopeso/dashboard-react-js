import React, { useState, useContext } from 'react';
import { FaPhoneAlt, FaPhoneSlash } from 'react-icons/fa';
// import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../../Context';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   gridContainer: {
//     width: '100%',
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column',
//     },
//   },
//   container: {
//     width: '600px',
//     margin: '35px 0',
//     padding: 0,
//     [theme.breakpoints.down('xs')]: {
//       width: '80%',
//     },
//   },
//   margin: {
//     marginTop: 20,
//   },
//   padding: {
//     padding: 20,
//   },
//   paper: {
//     padding: '10px 20px',
//     border: '2px solid black',
//   },
// }));

const SidebarVideo = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  // const classes = useStyles();

  return (
    <div>
      <div elevation={10}>
        <form noValidate autoComplete="off">
          <div container>
            <div item xs={12} md={6}>
              <h4 gutterBottom variant="h6">Account Info</h4>
              <p label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <div text={me}>
                <div variant="contained" color="primary" fullWidth>
                  Copy Your ID
                </div>
              </div>
            </div>
            <div>
              <h4 gutterBottom variant="h6">Make a call</h4>
              <pako label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <button variant="contained" color="secondary" startIcon={<FaPhoneSlash fontSize="large" />} fullWidth onClick={leaveCall}>
                  Hang Up
                </button>
              ) : (
                <button variant="contained" color="primary" startIcon={<FaPhoneAlt fontSize="large" />} fullWidth onClick={() => callUser(idToCall)}>
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default SidebarVideo;
