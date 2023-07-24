import { Root, Title, Viewport } from '@radix-ui/react-toast';
import { FaSquareCheck } from 'react-icons/fa6';

interface CopiedToastProps {
    open: boolean;
    onOpenChange: (x: boolean) => void;
    children: React.ReactNode;
}

const CopiedToast = ({ open, onOpenChange, children }: CopiedToastProps) => {
    return (
        <>
            {children}
            <Root
                className="bg-white rounded-md border-l-8 border-l-blue-600 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
                open={open}
                onOpenChange={onOpenChange}
            >
                <Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
                    <FaSquareCheck className="mr-[5px] text-blue-300 text-[30px] inline-block" />
                    Text Copied to clipboard
                </Title>
            </Root>
            <Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
        </>
    );
};

export default CopiedToast;
