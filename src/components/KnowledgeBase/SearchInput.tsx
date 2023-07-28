import React from 'react';

const SearchInput = (data: any) => {
    const handleClick = () => {
        console.log('clicked');
    };
    return (
        <div className="relative w-full grid grid-cols-1 grid-rows-1">
            <input
                placeholder="search by keywords"
                required
                className="h-[44px] w-full border border-[#CCC] bg-[#F2F2F2] rounded-lg p-2 px-4 text-neutral-900 outline-none placeholder:text-grey-2 focus:border-neutral-900 sm:text-base"
                onChange={(e) => data.onClick(e.target.value)}
                value={data.value}
            />
            <button
                className="absolute top-0 right-2 h-[40px] w-[44px] rounded-lg grid items-center justify-center p-2"
                type="button"
                onClick={handleClick}
            >
                <img src="/icons/search.svg" alt="" />
            </button>
        </div>
    );
};

export default SearchInput;
