import React from 'react';
import '../styles/Banner.css';

function Banner({isHomePage}) {
  if (isHomePage) {
    return (
      <div className='banner'>
        <div className='banner-image'></div>
        <h1 className='catch-phrase'>Chez vous, partout et ailleurs</h1>
      </div>
    )
  } else {
      return (
        <div className='landscape'></div>
      )  
  }
}
  
export default Banner