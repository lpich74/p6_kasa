import '../styles/Carousel.css'
import { useState, useEffect } from 'react'

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
    
    const currentPicture = showNum +1

    useEffect(() => {
      const interval = setInterval(() => {
        setShowNum((showNum + 1) % carouselPictures.length);
      }, 8000);
  
      return () => {
        clearInterval(interval);
      };
    }, [showNum, carouselPictures.length]);

    if (carouselPictures.length <= 1) {
      return (
        <div className="carousel-nav">
          <div className="carousel-content">
            {carouselPictures.map((picture, index) => (
              <img src={picture} alt={index} className="carousel-content-item" key={index} />
            ))}
          </div>
        </div>
      );
    }
  
    return (
      <div className="carousel-nav">
        <div className="carousel-left">
          <i className="fa-solid fa-chevron-left" onClick={() => carouselNext(true)}></i>
        </div>
  
        <div className="carousel-content" style={{ transform: `translateX(${-100 * showNum}%)` }}>
          {carouselPictures.map((picture, index) => (
            <img src={picture} alt={index} className="carousel-content-item" key={index} />
          ))}
        </div>
  
        <div className="carousel-right">
          <i className="fa-solid fa-chevron-right" onClick={() => carouselNext()}></i>
        </div>
  
        <div className="carousel-counter">
          {currentPicture}/{carouselPictures.length}
        </div>
      </div>
    );
}

export default Carousel