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
    const subCategories = [
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
        <div className="p-10 flex flex-col gap-8">
            <div className="flex gap-3">
                <BackButton />
                <h1 className="font-poppins font-semibold text-neutral-900/80 text-[24px]">
                    Update Knowledge base
                </h1>
            </div>
            <div className="grid bg-white px-[150px] py-[80px] p-10 rounded-3xl w-fit mx-auto">
                <div className="flex bg-neutral-200 items-center justify-center flex-col px-[55px] py-[34px] gap-10 w-fit">
                    <h2 className="poppins font-medium text-neutral-900/80 text-[20px]">
                        CATEGORY: General
                    </h2>
                    <Form className="w-[400px] grid gap-4">
                        <SelectInput
                            name="subcategory"
                            label="subcategory"
                            options={subCategories}
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
                            <Button type="submit">Submit</Button>
                            <Button type="button" color="outline">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UpdateKnowledgeBase;
