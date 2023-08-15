import { GroupModel } from "tools/models/group.model";
import { RoleModel } from "tools/models/role.model";

export class UserCreateDto {
    name: string;
    surname: string;
    email: string;
    password: string;
    birthDate: Date;
    image: string;
}

export class UserLoginDto {
    email: string;
    password: string;
}

export class UserUpdateDto {
    name: string;
    surname: string;
    email: string;
    birthDate: Date;
    image: string;
    password: string;
    roles: RoleModel[];
    groups: GroupModel[]
}