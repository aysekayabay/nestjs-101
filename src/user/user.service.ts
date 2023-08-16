import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

const result: UserModel[] = [];
@Injectable()
export class UserService {
    getAllUsers(): UserModel[] {
        if (result.length == 0) {
            this.createMockUser({
                birthDate: new Date(),
                email: "ayse@kayabay.com",
                name: "Ayşe",
                surname: "Kayabay",
                password: "123456"

            });
        }
        return result;
    }

    getUserById(id: string): any {
        const user = result.find(x => x.id == id);
        if (!user) {
            return "user does not exist"
        }
        else {
            return user;
        }
    }


    createUser(body: UserCreateDto) {
        const isExist = result.find(x => x.email == body.email);
        if (isExist) {
            return isExist;
        }
        else {
            this.createMockUser(body);
            return result.slice(result.length - 1, result.length);
        }
    }

    private createMockUser(data: any) {
        const user = new UserModel();
        user.id = (result.length + 1).toString();
        user.birthDate = data.birthDate;
        user.email = data.email;
        user.name = data.name;
        user.surname = data.surname;
        user.password = data.password;

        result.push(user);
    }
}