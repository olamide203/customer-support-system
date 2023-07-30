import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Card from '../../components/Dashboard/Card';
import Header from '../../components/Header';
import NotificationList from '../../components/List/NotificationList';
import { useGetRequest } from '../../hooks/useAdmin';
import { useEffect } from 'react';
import { RingSpinner } from 'react-spinners-kit';

const AdminRequest = () => {
    const { data, error, mutate, isLoading } = useGetRequest();

    useEffect(() => {
        var filter = {
            all: 'all',
            'seven days': null,
            today: null,
            endDate: null,
            'start date': null,
        };
        mutate(filter);
    }, []);

    // {
    //     "all":"all",
    //     "seven days":"sevendays",
    //     "today":"today",
    //     "endDate":"2023-07-26",
    //     "start date":2023-07-10"
    //     }
    return (
        <>
            <Header isAdmin />

            <div className="mt-[70px] bg-neutral-200 pt-[30px] px-[15vw]">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <BackButton />
                        <h1 className="font-poppins font-semibold text-neutral-900/80 text-[16px]sm:text-[24px] capitalize">
                            Request
                        </h1>
                    </div>
                    <Link
                        to="/admin"
                        className="text-sm text-blue-400 italic underline font-poppins"
                    >
                        Goto Dashboard
                    </Link>
                </div>
                <div>
                    <hr className="my-[30px]" />
                </div>
                <div className="flex gap-4 font-poppins items-center justify-end">
                    <span className="font-semibold">Filter By:</span>
                    <select className="border-[1px] p-2 rounded-[5px] border-neutral-400 bg-transparent">
                        <option>Last 7 days</option>
                        <option>Last month</option>
                    </select>
                    <div className="flex gap-2 items-center">
                        <span className="font-semibold">Date Range:</span>
                        <span>From</span>
                        <input
                            className="border-[1px] p-2 rounded-[5px] border-neutral-400 bg-transparent"
                            type="date"
                        />
                        <span>To</span>
                        <input
                            className="border-[1px] p-2 rounded-[5px] border-neutral-400 bg-transparent"
                            type="date"
                        />
                    </div>
                </div>
                <div className="flex rounded flex-col items-center rounded-[20px] gap-6 bg-neutral-100  mt-[30px] p-[50px]">
                    {isLoading ? (
                        <div className="">
                            <RingSpinner color={'#07178e'} size={17} />{' '}
                        </div>
                    ) : (
                        data?.map((item: any, index: any) => {
                            const initials = item?.issue?.createdBy
                                .split(' ')
                                .map((word: string) => word.charAt(0))
                                .join('');

                            return (
                                <NotificationList
                                    message={item?.issue?.description}
                                    time={item?.issue?.createdDate}
                                    link="View Request"
                                    route="/admin/view-request-dialog"
                                    // route={`/admin/request/${i}`}
                                    key={index}
                                    initials={initials}
                                    data={item}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminRequest;
