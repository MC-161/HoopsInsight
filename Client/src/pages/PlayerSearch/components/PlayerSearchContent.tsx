import { useState, useEffect, KeyboardEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'; 
import useAllPlayers from '@/hooks/useAllPlayers';
import { Player } from '@/types/Search/SearchTypes'; 
import useResponsivePagination from '@/hooks/ResPagination';
import PlayerCard from './PlayerCard';

const PlayerSearchContent = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);

  const playersPerPage = useResponsivePagination();
  const { data, isLoading, error } = useAllPlayers();

  useEffect(() => {
    // Log the data to check if it is being fetched properly
    console.log('Data:', data);
    console.log('Is Loading:', isLoading);
    console.log('Error:', error);
  }, [data, isLoading, error]);

  useEffect(() => {
    // Reset search results when data changes
    if (data) {
      setFilteredPlayers(data);
    }
  }, [data]);

  // Function to handle the search
  const handleSearch = () => {
    const results = data?.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];
    setFilteredPlayers(results);
    setCurrentPage(1); // Reset to the first page of results
  };

  // Function to handle Enter key press
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
            onKeyDown={handleKeyDown} // Add keyDown event handler
          />
          <Button type="button" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </section>

      <section className="results mt-4 w-11/12 text-primary-main rounded-md">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {!isLoading && !error && (
          <div>
            <ul className='grid grid-cols-2 md:grid-cols-5 gap-2'>
              {currentPlayers.length > 0 ? (
                currentPlayers.map(player => (
                  <PlayerCard key={player._id} player={player} />
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
