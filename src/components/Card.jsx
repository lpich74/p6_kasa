import '../styles/Card.css'

function Card({ title, cover }) {
    return (
      <div className='card'>
        <img className='card-image' src={cover} alt="*" height={150} width={150}/>
        <h2 className="card-title">{title}</h2>
      </div>
    )
}

export default Card
