import { useNavigate } from 'react-router-dom';
import { RxArrowLeft } from 'react-icons/rx';

const BackButton = () => {
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1);
    };

    return (
        <button
            onClick={navigateBack}
            type="button"
            className="text-blue-400 border border-blue-400 rounded-full h-8 aspect-square grid items-center justify-center"
        >
            <RxArrowLeft className="inline" />
        </button>
    );
};

export default BackButton;
