import { USERS } from '../data/users';

export const apiGetAccount = (authToken) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = USERS.find(u => u.authToken === authToken);

            if (!user) {
                reject({message: "User was not found"});
            }

            resolve(user);
        }, 1000);
    });
}
