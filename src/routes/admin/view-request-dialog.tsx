import BackButton from '../../components/BackButton';
import Header from '../../components/Header';
import AdminDialog from '../../components/Notification/AdminDialog';

const ViewRequestDialog = () => {
    return (
        <>
            <Header isAdmin />
            <div className="mt-[70px] bg-neutral-200 pt-[30px] px-[15vw]">
                <div className="flex justify-between">
                    <div className="flex gap-3 items-center">
                        <BackButton />
                        <h1 className="font-poppins font-semibold text-neutral-900/80 text-[16px]sm:text-[24px] capitalize">
                            Request
                        </h1>
                    </div>
                    <span className="text-sm text-blue-400 italic underline font-poppins">
                        Goto Dashboard
                    </span>
                </div>
                <div>
                    <hr className="my-[30px]" />
                </div>

                <AdminDialog />
            </div>
        </>
    );
};

export default ViewRequestDialog;
