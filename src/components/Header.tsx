import Avatar from './Avatar';
import Dropdown from './Dropdown';

const Header = ({ isAdminHeader }) => (
    <header className="w-screen h-[70px] flex justify-between fixed top-0 px-[30px] lg:px-[50px] py-5 items-center bg-neutral-100 z-50">
        <div className="flex gap-2 lg:gap-4 items-center">
            <img
                src="/logo.svg"
                alt=""
                className="h-[30px] w-[30px] lg:h-[60px] lg:w-[56px]"
            />
            <h1 className="font-sacramento text-red text-xl md:text-2xl lg:text-4xl font-semibold capitalize">
                Knowledge base
            </h1>
        </div>
        <div className="grid gap-3 grid-flow-col items-center justify-center">
            <Avatar fallback="DT" image="/avatar.png" />

            {isAdminHeader ? (
                <div className="inline-flex flex-col items-center gap-9">
                    <span>Welcome,</span>
                    <Dropdown />

                    <label className="flex py-2 px-6 justify-end items-end gap-10 rounded-md bg-blue-900 text-white">
                        <span className='"text-white font-poppins font-medium text-sm"'>
                            Admin
                        </span>
                    </label>
                </div>
            ) : (
                <div className="hidden md:grid grid-flow-col gap-2">
                    <span>Welcome,</span>
                    <Dropdown />
                </div>
            )}

            <button type="button" className="relative h-full py-2">
                <img
                    src="/notification.svg"
                    alt=""
                    className="h-full object-contain"
                />
                <span className="absolute text-white -top-1 -right-6 bg-orange rounded-full p-3 font-bold h-[6px] flex items-center justify-center font-poppins">
                    31
                </span>
            </button>
        </div>
    </header>
);

export default Header;
