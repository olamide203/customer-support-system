import React from 'react';
import {
    Root,
    Trigger,
    Portal,
    Overlay,
    Title,
    Action,
    Cancel,
    Content,
} from '@radix-ui/react-alert-dialog';
import Button from '../Button';

interface DialogProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Dialog = ({ children, onClose }: DialogProps) => {
    return (
        <Root>
            <Trigger asChild>{children}</Trigger>
            <Portal>
                <Overlay className="bg-neutral-900/10 data-[state=open]:animate-overlayShow fixed inset-0 z-[300]" />
                <Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-h-[80vh] overflow-y-auto max-w-[394px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-6 md:p-10  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[400] font-poppins">
                    <div className="grid items-center justify-center w-full gap-[18px]">
                        <img
                            src="/icons/check.svg"
                            alt=""
                            className="w-[30px] aspect-square object-contain mx-auto"
                        />
                        <Title className="text-neutral-800 m-0 text-[24px] font-semibold text-center">
                            Success!
                        </Title>
                        <p className="text-center text-xs text-neutral-500 tracking-[0.2px]">
                            You request to update the knowledgebase has b been
                            successfully sent to the admin for approval.
                        </p>
                        <div className="flex justify-center">
                            <Action asChild>
                                <Button onClick={onClose}>ok</Button>
                            </Action>
                        </div>
                    </div>
                </Content>
            </Portal>
        </Root>
    );
};

export default Dialog;
