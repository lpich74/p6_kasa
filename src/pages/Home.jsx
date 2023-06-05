import '../styles/Home.css';
import Banner from "../components/Banner";
import Card from '../components/Card';
import { housingProfiles } from '../datas/logements'
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <Banner />
      <section className='cards-wrapper'>
        {housingProfiles.map((housing) => (
            <Card
              key={`${housing.title}-${housing.id}`}
              cover={housing.cover}
              title={housing.title}
            />
        ))}
      </section>
    </div>
  );
}

export default Home;

/* partie de code à changer :
<Link key={`${housing.title}-${housing.id}`} to={`/housing/${housing.id}`}>
<Card
  cover={housing.cover}
  title={housing.title}
/>
</Link> */