import './Content.css';
import MaterialTable from 'material-table'
import dt from './Testfile.json'
import Stable from './Stable/Stable';
import Edtable from './Edtable/Edtable';
import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
const data = dt.data
const Content = () => {
  return (
    <BrowserRouter>
      <div className="cont">

      </div>
    </BrowserRouter>
  );
}

export default Content;
