import Navbar from './components/common/Navbar/Navbar'
import backgroundImg from './img/hero-area.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="slide">
        <img src={backgroundImg}/>
      </div>
    </div>
  );
}

export default App;
