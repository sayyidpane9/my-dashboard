// 'use client';

// import React, { useState } from 'react';

// interface Survey {
//   no: number;
//   title: string;
//   description: string;
//   start: string;
//   end: string;
//   participant: string;
//   detail: string;
//   link: string;
//   action: string;
// }

// const App: React.FC = () => {
//   const [surveys, setSurveys] = useState<Survey[]>([]);

//   const handleAddSurvey = () => {
//     // Logika untuk menambahkan survei baru
//   };

//   return (
//     <div>
//       <button onClick={handleAddSurvey}>+ Add Survey</button>

//       <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0' }}>
//         <span style={{ marginRight: '10px' }}>Show</span>
//         <select>
//           <option value="10">10</option>
//           <option value="25">25</option>
//           <option value="50">50</option>
//         </select>
//         <span style={{ margin: '0 10px' }}>Entries</span>
//         <input type="text" placeholder="Search..." />
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>start</th>
//             <th>end</th>
//             <th>participant</th>
//             <th>detail</th>
//             <th>link</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {surveys.length > 0 ? (
//             surveys.map((survey) => (
//               <tr key={survey.no}>
//                 <td>{survey.no}</td>
//                 <td>{survey.title}</td>
//                 <td>{survey.description}</td>
//                 <td>{survey.start}</td>
//                 <td>{survey.end}</td>
//                 <td>{survey.participant}</td>
//                 <td>{survey.detail}</td>
//                 <td>{survey.link}</td>
//                 <td>{survey.action}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={9} style={{ textAlign: 'center' }}>
//                 No employees found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
//         <button style={{ marginRight: '10px' }}>{'<'}</button>
//         <button>{'>'}</button>
//       </div>
//     </div>
//   );
// };

// export default App;
