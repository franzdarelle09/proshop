import bcrypt from 'bcryptjs'

const users = [
    {
        fname:'Admin',
        lname:'User',
        email:'admin@gmail.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true
    },
    {
        fname:'John',
        lname:'Smith',
        email:'john@gmail.com',
        password: bcrypt.hashSync('123456')
    },
    {
        fname:'Jane',
        lname:'Williams',
        email:'jane@gmail.com',
        password: bcrypt.hashSync('123456')
    }
]

export default users