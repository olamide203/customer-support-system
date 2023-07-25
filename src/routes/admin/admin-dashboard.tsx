import Button from '../../components/Button';
import Header from '../../components/Header';
import InfoText from '../../components/Text/InfoText';

const AdminDashboard = () => {
    return (
        <>
            <Header isAdmin />
            <div className="bg-blue-100 w-[100vw] mt-[70px] pt-[35px] h-[95vh] bg-opacity-30">
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
                                className="relative"
                                size="medium"
                                color="adminYellow100"
                            >
                                VIEW REQUESTS
                                <div className="absolute -bottom-8 left-20 w-[17vw] h-0.5 bg-red"></div>
                            </Button>
                            <Button className="relative" color="adminYellow100">
                                CREATE USER
                                <div className='absolute -bottom-8 left-18 w-[15vw] h-0.5 bg-red'></div>
                            </Button>
                            <Button className="relative" color="adminYellow100">
                                GOTO KNOWLEDGE BASE
                                <div className="absolute -bottom-8 left-20 w-[17vw] h-0.5 bg-red"></div>
                            </Button>
                            <Button className="relative" color="adminYellow100">
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
