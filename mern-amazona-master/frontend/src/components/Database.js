import React from 'react';

 export default function Database({data2}){
     const columns = data2[0] && Object.keys(data2[0]);
     return (
         <table cellPadding={0} cellSpacing={0}>
             <thead>
                 <tr>{data2[0] && columns.map((heading) => <th> {heading} </th> )} </tr>
             </thead>
             <tbody>
                 {data2.map(row => <tr> 
                     {
                         columns.map(column => <td> {row[column]} </td>)
                     } 
                     </tr>)}
             </tbody>
         </table>
     )
 }