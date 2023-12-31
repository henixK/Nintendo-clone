import { Search } from "@acme/icons";

export default function SearchButton () {
  return (
    <div className="w-16 h-16 -mt-4 bg-primary-color rounded-full">
      <button className="w-full h-full text-3xl text-white">
        <Search />
      </button>
    </div>
  );
};
