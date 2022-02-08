import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, Navigate, useNavigate,Redirect } from 'react-router-dom';
import Main from '../../LandingPage/Main'
import { AppRegistrationRounded, Login } from '@mui/icons-material';


const theme = createTheme();

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [emailHave, setemailHave] = useState(false)
  const [islogin, setislogin] = useState(false)
  const [isloginname, setisloginName] = useState(false)
  const [isloginlastName, setisloginLastName] = useState(false)
  const [isloginpassword, setisloginPassword] = useState(false)
  const [login,setlogin]=useState(false)


  const handleClick = (e) => {
    e.preventDefault()
    if (islogin) {
      let obj =
      {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password
      }
      setUsers((prev) => [...prev, obj])
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setisloginName(false)
      setisloginLastName(false)
      setisloginPassword(false)    
      setlogin(true)  
    }
    else {
      if (firstName === "") {
        setisloginName(true)
      }
      if (lastName === "") {
        setisloginLastName(true)
      }
      if (password === "") {
        setisloginPassword(true)
      }
      setlogin(false)
    }
  };
 

  useEffect(() => {
    let userList = JSON.parse(localStorage.getItem('users'))
    if (userList) {
      let ishaveEmails = true
      userList.forEach((item) => {
        if (item.email === email) {
          console.log(item.firstname)
          ishaveEmails *= false
        }
        else {
          ishaveEmails *= true;
        }
      })
      setemailHave(!ishaveEmails)
    }

    if (lastName !== "" && firstName !== "" && password !== "" && email !== "") {
      setislogin(true)
    }
    else {
      setislogin(false)
    }
    if (firstName !== "") {
      setisloginName(false)
    }
    if (lastName !== '') {
      setisloginLastName(false)
    }
    if (password !== "") {
      setisloginPassword(false)
    }
  }, [firstName, lastName, email, password])


  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return (
    <>  {login ? navigate('/signin') :  
    <ThemeProvider theme={theme}>
          <Container maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  error={isloginname}
                  className="w-50 p-1"
                  value={firstName}
                  id="firstName"
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  helperText={isloginname ? "Please fill the gap" : ''}
                />
                <TextField
                  className='w-50  p-1'
                  margin="normal"
                  value={lastName}
                  label="Last Name"
                  error={isloginlastName}
                  onChange={(e) => setLastName(e.target.value)}
                  helperText={isloginlastName ? "Please fill the gap" : ''}
                />
                <TextField
                  margin="normal"
                  className='p-1'
                  fullWidth
                  error={emailHave}
                  helperText={emailHave ? 'this username already have' : ''}
                  value={email}
                  id="email"
                  label="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  className='p-1'
                  value={password}
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  error={isloginpassword}
                  helperText={isloginpassword ? "Please fill the gap" : ''}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <button
                  onClick={handleClick}
                  type='button'
                  className='text-light btn btn-primary w-100 text-light'
                >
                  <span>Register</span>
                </button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
    }      
    </>
  );
}