import React from 'react';
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={`container-fluid ${styles.footer} `}>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 justify-content-center">
            <ul className={`list-group list-group-horizontal ${styles.listStyle}`}>
              <li className='list-group-item'><Link  to="/">Home</Link></li>
              <li className='list-group-item'><Link to="/pravicy" >Privacy</Link></li>
              <li className='list-group-item'><Link to="/Contact">Contact</Link></li>
              <li className='list-group-item'><Link to="/timer">Simple Page</Link></li>
          </ul>
          <div className={styles.socialIcons}>
            <FacebookOutlinedIcon/> 
            <TwitterIcon/>
            <InstagramIcon/>
          </div>
          <p>Made by Bekzod</p>
          <p>{new Date().getFullYear()  } @Copyright Online TImer</p>
            </div>
          </div>
    </div>
  )
}
