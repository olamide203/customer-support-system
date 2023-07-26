import { Form } from 'react-router-dom';
import PasswordInput from '../components/Input/Password';
import BackButton from '../components/BackButton';
import Button from '../components/Button';

const ResetPasswordPage = () => {
    return (
        <div className="min-h-screen flex itmes-center justify-center">
            <div className="h-fit my-auto w-full max-w-screen-md grid grid-cols-12 rounded-[30px] lg:border-[3px] lg:border-blue-400 overflow-hidden">
                <div className="hidden lg:grid items-center justify-center lg:col-span-5 bg-blue-400">
                    <img src="/heros/reset-password.svg" alt="" />
                </div>
                <div className="col-span-12 lg:col-span-7 flex flex-col items-center justify-center gap-4 py-10 relative">
                    <div className="absolute top-10 left-10">
                        <BackButton />
                    </div>
                    <img src="/logo.svg" alt="" />
                    <h1 className="font-sacramento text-3xl font-bold capitalize text-red">
                        knowledge base
                    </h1>
                    <div className="flex flex-col gap-4 w-full max-w-[400px] p-4 lg:p-0">
                        <h2 className="font-poppins font-bold text-2xl self-start text-neutral-800">
                            Reset <br /> Password
                        </h2>
                        <Form className="flex flex-col gap-8">
                            <PasswordInput label="password" name="password" />
                            <PasswordInput label="confirm password" name="" />
                            <div className="flex justify-center">
                                <Button
                                    size="medium"
                                    color="blue400"
                                    type="submit"
                                >
                                    reset password
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
