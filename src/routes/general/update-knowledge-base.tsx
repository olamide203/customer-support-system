/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import ConfirmationDialog from '../../components/KnowledgeBase/ConfirmationDialog';
import BackButton from '../../components/BackButton';
import TextArea from '../../components/Input/Textarea';
import SelectInput from '../../components/Select/Index';
import categories from '../../data/categories';
import subjects from '../../data/subjects';

const UpdateKnowledgeBase = () => {
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [responseCount, setResponseCount] = useState(1);

    const incrementResponseCount = () => {
        setResponseCount((prev) => prev + 1);
    };

    useEffect(() => {
        if (subject === 'complaint') {
            setName('resolution');
            return;
        }
        setName('response');
    }, [subject]);
    return (
        <div className="md:p-10 p-3 py-10 flex flex-col gap-8 overflow-x-auto">
            <div className="flex gap-3">
                <BackButton />
                <h1 className="font-poppins font-semibold text-neutral-900/80 text-[16px]sm:text-[24px]">
                    Update Knowledge base
                </h1>
            </div>
            <div className="grid bg-white max-w-[810px] rounded-3xl p-10 md:py-[80px] mx-auto md:w-full w-fit">
                <motion.div
                    layout
                    className="flex bg-neutral-200 px-[55px] py-[34px] items-center justify-center flex-col gap-10 w-full max-w-[510px] mx-auto"
                >
                    <Form className="w-full grid gap-4 min-w-[300px]">
                        <SelectInput
                            name="category"
                            label="category"
                            options={categories}
                        />
                        <SelectInput
                            name="subject"
                            label="subject"
                            options={subjects}
                            onValueChange={setSubject}
                        />
                        {subject && (
                            <>
                                <TextArea
                                    name={subject}
                                    label={subject}
                                    key={subject}
                                />

                                {Array.from({ length: responseCount }).map(
                                    () => (
                                        <TextArea
                                            name={name}
                                            label={name}
                                            key={Math.random()}
                                        />
                                    )
                                )}

                                <button
                                    type="button"
                                    className="font-semibold text-blue-400 text-xs font-poppins justify-self-start cursor-pointer border border-transparent active:border-blue-400 px-2 py-1"
                                    onClick={incrementResponseCount}
                                >
                                    {' '}
                                    Add more {name}
                                </button>
                            </>
                        )}
                        <div className="flex justify-center w-full py-8">
                            <ConfirmationDialog>
                                <Button type="submit">update</Button>
                            </ConfirmationDialog>
                        </div>
                    </Form>
                </motion.div>
            </div>
        </div>
    );
};

export default UpdateKnowledgeBase;
