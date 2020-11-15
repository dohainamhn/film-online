import Navbar from './components/common/Navbar/Navbar'
import SlideShow from './components/SlideShow/SlideShow'
import backgroundImg from './img/hero-area.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SlideShow/>
      <p>Home</p>
    </div>
  );
}

export default App;
