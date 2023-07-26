import BackButton from '../../components/BackButton';
import Card from '../../components/Dashboard/Card';
import Header from '../../components/Header';
import NotificationList from '../../components/List/NotificationList';
import NotificationFilter from '../../components/Notification/Filter';
import DateInput from '../../components/Input/Date';

const AdminNotification = () => {
    return (
        <>
            <Header isAdmin />
            <div className="mt-[70px] bg-neutral-200 pt-[30px] px-[15vw]">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <BackButton />
                        <h1 className="font-poppins font-semibold text-neutral-900/80 text-[16px]sm:text-[24px] capitalize">
                            Notification
                        </h1>
                    </div>
                    <span className="text-sm text-blue-400 italic underline font-poppins">
                        Goto Dashboard
                    </span>
                </div>
                <div>
                    <hr className="my-[30px]" />
                </div>

                <div className="flex flex-row items-center justify-end max-w-[880px] mx-auto w-full gap-[30px]">
                    <NotificationFilter />
                    <div className="flex flex-row items-center justify-end gap-2">
                        <p className="font-bold text-[14px] whitespace-nowrap">
                            Date Range:
                        </p>
                        <DateInput label="From:" name="from" />
                        <DateInput label="To:" name="to" />
                    </div>
                </div>

                <div className="flex rounded flex-col items-center rounded-[20px] gap-6 bg-neutral-100  mt-[30px] p-[50px]">
                    {new Array(20).fill('').map(() => (
                        <NotificationList
                            message="Admin Joke Silver approved your update request to the knowledge base blabaajabbabababbabbaabbj"
                            time="3 hours ago"
                            link="Goto Knowledge base"
                            route="/admin/knowledge-base"
                            key={Math.random()}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminNotification;
