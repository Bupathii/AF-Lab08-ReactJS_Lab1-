import NavBar from './NavBar';
import Greeting from './Greeting';
import Footer from './Footer';
import Card from './Card';
import Button from './Button';
import Banner from './Banner';
import Testimonial from './Testimonial';

function App() {
  return (
    <div>
      <NavBar />
      <Greeting />
      <Banner message="Get 50% Off Today Only!" backgroundColor="#ffcc00" />
      <Card
        image="https://images.pexels.com/photos/7621352/pexels-photo-7621352.jpeg"
        title="Web Design"
        description="Professional and modern website design."
      />
      <Button label="Learn More" size="large" styleType="primary" />
      <Testimonial
        quote="Amazing service, highly recommend!"
        name="Bupathi Pranama"
        photo="https://images.pexels.com/photos/11985153/pexels-photo-11985153.jpeg"
      />
      <Footer />
    </div>
  );
}

export default App;
// This code defines the main App component that imports and uses various other components to build a complete webpage. It includes a NavBar, Greeting, Banner with a promotional message, a Card showcasing a service, a Button for user interaction, a Testimonial from a satisfied customer, and a Footer. Each component is styled and structured to create an engaging user experience.