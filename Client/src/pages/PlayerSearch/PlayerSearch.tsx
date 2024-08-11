import SearchPageContent from "@/pages/PlayerSearch/components/PlayerSearchContent"
import Loader from "@/pages/utils/LoadingPage"
import useAll from '@/hooks/useAll';

const PlayerSearch = () => {
  const { isLoading } = useAll('players'); // Fetch the loading state directly

  return (
    <div className="Searchbg h-screen">
       {isLoading ? <Loader /> : <SearchPageContent />}
    </div>
  );
}
 
export default PlayerSearch;