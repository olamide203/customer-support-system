import { Form } from 'react-router-dom';
import EmailInput from '../components/Input/Email';
import BackButton from '../components/BackButton';
import Button from '../components/Button';

const ForgotPasswordPage = () => {
    return (
        <div className="min-h-screen flex itmes-center justify-center">
            <div className="h-fit my-auto w-full max-w-screen-md grid grid-cols-12 rounded-[30px] lg:border-[3px] lg:border-blue-400 overflow-hidden">
                <div className="hidden lg:grid items-center justify-center lg:col-span-5 bg-blue-400">
                    <img src="/heros/forgot-password.svg" alt="" />
                </div>
                <div className="col-span-12 lg:col-span-7 flex flex-col items-center justify-center gap-4 py-10 relative">
                    <div className="absolute top-10 left-10">
                        <BackButton />
                    </div>
                    <img src="/logo.svg" alt="" />
                    <h1 className="font-sacramento text-3xl font-bold capitalize text-red">
                        knowledge base
                    </h1>
                    <div className="flex flex-col gap-8 max-w-[400px] w-full p-4 lg:p-0">
                        <h2 className="font-poppins font-bold text-2xl self-start text-neutral-800">
                            Forgot <br /> Password?
                        </h2>
                        <p className="text-neutral-900/80">
                            Please enter the e-mail linked to your account
                        </p>
                        <Form className="flex flex-col gap-8">
                            <EmailInput label="email" name="email" />

                            <div className="flex justify-center">
                                <Button
                                    size="medium"
                                    color="blue400"
                                    type="submit"
                                >
                                    proceed
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
