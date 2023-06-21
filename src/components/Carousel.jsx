import '../styles/Carousel.css'
import { useState } from 'react'

function Carousel({carouselPictures}) {
    const [showNum, setShowNum] = useState(0);

    const carouselNext = (prev) => {
        if (prev) {
          let newShowNum = (showNum - 1) % carouselPictures.length;
          if (newShowNum < 0) {
            newShowNum += carouselPictures.length;
          }
          setShowNum(newShowNum);
        } else {
          setShowNum((showNum + 1) % carouselPictures.length);
        }
      };

    return (
        <div className="carousel-nav">
            <div className="carousel-left">
                <span className="carousel-left-arr" onClick={() => carouselNext(true)}>&lt;</span>
            </div>
  
            <div className="carousel-content" style={{transform:`translateX(${-100*showNum}%)`}}>
              {carouselPictures.map((picture, index) => (
                <img src={picture} alt={index} className='carousel-content-item' key={index} />
              ))}
            </div>
  
            <div className="carousel-right">
                <span className="carousel-right-arr" onClick={() => carouselNext()}>&gt;</span>
            </div>
        </div>
    )
}

export default Carousel