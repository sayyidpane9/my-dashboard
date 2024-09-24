// import React from 'react';

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

// interface SurveyTableProps {
//   surveys: Survey[];
// }

// const SurveyTable: React.FC<SurveyTableProps> = ({ surveys }) => {
//   return (
//     <div className="survey-table-container">
//       <div className="table-controls">
//         <div className="show-entries">
//           <span>Show</span>
//           <select>
//             <option value="10">10</option>
//             <option value="25">25</option>
//             <option value="50">50</option>
//           </select>
//           <span>entries</span>
//         </div>
//         <div className="search-box">
//           <input type="text" placeholder="Search..." />
//         </div>
//       </div>

//       <table className="survey-table">
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Start</th>
//             <th>End</th>
//             <th>Participant</th>
//             <th>Detail</th>
//             <th>Link</th>
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
//                 <td>
//                   <a href={survey.link} target="_blank" rel="noopener noreferrer">
//                     {survey.detail}
//                   </a>
//                 </td>
//                 <td>{survey.link}</td>
//                 <td>{survey.action}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={9} style={{ textAlign: 'center' }}>
//                 No surveys found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SurveyTable;
