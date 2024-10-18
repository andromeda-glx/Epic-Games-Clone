const profileImageLocation = './images/user-profile-images';

class User{
    username;
    #password;
    email;
    games;
    profileImage;

    constructor(userDetails){
        this.username = userDetails.username;
        this.#password = userDetails.password;
        this.email = userDetails.email;
        this.games = [];
        this.profileImage = `${profileImageLocation}/default-profile-pic.webp`;
    }

    verifyPassword(password){
        return password === this.#password;
    }

    changeProfilePic(profilePicName){
        this.profileImage = `${profileImageLocation}/${profilePicName}`;
    }
}

export function verifyUser(email, password){

    for(let user of users){
        if (email === user.email){
            return user.verifyPassword(password);
        }
    }
}

export const users = [
    {
        username: 'admin',
        password: 'admin',
        email: 'admin@gmail.com',
    }
].map(user => {
    return new User(user);
});