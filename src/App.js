import './App.css';
import Heder from './components/Header/Heder';
import Services from './components/Services/Services';
import { Education } from './components/education/Education';
import { ContactMe } from './components/contact me/ContactMe';
import Comments from './components/comments/Comments';
import { Home } from './components/home/Home';
import Nav from './components/Header/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Price from './components/price/Price';
import Testimonials from './components/testimonials/Testimonials';
import Skills from './components/skills/Skills';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Heder/>
      <Skills/>
      <Education/>
      <Services/>
      <Portfolio/>
      <Price/>
      <Testimonials/>
      <ContactMe/>
      {/* <Comments/> */}
    </div>
  );
}

export default App;
