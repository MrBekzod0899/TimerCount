import React from 'react';
import Footer from '../LandingPage/Footer';
import Header from '../LandingPage/Header';
import Counting from '../LandingPage/TimerCount';

const Basic = () => {
    
  const  [Elements, setElements] = React.useState({});
  const handleSubmit=(obj)=>{
    setElements(obj)
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
const styles={
    height:'100vh',
    backgroundColor:'#2564F2'
}
    return (
        <div className='basic' style={styles}>
           <Header handleSubmit={handleSubmit} handleOpen={handleOpen} handleClose={handleClose} open={open}/>
            <Counting obj={Elements} open={open} />
            
        </div>
    );
}

export default Basic;
