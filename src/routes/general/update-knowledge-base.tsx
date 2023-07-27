/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { RingSpinner } from 'react-spinners-kit';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import TextArea from '../../components/Input/Textarea';
import JustDialog from '../../components/KnowledgeBase/JustDialog';
import SuccessModal from '../../components/KnowledgeBase/SuccessModal';
import SelectInput from '../../components/Select/Index';
import categories from '../../data/categories';
import subjects from '../../data/subjects';
import { hasEmptyValue, hasEmptyValueInArray } from '../../helpers/ObjectEmpty';
import { useUpdateCategories, usegetCategories } from '../../hooks/useUser';

const UpdateKnowledgeBase = () => {
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [responseCount, setResponseCount] = useState(1);
    const [visible, setVisible] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);
    const [moreContent, SetMoreContent] = useState<any>([
        {
            id: 1,
            comment: '',
        },
    ]);
    const [fields, setfields] = useState<any>({
        category_name: 'Checking for description',
        subcategory_name: 'Checking for descriptionkyc-sub',
        classification: '',
        subjectDes: '',
    });
    const { data, error, mutate, isLoading } = usegetCategories();
    const { mutate: updateMutate, isLoading: updateLoading } =
        useUpdateCategories();

    const incrementResponseCount = () => {
        const newCount = responseCount + 1;
        setResponseCount((prev) => prev + 1);
        SetMoreContent([
            ...moreContent,
            {
                id: newCount,
                comment: '',
            },
        ]);
    };

    const handleInputChangeAmount = (id: any, value: any) => {
        const updatedArray = moreContent.map((item: any) => {
            if (item.id === id) {
                return { ...item, comment: value };
            }
            return item;
        });

        SetMoreContent(updatedArray);
    };

    useEffect(() => {
        if (subject.length > 0) {
            setResponseCount(1);
            SetMoreContent([
                {
                    id: 1,
                    comment: '',
                },
            ]);

            setfields({ ...fields, classification: subject, subjectDes: '' });
            if (subject === 'complaint') {
                setName('resolution');
                return;
            }
            setName('response');
        }
    }, [subject]);

    useEffect(() => {
        mutate();
    }, []);

    const proceed = () => {
        setVisible(true);
    };

    const handleProceed = () => {
        setVisible(false);
        submit();
    };

    const submit = () => {
        const comments = moreContent.map(
            (item: { comment: any }, index: any) => ({
                comment: item.comment,
            })
        );

        const dataToSend = {
            id: 38,
            description: 'Checking for description',
            subCategory: {
                id: 37,
                description: 'Checking for descriptionkyc-sub',
            },
            issueDTO: {
                classification: fields.classification.toUpperCase(),
                description: fields.subjectDes,
            },
            commentDTOS: comments,
        };

        // const demo = {
        //     id: 38,
        //     description: 'Checking for description',
        //     subCategory: {
        //         id: 37,
        //         description: 'Checking for descriptionkyc-sub',
        //     },
        //     issueDTO: {
        //         classification: 'COMPLAINT',
        //         description: 'Test Issue',
        //         commentDTOS: [
        //             { comment: 'Comment 1' },
        //             { comment: 'Comment 2' },
        //             { comment: 'Comment 3' },
        //         ],
        //     },
        // };

        updateMutate(dataToSend, {
            onSuccess: (response: any) => {
                setResponseCount(1);
                setfields({
                    category_name: 'Checking for description',
                    subcategory_name: 'Checking for descriptionkyc-sub',
                    classification: '',
                    subjectDes: '',
                });
                SetMoreContent([
                    {
                        id: 1,
                        comment: '',
                    },
                ]);

                setSubject('');

                setSuccess(true);
            },
        });
    };

    useEffect(() => {
        if (
            !hasEmptyValue(fields) &&
            subject.length > 0 &&
            !hasEmptyValueInArray(moreContent)
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [fields, subject, moreContent]);

    return (
        <>
            {isLoading || updateLoading ? (
                <div className="loading-container">
                    <RingSpinner color={'#07178e'} />
                </div>
            ) : (
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
                            <div className="w-full grid gap-4 min-w-[300px]">
                                <SelectInput
                                    name="category"
                                    label="category"
                                    options={categories}
                                    onValueChange={(e) =>
                                        setfields({
                                            ...fields,
                                            category_name: e,
                                        })
                                    }
                                    value={fields?.category_name}
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
                                            onChange={(e: {
                                                target: { value: any };
                                            }) =>
                                                setfields({
                                                    ...fields,
                                                    subjectDes: e.target.value,
                                                })
                                            }
                                            value={fields.subjectDes}
                                        />

                                        {moreContent.map(
                                            (item: any, index: any) => {
                                                return (
                                                    <div key={index}>
                                                        <TextArea
                                                            name={name}
                                                            label={name}
                                                            value={item.comment}
                                                            // key={Math.random()}
                                                            onChange={(e: {
                                                                target: {
                                                                    value: any;
                                                                };
                                                            }) =>
                                                                handleInputChangeAmount(
                                                                    item.id,
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                );
                                            }
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
                                    <Button
                                        onClick={() => proceed()}
                                        disabled={disabled}
                                        color={`${
                                            disabled ? 'disabled' : 'blue400'
                                        }`}
                                    >
                                        update
                                    </Button>

                                    <JustDialog
                                        successMessage=" You request to update the knowledgebase has been successfully sent to the admin for approval."
                                        visible={visible}
                                        toggleVisibility={() =>
                                            setVisible(false)
                                        }
                                        proceed={() => handleProceed()}
                                    />

                                    <SuccessModal
                                        message=" You request to update the knowledgebase has been successfully sent to the admin for approval."
                                        visible={success}
                                        toggleVisibility={() =>
                                            setSuccess(false)
                                        }
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UpdateKnowledgeBase;
