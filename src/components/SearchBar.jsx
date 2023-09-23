import React from "react";
import { Search, ArrowDown } from "@acme/icons";

const SearchBar = () => {
    return (
        <div className="border-b border-black hover:border-red-600 hover:text-red-600">
            <form className="flex items-center justify-between py-1 hover:fill-red-600">
                <div className="flex items-center gap-2 cursor-pointer">
                    <div>
                        <Search />
                    </div>
                    <input
                        className="text-sm font-thin outline-none w-[300px] hover:text-red-500 hover:placeholder:text-red-500"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="text-xs flex items-center gap-2">
                    <p className="text-sm font-normal hover:text-red-500">
                        All categories
                    </p>
                    <div>
                        <ArrowDown />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
