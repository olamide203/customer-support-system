import { Link } from 'react-router-dom';

interface Props {
    message: string;
    time: string;
    link: string;
    route: string;
}

const NotificationList = ({ message, time, link, route }: Props) => {
    return (
        <div className="flex gap-3">
            <div className="bg-blue-100 font-bold  flex justify-center items-center w-[50px] h-[50px] rounded-full">
                JK
            </div>
            <div>
                <span className="font-poppins text-sm text-neutral-500">
                    {message}
                </span>
                <div className="flex justify-between">
                    <span className="font-poppins text-sm">{time}</span>
                    <Link
                        to={route}
                        className="text-blue-400 text-sm font-poppins italic underline"
                    >
                        {link}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotificationList;
