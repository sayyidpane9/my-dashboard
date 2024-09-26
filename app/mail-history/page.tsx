'use client';

import React, { useState, useEffect } from 'react';
import Table from './table';

interface Employee {
  no: number;
  email: string;
  name: string;
  status: string;
  link: string;
}

const Page: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setEmployeesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      const dummyData: Employee[] = [
        // { no: 1, email: 'user1@example.com', name: 'Armando', status: 'Aktif', link: '/detail/1' },
        // { no: 2, email: 'user2@example.com', name: 'Phoenix', status: 'Non-Aktif', link: '/detail/2' },
        // { no: 3, email: 'user3@example.com', name: 'Armageddon', status: 'Non-Aktif', link: '/detail/3' },
        // { no: 4, email: 'user4@example.com', name: 'Garaga', status: 'Aktif', link: '/detail/4' },
        // ... more data
      ];
      setEmployees(dummyData);
    };

    fetchEmployees();
  }, []);

  // Filter data berdasarkan search term
  const filteredEmployees = employees.filter(employee =>
    Object.values(employee).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handleEmployeesPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEmployeesPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing the number of entries
  };

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleDetailClose = () => {
    setSelectedEmployee(null);
  };

  return (
    <div>
      <div className="table-header">
        <div className="show-entries">
          <label>
            Show 
            <select value={employeesPerPage} onChange={handleEmployeesPerPageChange}>
              <option value="1">1</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span style={{ marginLeft: '0.5rem' }}>Entries</span>
          </label>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Table 
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
            <h2>Detail Karyawan</h2>
            <p><strong>Nama :</strong> {selectedEmployee.name}</p>
            <p><strong>Email :</strong> {selectedEmployee.email}</p>
            <p><strong>Status :</strong> {selectedEmployee.status}</p>
            <p><strong>Link :</strong> <a href={selectedEmployee.link} target="_blank" rel="noopener noreferrer">{selectedEmployee.link}</a></p>
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

        .show-entries {
          font-size: 0.9rem;
          margin-right: 1rem;
        }

        .show-entries select {
          margin-left: 0.5rem;
          padding: 0.2rem;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .search-bar input {
          padding: 0.4rem;
          border-radius: 10px;
          border: 1px solid #ccc;
          width: 350px;
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

export default Page;
