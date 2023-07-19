import Card, { type StyledDivVariants } from '../components/Dashboard/Card';
import Button from '../components/Button';
import accounts from '../data/accounts';

const Dashboard = () => {
    return (
        <div className="h-full p-[35px]">
            <h1 className="font-poppins font-semibold text-2xl text-neutral-900">
                Home
            </h1>
            <div className="grid grid-cols-2 gap-8 py-[45px]">
                {accounts.map((account) => (
                    <Card
                        name={account.name}
                        color={account.color}
                        icon={account.icon}
                        stats={account.stats}
                        key={account.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
