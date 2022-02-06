import React from 'react';
import Header from '../Header';
import Content from '../Content'
import Footer from '../Footer';
import Counting from '../TimerCount';

export default function Main() {
  return (
    <div className='main'>
      <Header/>
      <Counting/>
      <Content/>
      <Footer/>
    </div>
  )
}
