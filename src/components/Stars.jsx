import '../styles/Stars.css';

function Stars({rating}) {
    const stars = [];
    const fullStar = <i class="fa-solid fa-star" style={{color:'#FF6060'}}></i>
    const emptyStar = <i class="fa-solid fa-star" style={{color:'#E3E3E3'}}></i>

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push(fullStar);
        } else {
          stars.push(emptyStar);
        }
      }
    
      return <div className='starbox'>{stars}</div>;
}

export default Stars