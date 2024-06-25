import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name: 'Miraj Ansari',
        email: 'miraj@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
    {
        name: 'Nargis Fatima',
        email: 'nargis@email.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
    },
];
export default users;