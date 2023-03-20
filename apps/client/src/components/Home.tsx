import { Carousel, Container } from 'react-bootstrap';
import appImage from '../assets/app.jpg';
import libraryImage from '../assets/library.jpg';
import analyticsImage from '../assets/analytics.jpg';

const Home = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={appImage}
            alt="First slide"
            style={{ objectFit: 'cover', height: '669px' }}
          />
          <Carousel.Caption className="text-white">
            <div className="bg-dark opacity-75 p-4 rounded">
              <h3 className="opacity+100" >Welcome to our app!</h3>
              <p>
                Our app is a library of articles scraped from the BBC website. You can preview and read
                articles, as well as view analytics based on the data we collect.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={libraryImage}
            alt="Second slide"
            style={{ objectFit: 'cover', height: '669px' }}
          />
          <Carousel.Caption className="text-white">
            <div className="bg-dark opacity-75 p-4 rounded">
              <h3>Article Library</h3>
              <p>
                Our article library contains a large collection of articles from various categories,
                including politics, sports, and entertainment.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={analyticsImage}
            alt="Third slide"
            style={{ objectFit: 'cover', height: '669px' }}
          />
          <Carousel.Caption className="text-white">
            <div className="bg-dark opacity-75 p-4 rounded">
              <h3>Analytics</h3>
              <p>
                Our analytics section provides insights into the data we collect, with charts and
                visualizations powered by D3.js.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
