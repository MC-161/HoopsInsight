import useAll from "@/hooks/useAll";
import Loader from "../utils/LoadingPage";
import SearchPageContent from "@/pages/TeamSearch/components/TeamSearchContent"
const TeamSearch = () => {
  const {isLoading} = useAll('teams')
  return (
    <div className="Searchbg h-full">
      {isLoading ? <Loader/> : <SearchPageContent/> }
    </div>
  );
}
 
export default TeamSearch;