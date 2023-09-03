import './App.css';
import Heder from './components/Header/Heder';
import Services from './components/Services/Services';
import file from "./assets/Mostafa-Hisham.pdf.pdf"
import { Education } from './components/education/Education';
import { Skills } from './components/skills/Skills';
import { ContactMe } from './components/contact me/ContactMe';
import Comments from './components/comments/Comments';
import { Home } from './components/home/Home';
import Nav from './components/Header/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Heder/>
      <Education/>
      <Services/>
      <Skills/>
      <ContactMe/>
      <Comments/>
    </div>
  );
}

export default App;
