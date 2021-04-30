import {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import PermissionRepository from "../repositories/PermissionRepositorie";
import RoleRepository from "../repositories/RoleRepositorie";

class RoleController{
    async create(request: Request, response: Response){
        const roleRepository = getCustomRepository(RoleRepository);
        const permissionsRepository = getCustomRepository(PermissionRepository)

        const {name, description, permissions} = request.body;

        const existRole = await roleRepository.findOne({ name })               
        
        if (existRole) {
            return response.status(400).json({err: "Permission Already exists"})
        }
        const existsPermissions = await permissionsRepository.findByIds(permissions)

        const role = roleRepository.create({
            name,
            description,
            permission: existsPermissions
        })

        await roleRepository.save(role)
        return response.json(role)
    }
}

export default new RoleController();