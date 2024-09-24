import React from 'react';

interface Employee {
  no: number;
  email: string;
  name: string;
  status: string;
  link: string;
}

interface TableProps {
  employees: Employee[];
  currentPage: number;
  employeesPerPage: number;
  paginate: (pageNumber: number) => void;
  onDetailClick: (employee: Employee) => void; // Prop untuk detail click
}

const Table: React.FC<TableProps> = ({ employees, onDetailClick }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Email</th>
            <th>Name</th>
            <th>Status</th>
            <th>Link</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map(employee => (
              <tr key={employee.no}>
                <td>{employee.no}</td>
                <td>{employee.email}</td>
                <td>{employee.name}</td>
                <td>{employee.status}</td>
                <td>
                  <a href={employee.link} target="_blank" rel="noopener noreferrer">
                    {employee.link}
                  </a>
                </td>
                <td>
                  <button className="detail-button" onClick={() => onDetailClick(employee)}>
                    Detail
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="no-employees">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>

      <style jsx>{`
        .table-container {
          background-color: white;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          border: 1px solid #ccc;
          padding: 0.8rem;
          text-align: left;
          word-wrap: break-word;
        }

        th {
          background-color: #343a40;
          color: white;
        }

        .detail-button {
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          padding: 0.4rem 0.6rem;
        }

        .detail-button:hover {
          background-color: #0056b3;
        }

        .no-employees {
          text-align: center;
          font-style: italic;
          color: #999;
        }

        @media (max-width: 768px) {
          th, td {
            font-size: 0.9rem;
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Table;
