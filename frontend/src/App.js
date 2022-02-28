import './App.scss';
import Properties from './components/properties/Properties';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Villas from './pages/propertyType/Villas';
import Apartments from './pages/propertyType/Apartments';
import EachProperty from './pages/eachProperty/eachProperty';
import FormBottom from './components/formBottom/FormBottom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

function App () {
  return (
    /* {/*<div className="App">
  <div className="sections">*/
    /*} </div>
  </div>*/
    (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:property_id" element={<EachProperty />} />
          <Route path="/properties/villas" element={<Villas />} />
          <Route path="/properties/apartments" element={<Apartments />} />
          <Route path="/properties/:property_id" element={<EachProperty />} />
          <Route
            path="/properties/villas/:property_id"
            element={<EachProperty />}
          />
        </Routes>
        <FormBottom />
        <Footer />
      </Router>
    )
  );
}

export default App;
