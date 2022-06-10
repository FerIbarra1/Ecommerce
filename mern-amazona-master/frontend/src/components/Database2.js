import React from 'react';

 export default function Database({data3}){
     const columns = data3[0] && Object.keys(data3[0]);
     return (
         <table cellPadding={5} cellSpacing={5}>
             <thead>
                 <tr>{data3[0] && columns.map((heading) => <th> {heading} </th> )} </tr>
             </thead>
             <tbody>
                 {data3.map(row => <tr> 
                     {
                         columns.map(column => <td> {row[column]} </td>)
                     } 
                     </tr>)}
             </tbody>
         </table>
     )
 }