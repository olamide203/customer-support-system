interface Props {
    message: string;
    time: string;
    link: string;
}

const NotificationList = ({ message, time, link }: Props) => {
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
                    <a className="text-blue-400 text-sm font-poppins italic underline">
                        {link}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotificationList;
