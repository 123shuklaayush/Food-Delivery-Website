import { Search } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  placeholder?: string;
}

const SearchBar = ({ placeholder }: Props) => {
  return (
    <form
      className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3`}
    >
      <Search
        strokeWidth={2.5}
        size={30}
        className="ml-1 text-orange-500 hidden md:block"
      />

      <input
        type="text"
        placeholder={placeholder || "Search"}
        className="border-none focus:outline-none flex-1"
      />

      <Button type="submit" className="rounded-full bg-orange-500">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
