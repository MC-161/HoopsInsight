import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input'; // Ensure this path is correct
import { Button } from '@/components/ui/button'; // Ensure this path is correct
import useAllPlayers from '@/hooks/useAllPlayers';

const PlayerSearchContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [playersPerPage] = useState(20); // Number of players to display per page

  const { data, isLoading, error } = useAllPlayers();

  useEffect(() => {
    // Log the data to check if it is being fetched properly
    console.log('Data:', data);
    console.log('Is Loading:', isLoading);
    console.log('Error:', error);
  }, [data, isLoading, error]);

  // Filter players based on the search term
  const filteredPlayers = data?.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Pagination logic
  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = filteredPlayers.slice(indexOfFirstPlayer, indexOfLastPlayer);

  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="searchPageContent h-screen w-full flex flex-col items-center">
      <section className="title bar mt-24 flex flex-col gap-2 items-center lg:w-1/2">
        <p className="text-primary-main font-bold text-2xl backdrop-blur-md p-2 rounded-lg">
          Search Player
        </p>
        <div className="flex w-full max-w-md items-center space-x-1">
          <Input
            type="text"
            placeholder="Enter Player Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="button" onClick={() => {/* Handle search if needed */}}>
            Search
          </Button>
        </div>
      </section>

      <section className="results mt-4 w-11/12 text-primary-main rounded-md">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {!isLoading && !error && (
          <div>
            <ul className='grid grid-cols-5 gap-2'>
              {currentPlayers.length > 0 ? (
                currentPlayers.map(player => (
                  <div key={player._id} className=" backdrop-blur-md p-10 h-32 border-2 text-center">
                    {player.name}
                  </div>
                ))
              ) : (
                <p>No players available</p>
              )}
            </ul>

            {/* Pagination Controls */}
            <div className="pagination mt-4 flex justify-center space-x-2">
              <Button
                type="button"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <p>Page {currentPage} of {totalPages}</p>
              <Button
                type="button"
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default PlayerSearchContent;

