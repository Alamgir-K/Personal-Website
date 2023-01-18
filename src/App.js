import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Landing></Landing>
      <Experience></Experience>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
