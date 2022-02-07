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


  return (
    <div className='main'>
      <Header handleSubmit={handleSubmit}/>
      <Counting obj={Elements} />
      <Content/>
      <Footer/>
    </div>
  )
}
