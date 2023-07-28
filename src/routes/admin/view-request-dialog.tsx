import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ConfirmationDialog from '../../components/KnowledgeBase/ConfirmationDialog';
import AdminDialog from '../../components/Notification/AdminDialog';

const ViewRequestDialog = () => {
    return (
        <>
            <Header isAdmin />
            <div className="mt-[70px] min-h-[100vh] bg-neutral-200 pt-[30px] px-[15vw]">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <BackButton />
                        <h1 className="font-poppins font-semibold text-neutral-900/80 text-[16px]sm:text-[24px] capitalize">
                            Request
                        </h1>
                    </div>
                    <Link
                        to="/admin"
                        className="text-sm text-blue-400 italic underline font-poppins"
                    >
                        Goto Dashboard
                    </Link>
                </div>
                <div>
                    <hr className="my-[30px]" />
                </div>

                <div className="flex justify-center">
                    <AdminDialog />
                </div>
            </div>
        </>
    );
};

export default ViewRequestDialog;
