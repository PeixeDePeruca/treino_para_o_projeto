import { createUserModel, findUserByEmail, findUserByUsername } from "../model/user"; 


    export async function createUser(name:string, email:string, username:string,
        password:string, confirmPassword:string) {
        try { 
            if ( password != confirmPassword ) {
                return { message: 'Passwords dont match' }; 
        }
        
        const userByEmail = await findUserByEmail(email);

        if ( userByEmail != undefined ) {
            return {message: 'Email already registered'};
        } 

        const UserByUsermame = await findUserByUsername(username);

        if ( UserByUsermame != undefined ) {
            return { message: 'Username already registered' };
        }

        const response = await createUserModel(name, email, username, password);

        return response;
    }
    catch(err) {
        return { message: 'Somehing went wrong' };
    }
}