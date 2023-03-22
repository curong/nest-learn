import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserParams } from "./params/create-user.params";
import { UpdateUserParams } from "./params/update-user.params";
import { User } from "./user.entity";

@Injectable()
export class UserService {
   
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    findUsers() {
        return this.userRepository.find()
    }

    findOneUser(userDetails: UpdateUserParams) {
        return this.userRepository.findOneBy(userDetails);

    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({...userDetails, createdAt: new Date()});
        this.userRepository.save(newUser);
    }

    updateUser(id: number ,updateUserDetail: UpdateUserParams) {
        return this.userRepository.update({id}, {...updateUserDetail})
    }

    deleteUser(id: number) {
        return this.userRepository.delete({id});
    }

}




