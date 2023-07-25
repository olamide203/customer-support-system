import { useState } from 'react';
import { Root as Separator } from '@radix-ui/react-separator';
import Pagination from '../../../components/KnowledgeBase/Pagination';
import KnowledgeBaeItem from '../../../components/KnowledgeBase/Item';
import complaints from '../../../data/complaints.json';

const ComplaintsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const changeItemsPerPage = (selected: { value: string } | null) => {
        if (selected) {
            setItemsPerPage(+selected.value);
        }
    };
    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected + 1);
    };
    return (
        <>
            <div className="flex flex-col gap-6 py-4 max-w-screen-md">
                {complaints.map((complaint) => (
                    <KnowledgeBaeItem
                        id={complaint.id}
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
        </>
    );
};

export default ComplaintsPage;
