import React from 'react';
import { Root, Portal, Title, Content } from '@radix-ui/react-dialog';
import { BsDot } from 'react-icons/bs';
import Button from '../Button';
import ConfirmationDialog from '../KnowledgeBase/ConfirmationDialog';

const AdminDialog = () => (
    <div className="bg-white w-[600px] h-full px-20 py-10 grid gap-6">
        <div className="flex flex-col gap-[30px] py-[30px]">
            <span className="text-neutral-900 m-0 text-[24px] font-semibold">
                View Request
            </span>
            <div className="grid grid-cols-[auto_1fr] gap-5">
                <span className="text-blue-400 italic text-[14px] font-semibold capitalize">
                    SENDER::
                </span>
                <p className="text-[14px] font-semibold capitalize">
                    Agent OGUNDIPE DAMILOLA
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
                        You need to check your login details ghhfhhhcfhjk
                        ghhjutresweatfhhhh dgjjkkiwnndjjnnnnnnnd hn dnd d nnd
                        dndndddnd
                    </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-5">
                    <BsDot />

                    <p className="font-poppins text-base text-neutral-[900]">
                        You need to check your login details ghhfhhhcfhjk
                        ghhjutresweatfhhhh dgjjkkiwnndjjnnnnnnnd hn dnd d nnd
                        dndndddnd
                    </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-5">
                    <BsDot />
                    <p className="font-poppins text-base text-neutral-[900]">
                        You need to check your login details ghhfhhhcfhjk
                        ghhjutresweatfhhhh dgjjkkiwnndjjnnnnnnnd hn dnd d nnd
                        dndndddnd
                    </p>
                </div>
            </div>
            <div className="flex justify-between p-[20px]">
                <ConfirmationDialog successMessage=" You request to update the knowledgebase has been successfully sent to the admin for approval.">
                    <Button className="relative " color="adminBlue400">
                        Approve
                    </Button>
                </ConfirmationDialog>
                <ConfirmationDialog
                    success={false}
                    rejectMessage="Update has been rejected and email has been
                sent to all stakeholders"
                >
                    <Button className="relative " color="adminOutline">
                        Reject
                    </Button>
                </ConfirmationDialog>
            </div>
        </div>
    </div>
);

export default AdminDialog;
