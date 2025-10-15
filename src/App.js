import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Individuals from './Components/Individuals/Individuals';
import History from './Components/History/History';
import Vital from './Components/Vital/Vital';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <Individuals/>
      <History/>
      <Vital/>
    </div>
  );
}

export default App;
