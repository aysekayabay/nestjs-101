import { RoleDto } from "./role.dto";

export class GroupCreateDto {
    name: string;
    description: string;
}

export class GroupRolesDto {
    roles: RoleDto[];
}