import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopiedToast from './CopiedToast';
import { getUser } from '../../hooks/constants/axiosInstance';

interface KnowledgeBaseItemProps {
    id: number;
    title: string;
    description: string;
    created_at: string;
    comments?: any;
    path?: string;
}

const KnowledgeBaeItem = ({
    id,
    title,
    description,
    created_at,
    comments,
    path,
}: KnowledgeBaseItemProps) => {
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
    const dateString = new Date(created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const user = getUser();
    return (
        <div className="grid gap-3">
            <div className="flex flex-row justify-between">
                <h2 className="font-poppins font-bold text-[14px] text-neutral-800">
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
            <p className="font-poppins text-xs text-neutral-400">
                {description}{' '}
                <Link
                    to={`${
                        user === 'admin_user' ? '/admin/' : '/'
                    }knowledge-base/${path}/${id}`}
                    state={{ list: comments, title: title, dateCreated: created_at }}
                    className="font-bold text-neutral-800 px-2"
                >
                    See more
                </Link>
            </p>
            <p className="italic text-[14px] font-semibold text-neutral-400">
                {dateString}
            </p>
        </div>
    );
};

export default KnowledgeBaeItem;
