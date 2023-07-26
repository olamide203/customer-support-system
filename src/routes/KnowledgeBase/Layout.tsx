import { Outlet } from 'react-router-dom';
import BackButton from '../../components/BackButton';

const KnowledgeBaseLayout = () => {
    return (
        <div className="md:p-10 p-3 grid grid-rows-[auto_auto_1fr] gap-10 font-poppins h-full overflow-x-auto">
            <div className="flex gap-3">
                <BackButton />
                <h1 className="font-poppins font-semibold text-neutral-900/80 text-[16px]sm:text-[24px] capitalize">
                    Knowledge base
                </h1>
            </div>
            <Outlet />
        </div>
    );
};

export default KnowledgeBaseLayout;
