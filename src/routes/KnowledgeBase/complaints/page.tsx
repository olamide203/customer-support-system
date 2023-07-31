import { Root as Separator } from '@radix-ui/react-separator';
import { useEffect, useState } from 'react';
import { ClassicSpinner } from 'react-spinners-kit';
import KnowledgeBaeItem from '../../../components/KnowledgeBase/Item';
import Pagination from '../../../components/KnowledgeBase/Pagination';
import { useGetIssues } from '../../../hooks/useUser';

const ComplaintsPage = (deatils: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const { data, error, mutate, isLoading } = useGetIssues();
    const changeItemsPerPage = (selected: { value: string } | null) => {
        if (selected) {
            setItemsPerPage(+selected.value);
        }
    };
    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected + 1);
    };

    useEffect(() => {
        var filter = { classification: 'COMPLAINT' };
        mutate(filter);
    }, []);

    const complaintsData = () => {
        return data?.filter(
            (listItem: any) =>
                listItem?.issue?.description
                    ?.toLowerCase()
                    .includes(deatils?.search.toLowerCase()) &&
                    listItem?.category?.parent?.description
                    ?.toLowerCase()
                    .includes(deatils?.category.toLowerCase())
        );
    };

    useEffect(() => {
        deatils.numOfRecords(data?.length);
    }, [data]);

    return (
        <>
            <div className="flex flex-col gap-6 py-4 max-w-screen-md">
                {/* {!isLoading && (
                    <div className="loading-container-no-bg">
                        <ClassicSpinner color={'#07178e'} />
                    </div>
                )} */}

                {complaintsData()?.map((complaint: any) => (
                    <KnowledgeBaeItem
                        id={complaint?.issue?.id}
                        title={complaint?.issue?.description}
                        description={complaint?.comments[0]?.comment}
                        created_at={complaint?.issue?.createdDate}
                        key={complaint?.issue?.id}
                        comments={complaint?.comments}
                        path={'complaints'}
                    />
                ))}
                {isLoading && <ClassicSpinner color={'#07178e'} size={17} />}
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
