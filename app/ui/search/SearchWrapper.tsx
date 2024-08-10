import Search from "./Search";
import { SearchProvider } from "./SearchContext";
import { Team } from "@/app/lib/definitions";

interface Props {
  teams: Team[];
}

const SearchWrapper = ({ teams }: Props) => {
  return (
    <SearchProvider>
      <Search teams={teams} />
    </SearchProvider>
  );
};

export default SearchWrapper;
