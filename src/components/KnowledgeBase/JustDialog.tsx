import { useState } from 'react';
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
import SuccessDialog from './SuccessDialog';
import { useNavigate } from 'react-router-dom';

interface DialogProps {
    successMessage: string;
    visible: boolean;
    toggleVisibility: () => void;
    proceed: () => void;
}

const JustDialog = ({
    successMessage,
    visible,
    toggleVisibility,
    proceed,
}: DialogProps) => {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1);
    };
 
    return (
        <Root open={visible} onOpenChange={toggleVisibility}>
            <Portal>
                <Overlay className="bg-neutral-900/10 data-[state=open]:animate-overlayShow fixed inset-0 z-[300]" />
                <Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-[90vw] max-h-[80vh] overflow-y-auto max-w-[394px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-6 md:p-10  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[400] font-poppins">
                    <div className="grid items-center justify-center w-full gap-[18px]">
                        <img
                            src="/icons/question.svg"
                            alt=""
                            className="w-[30px] aspect-square object-contain mx-auto"
                        />
                        <Title className="text-neutral-800 m-0 text-[24px] font-semibold text-center">
                            Confirmation
                        </Title>
                        <p className="text-center text-xs text-neutral-500 tracking-[0.2px]">
                            Please confirm that you want to proceed with this
                            request
                        </p>
                        <div className="flex justify-between">
                            <Button onClick={() => proceed()}>proceed</Button>

                            <Button onClick={toggleVisibility} color="outline">
                                cancel
                            </Button>
                        </div>
                    </div>
                </Content>
            </Portal>
        </Root>
    );
};

export default JustDialog;
