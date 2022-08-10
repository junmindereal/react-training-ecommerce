import {
    PASSWORD,
    USERS
} from '../data/users';

export const apiLogin = (data = {}) => {
    const {email, password} = data;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = USERS.find(u => u.email === email);

            if (!user) {
                reject({message: "User was not found"});
            }

            if (password !== PASSWORD) {
                reject({message: "Incorrect password"});
            }

            resolve(user);
        }, 2000);
    });
}
