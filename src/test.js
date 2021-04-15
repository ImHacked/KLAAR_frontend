import React from 'react';
import "./Table.css";
import {
    useTable,
    useGroupBy,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
  } from 'react-table';
  

function Table({data}) {

    const columns=data[0] && Object.keys(data[0]); 
    return (
       <table  id="MyTable" class="display" >
           <thead>
               <tr>
               <th>IFSC</th>
               <th>Bank Id</th>
               <th>Branch</th>
               <th>Address</th>
               <th>City</th>
               <th>District</th>
               <th>State</th>
               <th>Bank Name</th>

               </tr>
           </thead>
           <tbody>
               {data.map(row=><tr>
                   {
                       columns.map(column=><td>{row[column]}</td>)
                   }
               </tr>)}
           </tbody>
       </table>
    )

    

    
}




export default Table
