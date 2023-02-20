import './App.css';
import {useState} from "react";
import NavbarComponent from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NewsPageComponent } from './Components/NewsPage/NewsPage';
import { AboutUsComponent } from './Components/AboutUs/AboutUs';
import { FavoritesList } from './Components/NewsPage/FavoritesComponent/FavoritesList';
import { BrdskoTrcanjeComponent } from './Components/brdskoTrcanje/BrdskoTrcanjeComponent';
import { ZrMaratonComponent } from './Components/zrMaraton/ZrMaratonComponent';
import { VuckoTrejlComponent } from './Components/VuckoTrejl/VuckoTrejlComponent';
import { IndjijaTrejlComponent } from './Components/indjijaTrejl/IndjijaTrejlComponent';

function App() {
  const query: string | null = "";

  const [searchQuery, setSearchQuery] = useState(query || "");

  const getQuery = (newQuery : string | null) => {
    setSearchQuery(newQuery!);
  };

  return (
   <div className="App">
    
      <div className= "row">
        <div className='col-12'>
          <NavbarComponent
          />
        </div>
      </div>

      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<NewsPageComponent />} />  
            <Route path="/aboutUs" element={<AboutUsComponent />} /> 
            <Route path="/favorites" element={<FavoritesList />} /> 
            <Route path="/brdskoTrcanje" element={<BrdskoTrcanjeComponent />} />
            <Route path="/zrMaraton" element={<ZrMaratonComponent />} />
            <Route path="/indjijaTrejl" element={<IndjijaTrejlComponent />} />
            <Route path="/vuckoTrail" element={<VuckoTrejlComponent />} />
          </Routes>
        </div>
      </Router> 
    
      <div className= "row">
        <div className='col-12'>
          <NavbarComponent
          />
        </div>
      </div>
  </div>
 
  );
}

export default App;



 