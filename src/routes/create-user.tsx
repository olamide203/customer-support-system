import { Form, Link } from 'react-router-dom';
import TextInput from '../components/Input/Text';
import EmailInput from '../components/Input/Email';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

const CreateUserPage = () => {
    return (
        <div className="min-h-screen flex itmes-center justify-center py-10">
            <div className="h-fit my-auto w-full max-w-screen-lg grid grid-cols-12 rounded-[30px] lg:border-[3px] lg:border-blue-400 overflow-hidden">
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
                    <form className="max-w-[400px] w-full flex flex-col gap-4 p-3 lg:p-0">
                        <TextInput label="Firstname" name="firstname" />
                        <TextInput label="Lastname" name="lastname" />
                        <TextInput label="Username" name="username" />
                        <TextInput label="Phone number" name="phone_number" />
                        <EmailInput label="Email" name="email" />
                        <div className="flex flex-row justify-between">
                            <Button
                                size="medium"
                                color="adminBlue400"
                                type="submit"
                            >
                                create
                            </Button>
                            <Button size="medium" color="outline" type="button">
                                reset
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUserPage;
