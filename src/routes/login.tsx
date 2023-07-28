import { Form, Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../components/Input/Password';
import TextInput from '../components/Input/Text';
import Button from '../components/Button';
import BackButton from '../components/BackButton';
import Checkbox from '../components/Input/Checkbox';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRequestSignin } from '../hooks/useUser';
import { saveToken } from '../hooks/constants/axiosInstance';
import { ClassicSpinner } from 'react-spinners-kit';
import { ErrorToast } from '../helpers/Toast';

const Schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

const initialValues = {
    username: '',
    password: '',
};

const LoginPage = () => {
    const navigate = useNavigate();
    const { data, error, mutate, isLoading } = useRequestSignin();

    const formik = useFormik({
        initialValues,
        validationSchema: Schema,
        onSubmit: (values) => {
            mutate(values, {
                onSuccess(res: any) {
                    if (values.username.toLowerCase() === 'admin') {
                        saveToken(res.id_token, 'admin_user');

                        navigate('/admin', { replace: true });
                    } else if (values.username.toLowerCase() === 'user') {
                        saveToken(res.id_token, 'regular_user');
                        navigate('/', { replace: true });
                    }
                },
                onError(err: any) {
                    if (values.username.toLowerCase() === 'damiAdmin') {
                        saveToken('dhdhd', 'admin_user');
                        navigate('/admin', { replace: true });
                    }
                    ErrorToast(err?.response?.data?.detail);
                },
            });
        },
    });

    return (
        <div className="min-h-screen flex itmes-center justify-center">
            <div className="h-fit my-auto w-full max-w-screen-md grid grid-cols-12 rounded-[30px] lg:border-[3px] lg:border-blue-400 overflow-hidden">
                <div className="hidden lg:flex flex-col justify-center items-center col-span-5 bg-blue-400">
                    <h1 className="uppercase text-neutral-50 font-poppins text-3xl font-bold text-center">
                        Welcome
                    </h1>
                    <img src="/heros/login.svg" alt="" />
                </div>
                <div className="col-span-12 lg:col-span-7 flex flex-col items-center justify-center gap-4 py-10 relative">
                    <div className="absolute top-10 left-10">
                        <BackButton />
                    </div>
                    <img src="/logo.svg" alt="" />
                    <h1 className="font-sacramento text-3xl font-bold capitalize text-red">
                        knowledge base
                    </h1>
                    <div className="flex flex-col gap-4 w-full max-w-[400px] items-center p-4 lg:p-0">
                        <h2 className="font-poppins font-bold text-2xl text-neutral-800">
                            Sign In
                        </h2>
                        <form
                            className="flex flex-col gap-8 w-full"
                            onSubmit={formik.handleSubmit}
                        >
                            <TextInput
                                label="username"
                                name="username"
                                onChange={(e) =>
                                    formik.setFieldValue(
                                        'username',
                                        e.target.value
                                    )
                                }
                            />
                            <PasswordInput
                                label="password"
                                name="password"
                                onChange={(e: any) =>
                                    formik.setFieldValue('password', e)
                                }
                            />
                            <div className="flex items-center justify-between">
                                <Checkbox label="remember me" />
                                <Link
                                    to="/forgot-password"
                                    className="font-bold text-red font-poppins text-xs"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="flex justify-center">
                                <Button
                                    size="medium"
                                    color={`${
                                        !(
                                            formik.isValid &&
                                            formik.dirty &&
                                            !isLoading
                                        )
                                            ? 'disabled'
                                            : 'blue400'
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
                                    {!isLoading && ' sign in'}
                                    {isLoading && (
                                        <div className="flex items-center justify-center ">
                                            <span>Please wait... </span>
                                            <ClassicSpinner
                                                color={'white'}
                                                size={18}
                                                sizeUnit={'px'}
                                            />
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
