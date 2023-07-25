import { Outlet } from 'react-router-dom';
import BackButton from '../components/BackButton';
import DateInput from '../components/Input/Date';
import Notification from '../components/Notification/Item';
import NotificationFilter from '../components/Notification/Filter';
import notifications from '../data/notifications.json';

const NotificationsPage = () => {
    return (
        <>
            <div className="flex gap-3 py-[30px] border-b border-b-[#CCC] px-[35px] items-center fixed top-[70px] w-full bg-neutral-200 z-[50]">
                <BackButton />
                <h1 className="font-poppins font-semibold text-neutral-900/80 text-[16px]sm:text-[24px] capitalize">
                    Notifications
                </h1>
            </div>
            <div className="p-10 grid grid-rows-[auto_auto_1fr] gap-10 font-poppins h-full overflow-x-auto mt-[75px]">
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
                <div className="max-w-[880px] mx-auto bg-white w-full p-10 grid gap-6 rounded-[30px] py-[50px]">
                    {notifications.map((notification) => (
                        <Notification
                            to={notification.to}
                            key={notification.id}
                            from={notification.from}
                            message={notification.message}
                            date={notification.date}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default NotificationsPage;
