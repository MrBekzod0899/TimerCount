import  React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom';


const theme = createTheme();

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const  [user,setUser]=useState({firstname:'',lastname:'',email1:'',password1:''}) ;
    const  [users,setUsers]=useState([]) ;
    
    const handleSubmit = () => {
        console.log(user)
    };
    useEffect(()=>{
        setUser({
            firstname:firstName,
            lastname:lastName,
            email1:email,
            password1:password
        })
        console.log(user)
    },[user])



  


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
                margin="normal"
                required
                className="w-50  p-1"
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                onChange={(e)=>setFirstName(e.target.value)}
              />
              <TextField
              className='w-50  p-1'
                margin="normal"
                required
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
                onChange={(e)=>setLastName(e.target.value)}
              />

            <TextField
              margin="normal"
              className='p-1'
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              className='p-1'         
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              to="/"
              className='text-light w-100 btn btn-primary mt-3 mb-2 p-2'
              underline="none"
              onClick={handleSubmit}
            >
             <span>
                Sign In
             </span>
            </Link>      
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}