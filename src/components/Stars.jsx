import '../styles/Stars.css';

function Stars({rating}) {
    const stars = [];
    const fullStar = <i className="fa-solid fa-star" style={{color:'#FF6060'}}></i>
    const emptyStar = <i className="fa-solid fa-star" style={{color:'#E3E3E3'}}></i>

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
          stars.push(<span key={i}>{fullStar}</span>);
        } else {
          stars.push(<span key={i}>{emptyStar}</span>);
        }
      }
    
      return <div className='starbox'>{stars}</div>;
}

export default Stars