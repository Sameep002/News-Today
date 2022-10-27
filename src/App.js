import Newspg from "./components/Newspg";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus"

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Newspg pageSize={15} country= "in" category="general"/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/business" element={<Newspg pageSize={15} country= "in" category="business"/>}/>
          <Route path="/entertainment" element={<Newspg pageSize={15} country= "in" category="entertainment"/>}/>
          <Route path="/sports" element={<Newspg pageSize={15} country= "in" category="sports"/>}/>
          <Route path="/health" element={<Newspg pageSize={15} country= "in" category="health"/>}/>
          <Route path="/science" element={<Newspg pageSize={15} country= "in" category="science"/>}/>
          <Route path="/technology" element={<Newspg pageSize={15} country= "in" category="technology"/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
