import { type StyledDivVariants } from '../components/Dashboard/Card';

export type Account = {
    name: string;
    icon: string;
    stats: number;
    color: StyledDivVariants['color'];
};
const data: Account[] = [
    {
        name: 'whatsapp',
        icon: '/icons/whatsapp.svg',
        stats: 24,
        color: 'green',
    },
    {
        name: 'messanger',
        icon: '/icons/messanger.svg',
        stats: 24,
        color: 'blue300',
    },
    {
        name: 'instagram',
        icon: '/icons/instagram.svg',
        stats: 24,
        color: 'pink',
    },
    {
        name: 'twitter',
        icon: '/icons/twitter.svg',
        stats: 24,
        color: 'blue200',
    },
];

export default data;
