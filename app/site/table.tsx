import React from "react";

interface Site {
  id: number;
  site: string;
  employeeTotal: number;
}

interface DataTableProps {
  entries: number;
  searchTerm: string;
  sites: Site[];
}

const DataTable: React.FC<DataTableProps> = ({ entries, searchTerm, sites }) => {
  // Filter sites based on search term across all fields
  const filteredSites = sites.filter((site) =>
    site.site.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.employeeTotal.toString().includes(searchTerm)
  );

  // Pagination logic
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(filteredSites.length / entries);
  const indexOfLastSite = currentPage * entries;
  const indexOfFirstSite = indexOfLastSite - entries;
  const currentSites = filteredSites.slice(indexOfFirstSite, indexOfLastSite);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="overflow-x-auto w-full">
      {/* Wrapper for scrollable area */}
      <div className="overflow-y-auto max-h-96"> {/* Set your desired height here */}
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-4 border border-gray-300">No</th>
              <th className="p-4 border border-gray-300">Site</th>
              <th className="p-4 border border-gray-300">Employee Total</th>
            </tr>
          </thead>
          <tbody>
            {currentSites.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center p-4 border border-gray-300">
                  No sites found
                </td>
              </tr>
            ) : (
              currentSites.map((site, index) => (
                <tr key={site.id} className="border-t">
                  <td className="p-4 border border-gray-300">{index + indexOfFirstSite + 1}</td>
                  <td className="p-4 border border-gray-300">{site.site}</td>
                  <td className="p-4 border border-gray-300">{site.employeeTotal}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className="border p-2 mr-2"
        >
          &lt; Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => handlePageChange(index + 1)} 
            className={`border p-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="border p-2 ml-2"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default DataTable;
