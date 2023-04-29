import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leads_avalible from "./page/Leads_avalible";
import Leads_success from "./page/Leads_success";
import Leads_reject from "./page/Leads_reject";


function App() {
  return (
    <div className='body'>
      <Leads_avalible/>
      {/* <Leads_success/> */}
      {/* <Leads_reject/> */}
    </div>
  );
}

export default App;
