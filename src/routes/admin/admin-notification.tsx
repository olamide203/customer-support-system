import BackButton from '../../components/BackButton';
import Card from '../../components/Dashboard/Card';
import Header from '../../components/Header';
import NotificationList from '../../components/List/NotificationList';

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
                    {new Array(20).fill('').map(() => (
                        <NotificationList
                            message="Admin Joke Silver approved your update request to the knowledge base blabaajabbabababbabbaabbj"
                            time="3 hours ago"
                            link="Goto Knowledge base"
                            key={Math.random()}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminNotification;
