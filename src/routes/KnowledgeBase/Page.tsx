import { Outlet } from 'react-router-dom';
import { Root as Separator } from '@radix-ui/react-separator';
import SearchIniput from '../../components/KnowledgeBase/SearchInput';
import CategorySelect from '../../components/KnowledgeBase/CategorySelect';
import NavMenu from '../../components/KnowledgeBase/NavMenu';
import ComplaintsPage from './complaints/page';
import { useEffect, useState } from 'react';
import EnquiresPage from './enquires/page';
import RequestsPage from './requests/page';
import { useGetCategories } from '../../hooks/useUser';

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
    const [state, setState] = useState<Number>(1);
    const [search, setSearch] = useState<string>('');
    const [recordsNum, setRecords] = useState<any>(0);

    const { data, error, mutate, isLoading } = useGetCategories();

    // useEffect(() => {
    //     mutate();
    // }, []);

    useEffect(() => {
        setSearch('');
    }, [state]);
    return (
        <>
            <div className="bg-white flex flex-col items-center justify-center w-full p-[20px]">
                <h1 className="leading-4 w-full font-semibold uppercase text-neutral-800 text-center">
                    Knowledge Base
                </h1>
                <Separator className="bg-[#E8E8E8] data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
                <div className="self-end">
                    <h3 className="text-xs text-neutral-500">
                        Total Number of Records
                    </h3>
                    <span className="font-bold text-blue-400">
                        {recordsNum}
                    </span>
                </div>
            </div>
            <div className="bg-white w-full h-full p-10 grid gap-6">
                <div className="w-full max-w-[400px] mx-auto">
                    <SearchIniput
                        onClick={(e: any) => setSearch(e)}
                        value={search}
                    />
                </div>
                <div className="w-full grid justify-end">
                    <CategorySelect
                        options={catgegories}
                        label="Filter By Category:"
                        name="category"
                    />
                </div>
                <NavMenu state={state} onClick={(e: any) => setState(e)} />

                {state === 1 && (
                    <ComplaintsPage
                        search={search}
                        numOfRecords={(e: any) => setRecords(e)}
                    />
                )}
                {state === 2 && (
                    <EnquiresPage
                        search={search}
                        numOfRecords={(e: any) => setRecords(e)}
                    />
                )}
                {state === 3 && (
                    <RequestsPage
                        search={search}
                        numOfRecords={(e: any) => setRecords(e)}
                    />
                )}

                {/* <Outlet /> */}
            </div>
        </>
    );
};

export default KnowledgeBasePage;
