import React from 'react'
import { Button } from '@material-ui/core';
import MaterialTable from 'material-table'
import { NavLink } from 'react-router-dom';
import dt from './../Testfile.json'
import dt2 from './../Testfile2.json'

const data = dt.data
const data2 = dt2.data


class Stable extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          rs: data
      }
  }
handleClick() {
const fs = require('fs');
  
let data = "This is a file containing a collection of books.";
  
fs.writeFile("books.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});
} 


  render() {

          return (    <div className="cont">
    <a href="#" onClick={this.handleClick()}>
      Нажми на меня
    </a>
    
          <MaterialTable
            columns={[
              { title: 'Номер изделия', field: 'number' },
              { title: 'Наименование изделия', field: 'name' },
              { title: 'Норма', field: 'norma', type: 'numeric' },
              { title: 'Норма', field: 'have', type: 'numeric' },
              { title: 'Норма', field: 'need', type: 'numeric' }
            ]}
            data={this.state.rs}
            title="Demo Title"
            options={{
              sorting: true
            }}
            parentChildData={(row, rows) => rows.find(a => a.name === row.month)}
          />
        </div>
          )
  }
}
export default Stable;