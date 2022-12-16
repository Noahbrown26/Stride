import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useHistory } from 'react-router-dom';


export default function ButtonAppBar() {
const history = useHistory();

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
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Stride
          </Typography>

          <Button color="inherit"
          onClick={() => {
            history.push("/Workouts");
          }}
          >Workouts
          </Button>

          <Button color="inherit"
          onClick={() => {
            history.push("/login");
          }}
          
          
          >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}