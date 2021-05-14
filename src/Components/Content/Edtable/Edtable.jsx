import React from 'react'
import MaterialTable from 'material-table'
import dt from './../Testfile.json'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';


const data = dt.data




function Edtable() {
    const { useState } = React;
  
    const [columns, setColumns] = useState([
        { title: 'Номер изделия', field: 'number' },
        { title: 'Наименование изделия', field: 'name' },
        { title: 'Норма', field: 'norma', type: 'numeric' },
        { title: 'Норма', field: 'have', type: 'numeric' },
        { title: 'Норма', field: 'need', type: 'numeric' }
    ]);
  
    const [data, setData] = useState(dt.data);
  
    return (
       <div>
            <NavLink to="/stable"><Button variant="contained">Выйти из рр</Button></NavLink>

<MaterialTable
  title="Editable Preview"
  columns={columns}
  data={data}
  editable={{
    onRowAdd: newData =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          setData([...data, newData]);
          
          resolve();
        }, 1000)
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);

          resolve();
        }, 1000)
      }),
    onRowDelete: oldData =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataDelete = [...data];
          const index = oldData.tableData.id;
          dataDelete.splice(index, 1);
          setData([...dataDelete]);
          
          resolve()
        }, 1000)
      }),
  }}
  parentChildData={(row, rows) => rows.find(a => a.name === row.month)}
/>
       </div>
    )
  }
  export default Edtable;