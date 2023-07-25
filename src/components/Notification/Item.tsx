/* eslint-disable @typescript-eslint/no-shadow */
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import Dialog from './Dialog';
import { getInitials, getRelativeTime } from '../../utils';

interface NotificationProps {
    from: string;
    to: string;
    message: string;
    date: string;
}

const Notification = ({ from, message, date, to }: NotificationProps) => {
    const time = getRelativeTime(date);
    return (
        <div className="grid grid-cols-[auto_1fr] gap-4 items-center mx-auto">
            <Avatar fallback={getInitials(from)} />
            <div className="flex flex-col">
                <p className="text-xs text-neutral-500 font-poppins">
                    {message}
                </p>
                <div className="flex justify-between ">
                    <p className="text-xs text-neutral-500 font-bold">{time}</p>
                    {from === to ? (
                        <Link
                            to="/knowledge-base"
                            className="italic text-blue-400 underline"
                        >
                            Goto Dashboard
                        </Link>
                    ) : (
                        <Dialog>
                            <button
                                type="button"
                                className="italic text-blue-400 underline"
                            >
                                View Update
                            </button>
                        </Dialog>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notification;
