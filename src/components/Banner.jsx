import React from 'react';
import '../styles/Banner.css';

function Banner({page, text}) {
  return (
    <div className={"banner-" + page }>
      <div className={"banner-image-" + page }></div>
      {text && text.trim().length > 0 && (
        <h1 className={"catch-phrase-" + page }>{text}</h1>
      )}
    </div>
  )
}
  
export default Banner