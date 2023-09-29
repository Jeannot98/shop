import './App.scss';
import Carousel from './components/Carousel/Carousel';
import GiftSection from './components/giftSection/GiftSection';
import Header from './components/header/Header';
import Section from './components/section/Section';
import SmallSection from './components/smallSection/SmallSection';
import {Data} from './components/Data'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <SmallSection/>
      <GiftSection/>
      <Carousel slides={Data}/>
      <Footer/>
    </div>
  );
}

export default App;
