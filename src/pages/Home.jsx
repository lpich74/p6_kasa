import '../styles/Home.css';
import Banner from "../components/Banner";
import Card from '../components/Card';
import { housingProfiles } from '../datas/logements'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Banner 
        text="Chez vous, partout et ailleurs"
        page="home"
      />
      <section className='cards-wrapper'>
        {housingProfiles.map((housingData) => (
          <Link className='card' key={`${housingData.id}`} to={`/housing/${housingData.id}`}>
            <Card
                cover={housingData.cover}
                title={housingData.title}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;