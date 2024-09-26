import React, { Dispatch, SetStateAction } from "react";
import { BsPencilFill } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { TbSquareRoundedArrowRight } from "react-icons/tb";

interface Employee {
  no: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
  link: string;
  participant: number;
}

interface TableProps {
  entries: number
  searchTerm: string
  employees: Employee[];
  currentPage: number;
  employeesPerPage: number;
  paginate: (pageNumber: number) => void;
  onDetailClick: Dispatch<SetStateAction<Employee | null>>;
}

const Table: React.FC<TableProps> = ({ employees, currentPage, employeesPerPage, paginate, onDetailClick }) => {
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
    <div className="overflow-x-auto w-full">
      <div className="overflow-y-auto max-h-96"> {/* Set your desired height here */}
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-center">
              <th className="p-4 border border-gray-300">No</th>
              <th className="p-4 border border-gray-300">Title</th>
              <th className="p-4 border border-gray-300">Description</th>
              <th className="p-4 border border-gray-300">Start Date</th>
              <th className="p-4 border border-gray-300">End Date</th>
              <th className="p-4 border border-gray-300">Participants</th>
              <th className="p-4 border border-gray-300">Detail</th>
              <th className="p-4 border border-gray-300">Link</th>
              <th className="border border-gray-300">Action</th> {/* Removed padding here */}
            </tr>
          </thead>
          <tbody>
            {currentEmployees.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center p-4 border border-gray-300">
                  No employees found
                </td>
              </tr>
            ) : (
              currentEmployees.map((employee) => (
                <tr key={employee.no} className="border-t">
                  <td className="p-4 border border-gray-300">{employee.no}</td>
                  <td className="p-4 border border-gray-300">{employee.title}</td>
                  <td className="p-4 border border-gray-300">{employee.description}</td>
                  <td className="p-4 border border-gray-300">{employee.start.toLocaleDateString()}</td>
                  <td className="p-4 border border-gray-300">{employee.end.toLocaleDateString()}</td>
                  <td className="p-4 border border-gray-300">{employee.participant}</td>
                  <td className="p-4 border border-gray-300">
                    <button className="detail-button" onClick={() => onDetailClick(employee)}>
                      Detail
                    </button>
                  </td>
                  <td className="p-4 border border-gray-300">
                    <a href={employee.link} target="_blank" rel="noopener noreferrer">
                      {employee.link}
                    </a>
                  </td>
                  <td className="p-0 border border-gray-300"> {/* Removed padding here */}
                    <div className="flex items-center justify-center space-x-2"> {/* Adjusted for proper alignment */}
                      <td className="p-0 border border-gray-300"></td>
                      <div className="icon-container publish" title="Publish">
                        <TbSquareRoundedArrowRight className="icon" />
                      </div>
                      <td className="p-0 border border-gray-300"></td>
                      <div className="icon-container edit" title="Edit">
                        <BsPencilFill className="icon" />
                      </div>
                      <td className="p-0 border border-gray-300"></td>
                      <div className="icon-container delete" title="Delete">
                        <FaRegTrashAlt className="icon" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .detail-button {
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 15px;
          cursor: pointer;
          padding: 0.4rem 0.6rem;
          font-size: 14px;
        }

        .detail-button:hover {
          background-color: #0056b3;
        }

        .icon-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px; 
          border-radius: 4px;
          cursor: pointer;
          color: white;
          font-size: 1.2rem;
          border: 1px solid #ccc; 
        }

        .edit {
          background-color: gray;
        }

        .delete {
          background-color: red;
        }

        .publish {
          background-color: #4682B4;
        }

        .flex.items-center.space-x-2 > .icon-container {
          margin-left: 0; 
          margin-right: 0;
        }
      `}</style>
    </div>
  );
};

export default Table;
