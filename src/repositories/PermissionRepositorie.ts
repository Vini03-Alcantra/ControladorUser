import { EntityRepository, Repository } from "typeorm";
import Permission from "../models/Permissions";

@EntityRepository(Permission)
class PermissionRepository extends Repository<Permission>{};
export default PermissionRepository;