import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Landing></Landing>
      <Experience></Experience>
      <Projects></Projects>
      <About></About>
    </div>
  );
}

export default App;
