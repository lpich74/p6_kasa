import '../styles/Card.css'

function Card({ title, cover }) {
    return (
      <div>
        <img className='card-image' src={cover} alt={title} height={150} width={150}/>
        <h2 className="card-title">{title}</h2>
      </div>
    )
}

export default Card
