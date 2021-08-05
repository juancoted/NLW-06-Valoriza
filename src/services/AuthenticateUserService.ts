import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"

interface IAuthenticateUserRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async executec({ email, password }: IAuthenticateUserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)
        //verificar se o e-mail existe
        const user = await usersRepositories.findOne({
            email
        })
        if (!user) {
            throw new Error("E-mail/Password incorrect")
        }
        //verificar se a senha está correta
        const passwordMatch = await compare(password, user.password)
        if (!passwordMatch) {
            throw new Error("E-mail/Password Incorrect")
        }
        //Gerar um token
        const token = sign({
            email: user.email
        }, "988c7fd8bbe2c9125e7f0dc235cd43f9", {
            subject: user.id,
            expiresIn: "1d"
        })
        return token;
    }
}

export { AuthenticateUserService }