import { useState } from 'react';
import BackButton from '../components/BackButton';
import { Root as Separator } from '@radix-ui/react-separator';
import NavMenu from '../components/KowledgeBase/NavMenu';
import KnowledgeBaeItem from '../components/KowledgeBase/Item';
import SearchIniput from '../components/KowledgeBase/SearchInput';
import CategorySelect from '../components/KowledgeBase/CategorySelect';
import Pagination from '../components/KowledgeBase/Pagination';
import complaints from '../data/complaints.json';

const catgegories = [
    {
        value: 'all',
        label: 'All',
    },
    {
        value: 'general',
        label: 'General',
    },
    {
        value: 'login',
        label: 'Login',
    },
    {
        value: 'sign up',
        label: 'SignUp',
    },
    {
        value: 'password',
        label: 'Password',
    },
];

const KnowledgeBasePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const changeItemsPerPage = ({ value }: { value: number }) => {
        setItemsPerPage(value);
    };
    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected + 1);
    };
    return (
        <div className="md:p-10 p-3 grid grid-rows-[auto_auto_1fr] gap-10 font-poppins h-full overflow-x-auto">
            <div className="flex gap-3">
                <BackButton />
                <h1 className="font-poppins font-semibold text-neutral-900/80 text-[16px]sm:text-[24px] capitalize">
                    Knowledge base
                </h1>
            </div>
            <div className="bg-white flex flex-col items-center justify-center w-full p-[20px]">
                <h1 className="leading-4 w-full font-semibold uppercase text-neutral-800 text-center">
                    Knowledge Base
                </h1>
                <Separator className="bg-neutral-900 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
                <div className="self-end">
                    <h3 className="text-xs text-neutral-500">
                        Total Number of Records
                    </h3>
                    <span className="font-bold text-blue-400">10</span>
                </div>
            </div>
            <div className="bg-white w-full h-full p-10 grid gap-6">
                <div className="w-full max-w-[400px] mx-auto">
                    <SearchIniput />
                </div>
                <div className="w-full grid justify-end">
                    <CategorySelect
                        options={catgegories}
                        label="Filter By Category:"
                        name="category"
                    />
                </div>
                <NavMenu />
                <div className="flex flex-col gap-6 py-4">
                    {complaints.map((complaint) => (
                        <KnowledgeBaeItem
                            title={complaint.title}
                            description={complaint.description}
                            created_at={complaint.created_at}
                            key={complaint.id}
                        />
                    ))}
                </div>
                <Separator className="bg-neutral-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[4px]" />
                <Pagination
                    pageCount={5}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    perPage={itemsPerPage}
                    onChangeItemsPerPage={changeItemsPerPage}
                    totalItems={50}
                />
            </div>
        </div>
    );
};

export default KnowledgeBasePage;
