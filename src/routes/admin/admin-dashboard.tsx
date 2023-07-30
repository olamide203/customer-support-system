import Button from '../../components/Button';
import Header from '../../components/Header';
import InfoText from '../../components/Text/InfoText';
import LogOut from '../../helpers/Logout';
import { useNavigate } from 'react-router';

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header isAdmin />
            <div className="bg-blue-100 w-[100vw] pt-[35px] h-[95vh] mt-[-25px] bg-opacity-30">
                <div className="flex justify-center gap-4">
                    <InfoText text="You have 35 requests awaiting your action" />
                    <InfoText text="You have 35 requests awaiting your action" />
                    <InfoText text="You have 35 requests awaiting your action" />
                </div>
                <div className="flex h-full">
                    <div
                        style={{
                            backgroundImage: 'url(/undraw-chat-bot.svg)',
                            backgroundSize: '80%',
                        }}
                        className="w-3/5 h-full bg-center bg-no-repeat bg-contain hidden md:inline"
                    ></div>
                    <div className="flex flex-col justify-center items-center md:w-2/5 w-full">
                        <div className="flex flex-col gap-14">
                            <Button
                                onClick={() => navigate('/admin/request')}
                                className="relative"
                                size="medium"
                                color="adminYellow100"
                            >
                                VIEW REQUESTS
                                <div className="absolute -bottom-8 left-20 w-[17vw] h-0.5 bg-red"></div>
                            </Button>
                            <Button
                                onClick={() => navigate('/create-user')}
                                className="relative"
                                color="adminYellow100"
                            >
                                CREATE USER
                                <div className="absolute -bottom-8 left-18 w-[15vw] h-0.5 bg-red"></div>
                            </Button>
                            <Button
                                onClick={() => navigate('/admin/knowledge-base')}
                                className="relative"
                                color="adminYellow100"
                            >
                                GOTO KNOWLEDGE BASE
                                <div className="absolute -bottom-8 left-20 w-[17vw] h-0.5 bg-red"></div>
                            </Button>

                            <Button
                                className="relative"
                                color="adminYellow100"
                                onClick={() => LogOut()}
                            >
                                LOGOUT
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
