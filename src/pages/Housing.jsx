import '../styles/Housing.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { housingProfiles } from '../datas/logements'
import Collapse from '../components/Collapse'

function Housing() {
  const { id } = useParams()

  const housing = housingProfiles.find((profile) => profile.id === id);

  if (!housing) {
    return (
      <Link to={`*`} />
    )
  }

  return (
    <div className='collapses-housing'>
      <Collapse
        title="Description"
        content={housing.description}
      />
      <Collapse
        title="Équipements"
        content={housing.equipments}
      />
    </div>
  )
}
  
  export default Housing
  