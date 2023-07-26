import React from 'react';
import { Root, Portal, Title, Content } from '@radix-ui/react-dialog';
import { BsDot } from 'react-icons/bs';
import Button from '../Button';

const AdminDialog = () => (
    <>
        {/* <Root>
            <Portal> */}
        <div className="flex rounded flex-col items-center rounded-[5px] gap-6 bg-neutral-100  mt-[100px] px-[70px] py-[100px]">
            {/* <Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-h-[80vh] overflow-y-auto max-w-[654px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-6 md:p-10 lg:py-[70px] lg:px-[100px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[400] font-poppins">
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
                                        dgjjkkiwnndjjnnnnnnnd hn dnd d nnd
                                        dndndddnd
                                    </p>
                                </div>
                                <div className="grid grid-cols-[auto_1fr] gap-5">
                                    <BsDot />

                                    <p className="font-poppins text-base text-neutral-[900]">
                                        You need to check your login details
                                        ghhfhhhcfhjk ghhjutresweatfhhhh
                                        dgjjkkiwnndjjnnnnnnnd hn dnd d nnd
                                        dndndddnd
                                    </p>
                                </div>
                                <div className="grid grid-cols-[auto_1fr] gap-5">
                                    <BsDot />

                                    <p className="font-poppins text-base text-neutral-[900]">
                                        You need to check your login details
                                        ghhfhhhcfhjk ghhjutresweatfhhhh
                                        dgjjkkiwnndjjnnnnnnnd hn dnd d nnd
                                        dndndddnd
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Content> */}
            <div className="flex items-center gap-20 py-0 px-33">
                <Button className="relative" color="outline">
                    Approve
                </Button>
                <Button className="relative" color="outline">
                    Reject
                </Button>
            </div>
        </div>
        {/* </Portal>
        </Root> */}
    </>
);

export default AdminDialog;
