import ReactPagniate from 'react-paginate';
import PerPageSelect from './PerPageSelect';

interface PaginationProps {
    onPageChange: (selectedItem: { selected: number }) => void;
    pageCount: number;
    currentPage: number;
    perPage: number;
    onChangeItemsPerPage: (selected: { value: string } | null) => void;
    totalItems: number;
}

function Pagination({
    onPageChange,
    pageCount,
    currentPage,
    perPage,
    totalItems,
    onChangeItemsPerPage,
}: PaginationProps) {
    return (
        <div className="flex justify-between font-poppins items-center gap-10">
            <p className="text-[14px] text-neutral-900/60 whitespace-nowrap">
                showing {(currentPage - 1) * perPage + 1} to{' '}
                {currentPage * perPage} of {totalItems}
            </p>

            <PerPageSelect onChange={onChangeItemsPerPage} />

            <ReactPagniate
                pageRangeDisplayed={3}
                pageCount={pageCount}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                renderOnZeroPageCount={null}
                onPageChange={onPageChange}
                forcePage={currentPage - 1}
                marginPagesDisplayed={2}
                containerClassName="flex flex-row gap-2 justify-center items-center"
                pageClassName="inline-flex rounded-md p-0 border-0"
                pageLinkClassName="w-10 aspect-square m-0 grid items-center justify-center"
                activeClassName="bg-blue-400 rounded text-white"
                previousClassName="inline-flex justify-center items-center rounded-none p-0 border-0; inline-flex rounded-l-lg"
                nextClassName="inline-flex btn rounded-none p-0 border-0; inline-flex rounded-r-lg"
                breakClassName="inline-flex btn rounded-none p-0 border-0; inline-flex"
                breakLinkClassName="w-10 aspect-square m-0 grid items-center"
                nextLinkClassName="w-10 aspect-square m-0 grid items-center"
                previousLinkClassName="w-10 aspect-square m-0 grid items-center"
            />
        </div>
    );
}

export default Pagination;
