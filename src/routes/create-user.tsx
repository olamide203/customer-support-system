import { Form } from 'react-router-dom';
import TextInput from '../components/Input/Text';
import EmailInput from '../components/Input/Email';
import Button from '../components/Button';

const CreateUserPage = () => {
    return (
        <div className="min-h-screen w-full grid grid-cols-12">
            <div className="hidden lg:grid items-center justify-center lg:col-span-5 bg-blue-400">
                <img src="/heros/create-user.svg" alt="" />
            </div>
            <div className="col-span-12 lg:col-span-7 flex flex-col items-center justify-center gap-4 py-10">
                <img src="/logo.svg" alt="" />
                <h1 className="font-sacramento text-3xl font-bold capitalize text-red">
                    knowledge base
                </h1>
                <h2 className="font-poppins font-bold text-2xl text-neutral-800">
                    Create User
                </h2>
                <Form className="max-w-[400px] w-full flex flex-col gap-4 p-3 lg:p-0">
                    <TextInput label="Firstname" name="firstname" />
                    <TextInput label="Lastname" name="lastname" />
                    <TextInput label="Username" name="username" />
                    <TextInput label="Phone number" name="phone_number" />
                    <EmailInput label="Email" name="email" />
                    <div className="flex flex-row justify-between">
                        <Button size="medium" color="blue400" type="submit">
                            create
                        </Button>
                        <Button size="medium" color="outline" type="button">
                            reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default CreateUserPage;
