import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Leads_avalible from "./page/Leads_avalible";
import Leads_success from "./page/Leads_success";
import Dashboard from "./page/Dashboard";
// import Leads_reject from "./page/Leads_reject";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/Leads_avalible' element={<Leads_avalible/>} />
      <Route path='/Leads_success' element={<Leads_success/>} />
      {/* <Route path='/Leads_reject' element={<Leads_reject/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
