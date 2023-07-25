import React from 'react';
import {
    Root,
    Trigger,
    Portal,
    Overlay,
    Title,
    Close,
    Content,
} from '@radix-ui/react-dialog';
import { RxCross2 } from 'react-icons/rx';
import { BsDot } from 'react-icons/bs';

interface DialogProps {
    children: React.ReactNode;
}

const Dialog = ({ children }: DialogProps) => (
    <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
            <Overlay className="bg-neutral-900/10 data-[state=open]:animate-overlayShow fixed inset-0 z-[300]" />
            <Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-h-[80vh] overflow-y-auto max-w-[654px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-6 md:p-10 lg:py-[70px] lg:px-[100px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[400] font-poppins">
                <Title className="text-neutral-900 m-0 text-[24px] font-semibold">
                    New Update
                </Title>
                <div className="flex flex-col gap-[30px] py-[30px]">
                    <div className="grid grid-cols-[auto_1fr] gap-5">
                        <span className="text-blue-400 italic text-[14px] font-semibold capitalize">
                            category:
                        </span>
                        <p className="text-[14px] font-semibold capitalize">
                            Account &gt; Dormancy{' '}
                        </p>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5">
                        <span className="text-blue-400 italic text-[14px] font-semibold capitalize">
                            Subject:
                        </span>
                        <p className="text-[14px] font-semibold capitalize">
                            complaint
                        </p>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5">
                        <span className="text-blue-400 italic text-[14px] font-semibold capitalize">
                            enquiry:
                        </span>
                        <p className="text-[14px] font-semibold capitalize">
                            My bank account is dormant, what can i do?
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="text-blue-400 italic text-[14px] font-semibold">
                            Response(s):
                        </span>
                        <div className="grid grid-cols-[auto_1fr] gap-5">
                            <BsDot />

                            <p className="font-poppins text-base text-neutral-[900]">
                                You need to check your login details
                                ghhfhhhcfhjk ghhjutresweatfhhhh
                                dgjjkkiwnndjjnnnnnnnd hn dnd d nnd dndndddnd
                            </p>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] gap-5">
                            <BsDot />

                            <p className="font-poppins text-base text-neutral-[900]">
                                You need to check your login details
                                ghhfhhhcfhjk ghhjutresweatfhhhh
                                dgjjkkiwnndjjnnnnnnnd hn dnd d nnd dndndddnd
                            </p>
                        </div>
                        <div className="grid grid-cols-[auto_1fr] gap-5">
                            <BsDot />

                            <p className="font-poppins text-base text-neutral-[900]">
                                You need to check your login details
                                ghhfhhhcfhjk ghhjutresweatfhhhh
                                dgjjkkiwnndjjnnnnnnnd hn dnd d nnd dndndddnd
                            </p>
                        </div>
                    </div>
                </div>

                <Close asChild>
                    <button
                        className="text-blue-400 hover:text-blue-500 border border-blue-400 absolute top-6 right-6 md:top-10 md:right-10 lg:top-[75px] lg:right-[100px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center"
                        aria-label="Close"
                        type="button"
                    >
                        <RxCross2 />
                    </button>
                </Close>
            </Content>
        </Portal>
    </Root>
);

export default Dialog;
