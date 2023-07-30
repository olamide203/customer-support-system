import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Card from '../../components/Dashboard/Card';
import Header from '../../components/Header';
import NotificationList from '../../components/List/NotificationList';
import { useGetRequest } from '../../hooks/useAdmin';
import { useEffect, useState } from 'react';
import { RingSpinner } from 'react-spinners-kit';

const AdminRequest = () => {
    const { data, error, mutate, isLoading } = useGetRequest();

    const [filterBy, setFilterBy] = useState<{
        all: string | null;
        'seven days': string | null;
        today: string | null;
        endDate?: string | null;
        'start date'?: string | null;
    }>({
        all: 'all',
        'seven days': null,
        today: null,
        endDate: null,
        'start date': null,
    });

    useEffect(() => {
        mutate(filterBy);
    }, [filterBy]);

    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [minDate, setMinDate] = useState<string>('');

    const updateFilter = (value: string, type?: string, fieldName?: string) => {
        if (type === 'filter') {
            if (value === 'sevendays') {
                setFilterBy({
                    ...filterBy,
                    all: null,
                    'seven days': 'sevendays',
                    today: null,
                });
            } else {
                setFilterBy({
                    ...filterBy,
                    all: 'all',
                    'seven days': null,
                    today: null,
                });
            }
        } else if (type === 'date') {
            if (fieldName === 'start') {
                setEndDate('');
                const dateObject = new Date(value);
                dateObject.setDate(dateObject.getDate() + 1);
                const updatedDateValue = dateObject.toISOString().slice(0, 10);
                setStartDate(value);
                setMinDate(updatedDateValue);
            } else if (fieldName === 'end') {
                setEndDate(value);
                if (startDate.length !== 0) {
                    setFilterBy({
                        all: null,
                        'seven days': null,
                        today: null,
                        endDate: value,
                        'start date': startDate,
                    });
                }
            }
        }
    };

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
                    <select
                        className="border-[1px] p-2 rounded-[5px] border-neutral-400 bg-transparent"
                        onChange={(e) => updateFilter(e.target.value, 'filter')}
                    >
                        <option value={'sevendays'}>Last 7 days</option>
                        <option value={'all'}>Last month</option>
                    </select>
                    <div className="flex gap-2 items-center">
                        <span className="font-semibold">Date Range:</span>
                        <span>From</span>
                        <input
                            className="border-[1px] p-2 rounded-[5px] border-neutral-400 bg-transparent"
                            type="date"
                            onChange={(e) =>
                                updateFilter(e.target.value, 'date', 'start')
                            }
                            value={startDate}
                        />
                        <span>To</span>
                        <input
                            className="border-[1px] p-2 rounded-[5px] border-neutral-400 bg-transparent"
                            type="date"
                            value={endDate}
                            onChange={(e) =>
                                updateFilter(e.target.value, 'date', 'end')
                            }
                            min={minDate}
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
