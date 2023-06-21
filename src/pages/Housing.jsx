import '../styles/Housing.css'
import { useLoaderData } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Tags from '../components/Tags'
import Collapse from '../components/Collapse'
import Stars from '../components/Stars'

function Housing() {

  const {housingData} = useLoaderData();

  return (
    <div className='housing-wrapper'>
      <Carousel
        carouselPictures={housingData.pictures}
      />
      <div className='housing-datas'>
        <div className='housing-titles-tags'> 
          <h1 className='housing-title'>{housingData.title}</h1>
          <h2 className='housing-location'>{housingData.location}</h2>
          <Tags tags={housingData.tags} />
        </div>
        <div className='housing-host-stars'>
          <div className='host-box'>
            <span className='host-name'>{housingData.host.name}</span>
            <img className='host-pic' src={housingData.host.picture} alt={housingData.host.name} height={64} width={64} />
          </div>
          <Stars
            rating={housingData.rating}
          />
        </div>
      </div>
      <div className='collapses-housing'>
          <Collapse
            title="Description"
            content={
              <p className='housing-description'>{housingData.description}</p>
            }
            page="housing"
          />
          <Collapse
            title="Équipements"
            content={
              <ul className='equipments-list'>
                {housingData.equipments.map((equipment, index) => (
                  <li className='equipment' key={index}>{equipment}</li>
                ))}
              </ul>
            }
            page="housing"
          />
      </div>
    </div>
  )
}
  
  export default Housing
  