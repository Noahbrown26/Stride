import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Nav, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../pages/register';
import LoginForm from '../pages/login';
import Auth from '../utils/auth';

export default function ButtonAppBar() {
const history = useHistory();

//usestate for login modal//
const [showModal, setShowModal] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="customnav">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              history.push("/");
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Stride
          </Typography>

          <Button color="inherit"
          onClick={() => {
            history.push("/Workouts");
          }}
          >Workouts
          </Button>
          {/* if logged in render logout button. else render login*/}
          {Auth.loggedIn() ? (
                <>
                  <Button color="inherit" onClick={Auth.logout}>Logout</Button>
                </>
              ) : (
                <Button color="inherit" onClick={() => setShowModal(true)}>Login/SignUp</Button>
              )}

        {/* Bootstrap boilerplate model with useState passed in */}
        <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'
        >
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton
          >
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link className="link-item" eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="link-item" eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    

        </Toolbar>
      </AppBar>
    </Box>
  );
}