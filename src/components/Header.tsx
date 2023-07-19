import Avatar from './Avatar';
import Dropdown from './Dropdown';

const Header = () => (
    <header className="w-screen h-[70px] flex justify-between fixed top-0 px-[50px] py-5 items-center bg-neutral-100">
        <div className="flex gap-4 items-center">
            <img src="/logo.svg" alt="" className="h-[60px] w-[56px]" />
            <h1 className="font-sacramento text-red text-4xl font-semibold capitalize">
                Knowledge base
            </h1>
        </div>
        <div className="grid gap-3 grid-flow-col items-center justify-center">
            <Avatar fallback="DT" image="/avatar.png" />
            <span>Welcome,</span>
            <Dropdown />
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
