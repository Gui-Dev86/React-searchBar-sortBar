import Header from './components/Header'
import Home from "./views/Home";
import FuelsRecherche from "./views/FuelsRecherche";
import FuelsTri from "./views/FuelsTri";

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fuelRechercheVille" element={<FuelsRecherche />} />
          <Route path="/fuelTriVille" element={<FuelsTri />} />
      </Routes>
    </div>
  );
}

export default App;
