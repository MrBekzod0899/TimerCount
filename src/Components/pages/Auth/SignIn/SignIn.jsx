import  React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, NavLink,useNavigate } from 'react-router-dom';
import avatar from '../../../assets/avatar.png'

const theme = createTheme();

export default function SignIn() {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [login, setlogin] = useState(false);
  const [name,setname]=useState('')
  const [error, seterror] = useState(false);
  const navigate=useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault()
    let userList=JSON.parse(localStorage.getItem('users'))
    console.log(userList)
    if(userList){
      userList.forEach((item)=>{ 
        console.log(item)
             if(item.email===email && item.password===password ){
               setlogin(true)
               setname(item.firstname)
             }
      }) 
    }

    else{
      alert("Before you enter website,you should register!!!")
    }
   
    if(login){
        seterror(false)
        setemail('')
        setpassword('')
        alert('you are in')
    }
    else{
      seterror(true)
    }
  }

  return (
    <>
      {
      login ? navigate('/'): 
      <ThemeProvider theme={theme}>
      <Container  maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
            <img className='img-fluid' src={avatar} alt="avatar"/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box  sx={{ mt: 1 }}>
            <TextField
              onChange={(e)=>setemail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              error={error}
              helperText={error ? "incorrect email or password" : '' }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              error={error}
              onChange={(e)=>setpassword(e.target.value)}
              helperText={error ? "incorrect email or password" : '' }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
              <button 
                className='btn btn-primary w-100 mt-3 mb-2 text-light'
                onClick={handleLogin}
              >
                  Sign In 
              </button>

            <Grid container>
              <Grid item>
                <NavLink to='/signup'>
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
      }
    </>
  );
}