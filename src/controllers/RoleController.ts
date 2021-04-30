import {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import RoleRepository from "../repositories/RoleRepositorie";

class RoleController{
    async create(request: Request, response: Response){
        const roleRepository = getCustomRepository(RoleRepository);
        const {name, description} = request.body;
        const existRole = await roleRepository.findOne({ name })               
        
        if (existRole) {
            return response.status(400).json({err: "Permission Already exists"})
        }

        const role = roleRepository.create({
            name,
            description
        })

        await roleRepository.save(role)
        return response.json(role)
    }
}

export default new RoleController();