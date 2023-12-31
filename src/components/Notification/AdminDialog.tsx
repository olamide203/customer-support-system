import React, { useState } from 'react';
import { Root, Portal, Title, Content } from '@radix-ui/react-dialog';
import { BsDot } from 'react-icons/bs';
import Button from '../Button';
import ConfirmationDialog from '../KnowledgeBase/ConfirmationDialog';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApproveReject } from '../../hooks/useAdmin';
import SuccessModal from '../KnowledgeBase/SuccessModal';
import RejectDialog from '../KnowledgeBase/RejectDialog';
import { RingSpinner } from 'react-spinners-kit';

const AdminDialog = () => {
    let { state } = useLocation();
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/admin/request', { replace: true });
    };
    const { data, error, mutate, isLoading } = useApproveReject();
    const [visible, setVisible] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [shouldOpen, setShouldOpen] = useState<boolean>(false);
    const { info = [] } = state || {};
    const Submit = (status: boolean) => {
        var dataToSend = {
            issueId: info?.issue?.id,
            status: status ? 'Approved' : 'rejected',
        };

        mutate(dataToSend, {
            onSuccess: (response: any) => {
                if (status) {
                    setSuccess(true);
                } else {
                    setShouldOpen(true);
                }
            },
        });
    };

    const handleProceed = () => {
        setVisible(false);
        Submit(true);
    };

    const handleReject = () => {
        setVisible(false);
        Submit(false);
    };

    const handleCloseDialog = () => {
        setSuccess(false);
        setShouldOpen(false);
        navigateBack();
    };

    console.log('success\n', success, shouldOpen);

    return (
        <>
            <div className="bg-white w-[600px] h-full px-20 py-10 grid gap-6">
                {isLoading && (
                    <div className="loading-container-no-bg h-[900px]">
                        <RingSpinner color={'#07178e'} size={17} />
                    </div>
                )}
                <div className="flex flex-col gap-[30px] py-[30px]">
                    <span className="text-neutral-900 m-0 text-[24px] font-semibold">
                        View Request
                    </span>
                    <div className="grid grid-cols-[auto_1fr] gap-5">
                        <span className="text-blue-400 italic text-[14px] font-semibold capitalize">
                            SENDER::
                        </span>
                        <p className="text-[14px] font-semibold capitalize">
                            {info?.issue?.createdBy}
                        </p>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5">
                        <span className="text-blue-400 italic text-[14px] font-semibold capitalize">
                            Category:
                        </span>
                        <p className="text-[14px] font-semibold capitalize">
                            {info?.category?.parent?.description}
                            {info?.category?.description &&
                                ` > ${info?.category?.description}`}
                        </p>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5">
                        <span className="text-blue-400 italic text-[14px] font-semibold capitalize">
                            Subject:
                        </span>
                        <p className="text-[14px] font-semibold capitalize">
                            {info?.issue?.classification}
                        </p>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-5">
                        <span className="text-blue-400 italic text-[14px] font-semibold capitalize">
                            enquiry:
                        </span>
                        <p className="text-[14px] font-semibold capitalize">
                            {info?.issue?.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className="text-blue-400 italic text-[14px] font-semibold">
                            Response(s):
                        </span>

                        {info?.comments.map((item: any, index: any) => {
                            return (
                                <div
                                    className="grid grid-cols-[auto_1fr] gap-5"
                                    key={index}
                                >
                                    <BsDot />

                                    <p className="font-poppins text-base text-neutral-[900]">
                                        {item?.comment}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-between p-[20px]">
                        <ConfirmationDialog
                            toggleVisibility={() => setVisible(false)}
                            proceed={() => handleProceed()}
                        >
                            <Button className="relative " color="adminBlue400">
                                Approve
                            </Button>
                        </ConfirmationDialog>

                        <ConfirmationDialog
                            success={visible}
                            toggleVisibility={() => setVisible(false)}
                            proceed={() => handleReject()}
                        >
                            <Button className="relative " color="adminOutline">
                                Reject
                            </Button>
                        </ConfirmationDialog>

                        {success && (
                            <SuccessModal
                                toggleVisibility={handleCloseDialog}
                                visible={true}
                                message="Update has been successfuly approved and email
                                sent to all stakeholders."
                            />
                        )}
                        {shouldOpen && (
                            <RejectDialog
                                visible={true}
                                onClose={handleCloseDialog}
                                message="Update has been rejected and email has been sent to all stakeholders"
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDialog;
