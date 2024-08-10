import SearchPageContent from "@/pages/PlayerSearch/components/PlayerSearchContent"
import Loader from "@/pages/utils/LoadingPage"
import useAllPlayers from '@/hooks/useAllPlayers';

const PlayerSearch = () => {
  const { isLoading } = useAllPlayers(); // Fetch the loading state directly

  return (
    <div className="Search h-full">
       {isLoading ? <Loader /> : <SearchPageContent />}
    </div>
  );
}
 
export default PlayerSearch;