import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button"

const SearchBar = () => {
  return (
    <div className="SearchBar flex w-full max-w-sm items-center space-x-2">
      <Input className="dark" type="Search" placeholder="Search Player" />
      <Button className="dark text-white" variant={"outline"}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
