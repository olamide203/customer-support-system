import { Root as Separator } from '@radix-ui/react-separator';
import { useEffect, useState } from 'react';
import { ClassicSpinner } from 'react-spinners-kit';
import KnowledgeBaeItem from '../../../components/KnowledgeBase/Item';
import Pagination from '../../../components/KnowledgeBase/Pagination';
import { useGetIssues } from '../../../hooks/useUser';

const EnquiresPage = (details: any) => {
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
        var filter = { classification: 'ENQUIRY' };
        mutate(filter);
    }, []);

    const enquiresData = () => {
        if (details?.search?.length === 0 && details?.category.length === 0) {
            return data?.map((item: any) => item);
        } else if (details?.search !== 0 && details?.category.length === 0) {
            return data?.filter((listItem: any) =>
                listItem?.issue?.description
                    ?.toLowerCase()
                    .includes(details?.search.toLowerCase())
            );
        } else if (
            details?.search.length === 0 &&
            details?.category.length !== 0
        ) {
            return data?.filter((listItem: any) =>
                listItem?.category?.parent?.description
                    ?.toLowerCase()
                    .includes(details?.category.toLowerCase())
            );
        } else {
            return data?.filter(
                (listItem: any) =>
                    listItem?.issue?.description
                        ?.toLowerCase()
                        .includes(details?.search.toLowerCase()) &&
                    listItem?.category?.parent?.description
                        ?.toLowerCase()
                        .includes(details?.category.toLowerCase())
            );
        }
    };

    useEffect(() => {
        details.numOfRecords(data?.length);
    }, [data]);
    const start = currentPage === 1 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const stop = currentPage * itemsPerPage;
    // console.log(enquiresData(),details?.search.length === 0 && details?.category === '' );

    return (
        <>
            <div className="flex flex-col gap-6 py-4 max-w-screen-md">
                {/* {!isLoading && (
                    <div className="loading-container-no-bg">
                        <ClassicSpinner color={'#07178e'} />
                    </div>
                )} */}

                {enquiresData()
                    ?.splice(start, stop)
                    ?.map((enquires: any) => (
                        <KnowledgeBaeItem
                            id={enquires?.issue?.id}
                            title={enquires?.issue?.description}
                            description={enquires?.comments[0]?.comment}
                            created_at={enquires?.issue?.createdDate}
                            key={enquires?.issue?.id}
                            comments={enquires?.comments}
                            path={'enquires'}
                        />
                    ))}
                {isLoading && <ClassicSpinner color={'#07178e'} size={17} />}
            </div>
            <Separator className="bg-neutral-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[4px]" />
            <Pagination
                pageCount={enquiresData()?.length / itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                perPage={itemsPerPage}
                onChangeItemsPerPage={changeItemsPerPage}
                totalItems={enquiresData()?.length}
            />
        </>
    );
};

export default EnquiresPage;
