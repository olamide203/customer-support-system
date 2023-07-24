interface KnowledgeBaseItemProps {
    title: string;
    description: string;
    created_at: string;
}

const KnowledgeBaeItem = ({
    title,
    description,
    created_at,
}: KnowledgeBaseItemProps) => {
    const dateString = new Date(created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return (
        <div className="grid gap-3">
            <div className="flex flex-row justify-between">
                <h2 className="font-poppins font-bold text-[14px] text-neutral-800">
                    {title}
                </h2>
                <div className="flex flex-row gap-2">
                    <button
                        type="button"
                        className="grid items-center justify-center aspect-square h-6 bg-pink/50 rounded active:bg-pink"
                    >
                        <img
                            src="/icons/copy.svg"
                            alt=""
                            className="h-4 object-contain"
                        />
                    </button>
                    <button
                        type="button"
                        className="grid items-center justify-center aspect-square h-6 rounded active:bg-blue-200 bg-blue-100"
                    >
                        <img
                            src="/icons/share.svg"
                            alt=""
                            className="h-4 object-contain"
                        />
                    </button>
                </div>
            </div>
            <p className="font-poppins text-xs text-neutral-400">
                {description}
            </p>
            <p className="italic text-[14px] font-semibold text-neutral-400">
                {dateString}
            </p>
        </div>
    );
};

export default KnowledgeBaeItem;
