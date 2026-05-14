import { User } from "../../entities";
import { UserRepository } from "../../repositories";
import AuthRepository from "../../repositories/AuthRepository/AuthRepository";

const AuthService = {

    register: async (user: User): Promise<User> => {
        
        const userExists = UserRepository.findyUserName(user.username);

        if(userExists){
            console.error("Usuario con username: $(user.username), ya existe");
            throw new Error("El usuario ya existe");
            
        }

        const id = UserRepository.create(user);
        
        if (id == undefined){
            console.error("Usuario con username: $(user.username), no se pudo crear");
            throw new Error("El usuario no se pudo crear");
        }

        const newUser = {...user, id};
        
        await AuthRepository.save(user);
        
        return newUser;

    }

}

export default AuthService;