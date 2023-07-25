import { useState, useRef, useEffect } from 'react';
import { BsDot } from 'react-icons/bs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopiedToast from '../../../components/KnowledgeBase/CopiedToast';
import complaints from '../../../data/complaints.json';

const SingleComplaint = () => {
    const { id, title, description } = complaints[0];

    const [open, setOpen] = useState(false);
    const timerRef = useRef(0);

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
            hour: 'numeric',
            minute: 'numeric',
        });
    };
    return (
        <div className="mx-auto w-full max-w-[888px] rounded-[30px] bg-white h-full p-10 flex gap-5 flex-col">
            <div className="flex flex-row justify-between">
                <h2 className="font-poppins font-bold text-[20px] text-neutral-800">
                    {title}
                </h2>
                <div className="flex flex-row gap-2">
                    <CopiedToast open={open} onOpenChange={setOpen}>
                        <CopyToClipboard text={description}>
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
            {complaints.map((complaint) => (
                <div
                    className="grid grid-cols-[auto_1fr] gap-5"
                    key={complaint.id}
                >
                    <BsDot />
                    <div className="grid gap-1">
                        <p className="font-poppins text-base text-neutral-400">
                            {complaint.description}
                        </p>
                        <p className="italic text-[14px] font-semibold text-neutral-400">
                            {toDateString(complaint.created_at)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SingleComplaint;
