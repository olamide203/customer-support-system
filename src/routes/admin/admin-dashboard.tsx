import { Link } from 'react-router-dom';
import { Root as AspectRatio } from '@radix-ui/react-aspect-ratio';
import Button from '../../components/Button';
import InfoText from '../../components/Text/InfoText';

const AdminDashboard = () => {
    return (
        <>
            <div className="flex justify-center gap-4 justify-self-start">
                <InfoText text="You have 35 requests awaiting your action" />
                <InfoText text="You have 35 requests awaiting your action" />
                <InfoText text="You have 35 requests awaiting your action" />
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center justify-center h-full py-[40px]">
                <div className="w-full grid items-center justify-center">
                    <div className="w-[500px] mx-auto my-auto">
                        <AspectRatio ratio={553 / 302}>
                            <img
                                src="/undraw-chat-bot.svg"
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </AspectRatio>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center md:w-2/5 w-full">
                    <div className="flex flex-col gap-14">
                        <Button
                            className="relative"
                            size="medium"
                            color="adminYellow100"
                        >
                            VIEW REQUESTS
                            <div className="absolute -bottom-8 left-20 w-[17vw] h-0.5 bg-red" />
                        </Button>
                        <Link to="/create-user">
                            <Button className="relative" color="adminYellow100">
                                CREATE USER
                                <div className="absolute -bottom-8 left-18 w-[15vw] h-0.5 bg-red pointer-events-none" />
                            </Button>
                        </Link>
                        <Link to="/admin/knowledge-base">
                            <Button className="relative" color="adminYellow100">
                                GOTO KNOWLEDGE BASE
                                <div className="absolute -bottom-8 left-20 w-[17vw] h-0.5 bg-red" />
                            </Button>
                        </Link>
                        <Button className="relative" color="adminYellow100">
                            LOGOUT
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
