import { Search } from "@acme/icons";

export default function SearchButton () {
  return (
    <div className="w-[60px] h-[60px] -mt-4 bg-primary-color rounded-full">
      <button className="w-full h-full text-3xl text-white">
        <Search />
      </button>
    </div>
  );
};
