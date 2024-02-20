import'./App.scss';
import Home from './Component/Home/Home.jsx';
import  {Header} from './Component/Header/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
   
   <Router>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}>

      </Route>
    </Routes>

   </Router>


   
  );
}

export default App;
