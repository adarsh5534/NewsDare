import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NewsView from './components/NewsView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import api from './api';
import Tesla from './components/Tesla';
import Bitcoin from './components/Bitcoin';
import Wallstreet from './components/Wallstreet';
import Apple from './components/Apple';
import Usa from './components/Usa';
import SingleCard from './components/SingleCard'
import SeachBar from './components/SeachBar/SeachBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<NewsView />} />
          <Route path='/search' element={<SeachBar/>}  />

          <Route path='/tesla' element={<Tesla
            toTesla={api.fetchtesla} />} />
          <Route path='/bitcoin' element={<Bitcoin
            toBitcoin={api.fetchbitcoin} />} />
          <Route path='/apple' element={<Apple
            toApple={api.fetchapple} />} />
          <Route path='/usa' element={<Usa
            toUsa={api.fetchusa} />} />
          <Route path='/Wallstreet' element={<Wallstreet
            toWallstreet={api.fetchwallstreet} />} />
          <Route path='/singlecard/:publishedAt' element={<SingleCard
        />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
