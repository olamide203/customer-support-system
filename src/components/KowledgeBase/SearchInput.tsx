import React from 'react';

const SearchInput = () => {
    return (
        <div className="relative w-full grid grid-cols-1 grid-rows-1">
            <input
                placeholder="search by keywords"
                required
                className="h-[44px] w-full border border-[#CCC] bg-[#F2F2F2] rounded-lg p-2 px-4 text-neutral-900 outline-none placeholder:text-grey-2 focus:border-neutral-900 sm:text-base"
            />
            {/* <button
                className="absolute top-0 left-[20px] h-full w-[44px] bg-[#F2F2F2] rounded-lg grid items-center justify-center p-2"
                type="button"
            >
                <img src="/icons/search.svg" alt="" />
            </button> */}
        </div>
    );
};

export default SearchInput;
