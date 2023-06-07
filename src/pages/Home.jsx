import '../styles/Home.css';
import Banner from "../components/Banner";
import Card from '../components/Card';
import { housingProfiles } from '../datas/logements'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Banner />
      <section className='cards-wrapper'>
        {housingProfiles.map((housing) => (
          <Link className='card' key={`${housing.id}`} to={`/housing/${housing.id}`}>
            <Card
                cover={housing.cover}
                title={housing.title}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home;