import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Nav from './Components/Nav/Nav';
import Stable from './Components/Content/Stable/Stable';
import Edtable from './Components/Content/Edtable/Edtable';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper' style={{ backgroundColor: "#0C0032 " }}>
        <div className='header' >
          <Header />
        </div>
        <div className='nav'>
          <Nav />
        </div>
        <div className='cont' >
        <Route path='/stable' component={Stable} />
        <Route path='/edable' component={Edtable} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
