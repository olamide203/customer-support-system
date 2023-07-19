import { Form } from 'react-router-dom';
import PasswordInput from '../components/Input/Password';
import Button from '../components/Button';

const ResetPasswordPage = () => {
    return (
        <div className="min-h-screen w-full grid grid-cols-12">
            <div className="grid items-center justify-center col-span-5 bg-blue-400">
                <img src="/heros/reset-password.svg" alt="" />
            </div>
            <div className="col-span-7 flex flex-col items-center justify-center gap-4 py-10">
                <img src="/logo.svg" alt="" />
                <h1 className="font-sacramento text-3xl font-bold capitalize text-red">
                    knowledge base
                </h1>
                <div className="flex flex-col gap-4 w-[400px]">
                    <h2 className="font-poppins font-bold text-2xl self-start text-neutral-800">
                        Reset <br /> Password
                    </h2>
                    <Form className="flex flex-col gap-8">
                        <PasswordInput label="password" name="password" />
                        <PasswordInput label="confirm password" name="" />
                        <div className="flex justify-center">
                            <Button size="medium" color="blue400" type="submit">
                                reset password
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
