export interface Option {
    id: number;
    name: string;
    children?: Option[];
}

const categories: Option[] = [
    {
        id: 1,
        name: 'all',
    },
    {
        id: 2,
        name: 'account',
        children: [
            {
                id: 1,
                name: 'all',
            },
            {
                id: 2,
                name: 'account opening',
            },
            {
                id: 3,
                name: 'account closure',
            },
            {
                id: 4,
                name: 'account reactivation',
            },
            {
                id: 5,
                name: 'dormancy',
            },
        ],
    },
    {
        id: 3,
        name: 'login',
    },
    {
        id: 4,
        name: 'signup',
    },
    {
        id: 5,
        name: 'password',
        children: [
            {
                id: 1,
                name: 'all',
            },
            {
                id: 2,
                name: 'reset password',
            },
            {
                id: 3,
                name: 'forgot password',
            },
        ],
    },
];

export default categories;
