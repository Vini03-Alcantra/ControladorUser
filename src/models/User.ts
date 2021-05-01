import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToMany, JoinTable} from "typeorm";
import Role from "./Roles"

@Entity("user")
class User{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column()
    username: string;
    @Column()
    password: string;
    @CreateDateColumn()
    created_at: Date;

    @ManyToMany(() => Role)
    @JoinTable({
        name: "user_roles",
        joinColumns: [{name:"user_id"}],
        inverseJoinColumns: [{name: "role_id"}]
    })
    roles: Role[]
}

export default User;
