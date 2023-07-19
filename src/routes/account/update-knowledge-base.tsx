import UpdateKnowledgeBaseForm from '../../components/Forms/UpdateKnowledgeBase';
import BackButton from '../../components/BackButton';

const UpdateKnowledgeBase = () => {
    return (
        <div className="p-10 flex flex-col gap-8">
            <div className="flex gap-3">
                <BackButton />
                <h1 className="font-poppins font-semibold text-neutral-900/80 text-[24px]">
                    Update Knowledge base
                </h1>
            </div>
            <UpdateKnowledgeBaseForm category="Account" />
        </div>
    );
};

export default UpdateKnowledgeBase;
