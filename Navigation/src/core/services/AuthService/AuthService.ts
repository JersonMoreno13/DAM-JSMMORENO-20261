import { User } from "../../entities";

import {
    UserRepository
} from "../../repositories";

import AuthRepository
from "../../repositories/AuthRepository/AuthRepository";

interface LoginData {
    username: string;
    password: string;
}

const AuthService = {

    register: async (
        user: User
    ): Promise<User> => {

        const userExists =
            UserRepository.findyUserName(
                user.username
            );

        if (userExists) {

            console.error(
                `Usuario con username ${user.username} ya existe`
            );

            throw new Error(
                "El usuario ya existe"
            );

        }

        const id =
            UserRepository.create(user);

        if (id === undefined) {

            console.error(
                `No se pudo crear el usuario ${user.username}`
            );

            throw new Error(
                "El usuario no se pudo crear"
            );

        }

        const newUser = {
            ...user,
            id
        };

        await AuthRepository.save(
            newUser
        );

        return newUser;
    },

    login: async ({
        username,
        password
    }: LoginData): Promise<User> => {

        const user =
            UserRepository.findyUserName(
                username
            );

        if (!user) {

            throw new Error(
                "Usuario no encontrado"
            );

        }

        if (
            user.contrasena !== password
        ) {

            throw new Error(
                "Contraseña incorrecta"
            );

        }

        await AuthRepository.save(
            user
        );

        return user;
    },

    logout: (): void => {

        AuthRepository.delete();

    }

};

export default AuthService;