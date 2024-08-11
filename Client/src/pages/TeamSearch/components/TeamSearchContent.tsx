import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useAll from "@/hooks/useAll";
import { useState, useEffect, KeyboardEvent } from "react";
import { Team } from "@/types/Search/SearchTypes";
import TeamCard from "./TeamCard";

const SearchPageContent = () => {
  const { data, isLoading, error } = useAll("teams");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);

  useEffect(() => {
    // Log the data to check if it is being fetched properly
    console.log('Data:', data);
    console.log('Is Loading:', isLoading);
    console.log('Error:', error);
  }, [data, isLoading, error]);

  useEffect(() => {
    // Reset search results when data changes
    if (data) {
      setFilteredTeams(data);
    }
  }, [data]);

  // Function to handle the search
  const handleSearch = () => {
    const results =
      data?.filter((player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];
    setFilteredTeams(results);
  };

  // Function to handle Enter key press
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const currentTeams = filteredTeams;

  return (
    <section className="searchPageContent flex flex-col items-center justify-center">
      <section className="title bar lg:w-1/2 mt-24 flex flex-col items-center gap-3">
        <p className="text-primary-main text-xl font-semibold">Search Team</p>
        <div className="flex w-full max-w-md items-center space-x-1">
          <Input
            type="text"
            placeholder="Enter Player Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown} // Add keyDown event handler
          />
          <Button className="border-2" type="button" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </section>
      <section className="results mt-5 w-11/12 h-[550px] overflow-y-scroll overflow-x-hidden">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {!isLoading && !error && (
          <div>
            <ul className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-3">
              {currentTeams.map((team) => (
                <TeamCard key={team._id} team={team} />
              ))}
            </ul>
          </div>
        )}
      </section>
    </section>
  );
};

export default SearchPageContent;
