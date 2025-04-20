import logo from './logo.svg';
import './App.css';
import Inicio from './Pages/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import "./i18n"; 

function App() {
  return (
    <div className="App">
      <Header/>
     <Inicio/>
     <Footer/>
    </div>
  );
}

export default App;
