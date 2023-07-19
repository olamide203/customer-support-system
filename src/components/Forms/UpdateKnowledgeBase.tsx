import { Form } from 'react-router-dom';
import SelectInput from '../Input/Select';
import Button from '../Button';

const UpdateKnowledgeBaseForm = ({ category }: { category: string }) => {
    const subCategories = [
        { value: 'Account Opening', label: 'Account Opening' },
        { value: 'Account Closure', label: 'Account Closure' },
        { value: 'Dormancy', label: 'Dormancy' },
    ];
    return (
        <div className="grid bg-white px-[150px] py-[80px] p-10 rounded-3xl w-fit mx-auto">
            <div className="flex bg-neutral-200 items-center justify-center flex-col px-[55px] py-[34px] gap-10 w-fit">
                <h2 className="poppins font-medium text-neutral-900/80 text-[20px]">
                    CATEGORY: {category}
                </h2>
                <Form className="w-[400px] grid gap-4">
                    <SelectInput
                        name="subcategory"
                        label="subcategory"
                        options={subCategories}
                        placeholder=""
                    />
                    <SelectInput
                        name="subject"
                        label="subject"
                        options={subCategories}
                        placeholder=""
                    />
                    <div className="flex justify-between w-full py-8">
                        <Button type="submit">Submit</Button>
                        <Button type="button" color="outline">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default UpdateKnowledgeBaseForm;
