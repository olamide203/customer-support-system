import { Form, Link } from 'react-router-dom';
import TextInput from '../components/Input/Text';
import EmailInput from '../components/Input/Email';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCreateUser } from '../hooks/useUser';
import SuccessModal from '../components/KnowledgeBase/SuccessModal';
import { useState } from 'react';
import { ClassicSpinner } from 'react-spinners-kit';
import { ErrorToast } from '../helpers/Toast';

const Schema = Yup.object().shape({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    username: Yup.string().required('Username is required'),
    phoneNumber: Yup.string().required('phoneNumber is required'),
    email: Yup.string()
        .email('Wrong email format')
        .required('email is required'),
});

const initialValues = {
    firstname: '',
    lastname: '',
    username: '',
    phoneNumber: '',
    email: '',
};

const CreateUserPage = () => {
    const { data, error, mutate, isLoading } = useCreateUser();
    const [visible, setVisible] = useState<boolean>(false);

    const toggleVisibie = () => {
        setVisible(false);
        formik.resetForm();
    };
    const formik = useFormik({
        initialValues,
        validationSchema: Schema,
        onSubmit: (values) => {
            var dataToSend = {
                firstName: values.firstname,
                lastName: values.lastname,
                login: values.username,
                email: values.email,
                phoneNumber: values.phoneNumber,
            };

            mutate(dataToSend, {
                onSuccess(res: any) {
                    setVisible(true);
                },
                onError(err: any) {
                    ErrorToast(err?.response?.data?.title);
                },
            });
        },
    });

    return (
        <div className="min-h-screen flex itmes-center justify-center py-10">
            <div className="h-fit my-auto w-full max-w-screen-lg grid grid-cols-12 rounded-[30px] lg:border-[3px] lg:border-blue-400 overflow-hidden">
                {isLoading && (
                    <div className="loading-container-no-bg">
                        <ClassicSpinner color={'#07178e'} />
                    </div>
                )}
                <div className="hidden lg:grid items-center justify-center lg:col-span-5 bg-blue-400">
                    <div className="text-white font-poppins flex flex-row justify-between items-center">
                        <Link to="/admin" className="underline italic">
                            Goto Dashboard
                        </Link>
                        <BackButton color="white" />
                    </div>
                    <img src="/heros/create-user.svg" alt="" />
                </div>
                <div className="col-span-12 lg:col-span-7 flex flex-col items-center justify-center gap-4 py-10 relative">
                    <img src="/logo.svg" alt="" />
                    <h1 className="font-sacramento text-3xl font-bold capitalize text-red">
                        knowledge base
                    </h1>
                    <h2 className="font-poppins font-bold text-2xl text-neutral-800">
                        Create User
                    </h2>
                    <form
                        className="max-w-[400px] w-full flex flex-col gap-4 p-3 lg:p-0"
                        noValidate
                        onSubmit={formik.handleSubmit}
                    >
                        <TextInput
                            label="Firstname"
                            name="firstname"
                            onChange={(e) =>
                                formik.setFieldValue(
                                    'firstname',
                                    e.target.value
                                )
                            }
                            value={formik.values.firstname}
                        />
                        <TextInput
                            label="Lastname"
                            name="lastname"
                            onChange={(e) =>
                                formik.setFieldValue('lastname', e.target.value)
                            }
                            value={formik.values.lastname}
                        />
                        <TextInput
                            label="Username"
                            name="username"
                            onChange={(e) =>
                                formik.setFieldValue('username', e.target.value)
                            }
                            value={formik.values.username}
                        />
                        <TextInput
                            label="Phone number"
                            name="phoneNumber"
                            onChange={(e) =>
                                formik.setFieldValue(
                                    'phoneNumber',
                                    e.target.value
                                )
                            }
                            value={formik.values.phoneNumber}
                        />
                        <EmailInput
                            label="Email"
                            name="email"
                            onChange={(e) =>
                                formik.setFieldValue('email', e.target.value)
                            }
                            value={formik.values.email}
                        />
                        <div className="flex flex-row justify-between">
                            <Button
                                size="medium"
                                color={`${
                                    !(
                                        formik.isValid &&
                                        formik.dirty &&
                                        !isLoading
                                    )
                                        ? 'disabled'
                                        : 'adminBlue400'
                                }`}
                                type="submit"
                                disabled={
                                    !(
                                        formik.isValid &&
                                        formik.dirty &&
                                        !isLoading
                                    )
                                }
                            >
                                create
                            </Button>
                            <Button
                                size="medium"
                                color="outline"
                                type="button"
                                onClick={() => formik.resetForm()}
                            >
                                reset
                            </Button>
                        </div>
                    </form>

                    <SuccessModal
                        message={`User ${formik.values.lastname} ${formik.values.firstname} has successfully
                        been created and login credentials has
                        been sent to her mail`}
                        visible={visible}
                        toggleVisibility={() => toggleVisibie()}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateUserPage;
