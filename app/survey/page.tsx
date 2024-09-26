'use client';

import React, { useState, useEffect } from 'react';
import Table from './table';

interface Employee {
  no: number;
  title: string;
  description: string;
  start: Date;
  end: Date;
  link: string;
  participant: number;
}

const SurveyPage: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      const dummyData: Employee[] = [
        { no: 1, title: 'Survey A', description: 'Coba Isi Sendiri', start: new Date(), end: new Date(), link: '', participant: 10 },
        { no: 2, title: 'Survey B', description: 'Pikirkan Saja', start: new Date(), end: new Date(), link: '', participant: 50 },
        { no: 3, title: 'Survey C', description: 'Boleeh Laah', start: new Date(), end: new Date(), link: '', participant: 30 },
        { no: 4, title: 'Survey D', description: 'Hmm Apa yaa', start: new Date(), end: new Date(), link: '', participant: 12 },
        { no: 5, title: 'Survey E', description: 'Sudah kaah?', start: new Date(), end: new Date(), link: '', participant: 40 },
        { no: 6, title: 'Survey F', description: 'Bingung Nich', start: new Date(), end: new Date(), link: '', participant: 50 },
        // ... more data
      ];
      setEmployees(dummyData);
    };

    fetchEmployees();
  }, []);

  const filteredEmployees = employees.filter(employee =>
    Object.values(employee).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleDetailClose = () => {
    setSelectedEmployee(null);
  };

  const handleAddSurvey = () => {
    // Logic for adding a new survey
    console.log("Add Survey clicked");
  };

  const handleShowEntriesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEmployeesPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when entries change
  };

  return (
    <div>
      <div className="table-header">
        <button className="add-survey-button" onClick={handleAddSurvey}>
          + Add Survey
        </button>
        <div className="search-and-entries">
          <label> 
            <span style={{ marginRight: '0.5rem' }}>Show</span>
            <select value={employeesPerPage} onChange={handleShowEntriesChange} className="show-entries">
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={100}>100</option>
            </select>
            <span style={{ marginLeft: '0.5rem' }}>Entries</span>
          </label>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Table 
        entries={employeesPerPage}
        searchTerm={searchTerm}
        employees={currentEmployees} 
        currentPage={currentPage} 
        employeesPerPage={employeesPerPage} 
        paginate={paginate}
        onDetailClick={setSelectedEmployee}
      />

      {selectedEmployee && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleDetailClose}>&times;</span>
            <h2>Detail Survey</h2>
            <p><strong>Title :</strong> {selectedEmployee.title}</p>
            <p><strong>Description :</strong> {selectedEmployee.description}</p>
            <p><strong>Start :</strong> {selectedEmployee.start.toLocaleDateString()}</p>
            <p><strong>End :</strong> {selectedEmployee.end.toLocaleDateString()}</p>
            <p><strong>Link :</strong> <a href={selectedEmployee.link} target="_blank" rel="noopener noreferrer">{selectedEmployee.link}</a></p>
            <p><strong>Participants :</strong> {selectedEmployee.participant}</p>
          </div>
        </div>
      )}

      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          &lt;
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentEmployees.length < employeesPerPage}>
          &gt;
        </button>
      </div>

      <style jsx>{`
        .table-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          align-items: center;
        }

        .add-survey-button {
          background-color: #0000FF;
          border: none;
          border-radius: 20px;
          color: white;
          padding: 10px 25px;
          text-align: center;
          display: inline-block;
          font-size: 14px;
          margin: 4px 2px;
          cursor: pointer;
          transition: background 0.3s, transform 0.1s;
        }

        .add-survey-button:hover {
          background: linear-gradient(90deg, #0056b3, #007bff);
          // transform: scale(1.05);
        }

        .add-survey-button:hover {
          outline: none;
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.5);
        }

        .search-and-entries {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 15px;
        }

        .show-entries {
          padding: 0.4rem;
          border-radius: 50px;
          border: 1px solid #ccc;
        }

        .search-bar input {
          padding: 0.4rem;
          border-radius: 40px;
          border: 1px solid #ccc;
          width: 230px;
        }

        .pagination {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }

        .pagination button {
          margin: 0 5px;
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          background-color: white;
          cursor: pointer;
          border-radius: 5px;
        }

        .pagination button:disabled {
          background-color: #f2f2f2;
          cursor: not-allowed;
        }

        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: 300px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .close {
          cursor: pointer;
          float: right;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default SurveyPage;
