import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './style.css';
import Image from './assets/home.png';

function Home() {
  return (
    <div className='container'>
      <div className='sub-container'>
        <div>
        <h1 className='heading'>Welcome to <span className='shopcom-text'>ShopCom</span></h1>
        <p>Discover the best product at unbeatable price</p>
        <a href='/buy'>
          <Button variant="outlined" endIcon={<SendIcon />}>
            SHOP NOW
          </Button>
        </a>  
        </div>
      </div>
      <div className='sub-container'>
        <img src={Image} alt='background' />
      </div>
    </div>
  );
}

export default Home;
