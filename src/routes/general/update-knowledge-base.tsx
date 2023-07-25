import { useState } from 'react';
import { Form } from 'react-router-dom';
import SelectInput from '../../components/Input/Select';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import TextArea from '../../components/Input/Textarea';

const UpdateKnowledgeBase = () => {
    const [subject, setSubject] = useState('');
    const handleChange = (
        selected: { value: string; label: string } | null
    ) => {
        if (selected) {
            setSubject(selected.value);
        }
    };
    const categories = [
        { value: 'login', label: 'Login' },
        { value: 'sign up', label: 'Sign Up' },
        { value: 'forgot password', label: 'Forgot Password' },
    ];
    const subjects = [
        { value: 'complaint', label: 'Complaint' },
        { value: 'enquiry', label: 'Enquiry' },
        { value: 'request', label: 'Request' },
    ];
    return (
        <div className="md:p-10 p-3 flex flex-col gap-8">
            <div className="flex gap-3">
                <BackButton />
                <h1 className="font-poppins font-semibold text-neutral-900/80 text-[16px]sm:text-[24px]">
                    Update Knowledge base
                </h1>
            </div>
            <div className="grid bg-white max-w-screen-md rounded-3xl p-4 py-[80px] mx-auto w-full">
                <div className="flex bg-white sm:bg-neutral-200 items-center justify-center flex-col gap-10 w-full sm:w-[420px] mx-auto sm:p-10">
                    <Form className="w-full grid gap-4">
                        <SelectInput
                            name="category"
                            label="category"
                            options={categories}
                            placeholder=""
                        />
                        <SelectInput
                            name="subject"
                            label="subject"
                            options={subjects}
                            onChange={handleChange}
                            placeholder=""
                        />
                        {subject && (
                            <>
                                <TextArea name={subject} label={subject} />
                                <TextArea name="response" label="response" />
                            </>
                        )}
                        <div className="flex justify-between w-full py-8">
                            <Button type="submit">update</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UpdateKnowledgeBase;
