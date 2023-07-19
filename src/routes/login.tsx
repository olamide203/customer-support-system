import { Form, Link } from 'react-router-dom';
import PasswordInput from '../components/Input/Password';
import TextInput from '../components/Input/Text';
import Button from '../components/Button';
import Checkbox from '../components/Input/Checkbox';

const LoginPage = () => {
    return (
        <div className="min-h-screen w-full grid grid-cols-12">
            <div className="flex flex-col justify-center items-center col-span-5 bg-blue-400">
                <h1 className="uppercase text-neutral-50 font-poppins text-3xl font-bold text-center">
                    Welcome
                </h1>
                <img src="/heros/login.svg" alt="" />
            </div>
            <div className="col-span-7 flex flex-col items-center justify-center gap-4 py-10">
                <img src="/logo.svg" alt="" />
                <h1 className="font-sacramento text-3xl font-bold capitalize text-red">
                    knowledge base
                </h1>
                <div className="flex flex-col gap-4 w-[400px] items-center">
                    <h2 className="font-poppins font-bold text-2xl text-neutral-800">
                        Sign In
                    </h2>
                    <Form className="flex flex-col gap-8 w-full">
                        <TextInput label="username" name="username" />
                        <PasswordInput label="password" name="password" />
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
                            <Button size="medium" color="blue400" type="submit">
                                sign in
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
