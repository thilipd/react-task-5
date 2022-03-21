
import './App.css';
import React from 'react';



import {
  TextField,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardActions,
  CardContent,
} from '@mui/material';


import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

function App() {

  return (
    <>
      <div style={{ padding: '2px', margin: '1px', display: 'flex', justifyContent: 'center', flexDirection: "column", width: "50%" }}>

        <BrowserRouter>
          <Link to='/'>Home</Link>

          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/Home' element={<NavBar />} >
              <Route path='log_In' element={<LogIn />} />
            </Route>

            <Route path='/main_section' element={<MainSection />} >
              <Route path='contact_us' element={<ContactUs />} />
            </Route>

            <Route path='/login_section' element={<LogInSection />} >
              <Route path='admin_Login' element={<AdminLogIn />} />
              <Route path='student_Login' element={<StudentLogIn />} />
            </Route>

          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}


export default App;

function Home() {

  return (
    <>
      <NavBar />
      <MainSection />
      <LogInSection />
    </>
  )
}

function NavBar() {

  const navigate = useNavigate();

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Guvi
            </Typography>
            <Button
              onClick={() => navigate('/Home/log_In')}
              color="inherit"
            >Login</Button>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Box >



    </>
  )
}


function MainSection() {

  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ width: 1 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            XYZ Organization,
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            India
          </Typography>
          <Typography variant="body2">
            Learning is the key to success
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => navigate('/main_section/contact_us')}
            size="small">CONTACT US</Button>
        </CardActions>

      </Card>
      <Outlet />
    </>
  )

}

function LogInSection() {

  const navigate = useNavigate();

  return (

    <>
      <Box>

        <Button
          onClick={() => navigate('/login_section/admin_Login')}
          variant="contained">Admin Login</Button>

        <Button
          onClick={() => navigate('/login_section/student_Login')}
          variant="contained">Student Login</Button>
        <Outlet />
      </Box>

    </>
  )
}



function LogIn() {



  return (
    <>
      <h3>General LogIn</h3>
      <Box>
        <TextField type="text" label="Name" variant="outlined" />
        <TextField type="password" label="Password" variant="outlined" />
        <Button>LogIn</Button>
      </Box>
    </>
  )
}

function StudentLogIn() {

  return (
    <>
      <h3>Student LogIn</h3>
      <Box>
        <TextField type="text" label="Student Name" variant="outlined" />
        <TextField type="password" label="Password" variant="outlined" />
        <Button>LogIn</Button>
      </Box>
    </>
  )
}

function AdminLogIn() {

  return (
    <>
      <h3>Admin LogIn</h3>
      <Box>
        <TextField type="text" label="Student Name" variant="outlined" />
        <TextField type="password" label="Password" variant="outlined" />
        <Button>LogIn</Button>
      </Box>
    </>
  )
}


function ContactUs() {

  return (
    <>
      <h3>Contact Us</h3>
      <Box>
        <h1>XYZ Organization,</h1>
        <address>000, xyz street, aaa city, bbb state</address>
      </Box>
    </>
  )
}
