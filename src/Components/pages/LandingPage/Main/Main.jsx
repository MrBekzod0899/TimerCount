import React from 'react';
import Header from '../Header';
import Content from '../Content'
import Footer from '../Footer';
import Counting from '../TimerCount';


export default function Main() {
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


  return (
    <div className='main'>
      <Header handleSubmit={handleSubmit} handleOpen={handleOpen} handleClose={handleClose} open={open}/>   
      <Counting obj={Elements} open={open} />
      <Content/>
      <Footer/>
    </div>
  )
}
