import { useState, useRef, useEffect } from 'react';
import { BsDot } from 'react-icons/bs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopiedToast from '../../../components/KnowledgeBase/CopiedToast';
import complaints from '../../../data/complaints.json';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUser } from '../../../hooks/constants/axiosInstance';

const SingleComplaint = (props: any) => {
    let { state } = useLocation();
    const { title = '', list = [] } = state || {};

    const [open, setOpen] = useState(false);
    const timerRef = useRef(0);

    const navigate = useNavigate();

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);
    const handleClick = () => {
        setOpen(false);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            setOpen(true);
        }, 100);
    };
    const toDateString = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            // hour: 'numeric',
            // minute: 'numeric',
        });
    };

    useEffect(() => {
        if (title.length === 0) {
            const user = getUser();
            if (user === 'admin_user') {
                navigate('/admin/knowledge-base', { replace: true });
            } else {
                navigate('/knowledge-base', { replace: true });
            }
        }
    }, [title]);

    return (
        <div className="mx-auto w-full max-w-[888px] rounded-[30px] bg-white h-full p-10 flex gap-5 flex-col">
            <div className="flex flex-row justify-between">
                <h2 className="font-poppins font-bold text-[20px] text-neutral-800">
                    {title}
                </h2>
                <div className="flex flex-row gap-2">
                    <CopiedToast open={open} onOpenChange={setOpen}>
                        <CopyToClipboard text={title}>
                            <button
                                type="button"
                                className="grid items-center justify-center aspect-square bg-[#FDE7E8] rounded active:bg-pink/60 h-[35px] w-[35px] border border-[#CCC]"
                                onClick={handleClick}
                            >
                                <img
                                    src="/icons/copy.svg"
                                    alt=""
                                    className="h-[25px] object-contain"
                                />
                            </button>
                        </CopyToClipboard>
                    </CopiedToast>
                </div>
            </div>
            {list?.map((complaint: any) => (
                <div
                    className="grid grid-cols-[auto_1fr] gap-5"
                    key={complaint.id}
                >
                    <BsDot />
                    <div className="grid gap-1">
                        <p className="font-poppins text-base text-neutral-400">
                            {complaint.comment}
                        </p>
                        <p className="italic text-[14px] font-semibold text-neutral-400">
                            {toDateString(complaint.createdDate)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SingleComplaint;
