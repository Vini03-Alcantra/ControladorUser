import {Request, Response} from "express";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repositories/UserRepository";
import {compare} from 'bcryptjs';
import {sign} from "jsonwebtoken";

class SessionController {
    async create(request: Request, response: Response){
        const {username, password} = request.body;
        const userRepository = getCustomRepository(UserRepository)
        const user = await userRepository.findOne(
            {username},
            {relations: ["roles"]}
        )

        if(!user){
            return response.status(400).json({error: "User not found"})
        }

        const matchPassword = await compare(password, user.password)
        if(!matchPassword){
            return response.status(400).json({error: "Incorrect Password or username"})
        }

        const roles = user.roles.map(role => role.name)

        const token = sign({roles}, "62988e7abd164a1e1b549f41fc0ae440", {
            subject: user.id,
            expiresIn: "1d"
        })

        return response.json({
            token,
            user
        })
    }
}

export default new SessionController;