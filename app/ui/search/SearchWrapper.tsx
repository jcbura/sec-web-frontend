import Search from "./Search";
import { SearchProvider } from "./SearchContext";
import { Team } from "@/app/lib/definitions";

interface Props {
  teams: Team[];
  isMobile: boolean;
}

const SearchWrapper = ({ teams, isMobile }: Props) => {
  return (
    <SearchProvider>
      <Search teams={teams} isMobile={isMobile} />
    </SearchProvider>
  );
};

export default SearchWrapper;
