import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './Components/Header';
import Routing from './Components/Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div> 
  );
}

export default App;
