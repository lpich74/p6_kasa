import '../styles/Housing.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { housingProfiles } from '../datas/logements'
import Tags from '../components/Tags'
import Collapse from '../components/Collapse'
import Stars from '../components/Stars'

function Housing() {
  const { id } = useParams()

  const housing = housingProfiles.find((profile) => profile.id === id);

  if (!housing) {
    return (
      <Link to={`*`} />
    )
  }

  return (
    <div className='housing-wrapper'>
      <div className='housing-datas'>
        <div className='housing-titles-tags'> 
          <h1 className='housing-title'>{housing.title}</h1>
          <h2 className='housing-location'>{housing.location}</h2>
          <Tags tags={housing.tags} />
        </div>
        <div className='housing-host-stars'>
          <div className='host-box'>
            <span className='host-name'>{housing.host.name}</span>
            <img className='host-pic' src={housing.host.picture} alt={housing.host.name} height={64} width={64} />
          </div>
          <Stars
            rating={housing.rating}
          />
        </div>
      </div>
      <div className='collapses-housing'>
          <Collapse
            title="Description"
            content={housing.description}
          />
          <Collapse
            title="Équipements"
            content={
              <ul className='equipments-list'>
                {housing.equipments.map((equipment, index) => (
                  <li className='equipment' key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
      </div>
    </div>
  )
}
  
  export default Housing
  